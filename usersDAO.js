const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'users.json');

// Helper function to read data from the JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      // If the file does not exist, return an empty object
      return {};
    } else {
      // Rethrow the error for the caller to handle
      throw err;
    }
  }
};

// Helper function to write data to the JSON file
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// Create a new user or update an existing user
const createUserOrUpdate = (ip, userData) => {
  const data = readData();
  data[ip] = userData;
  writeData(data);
  console.log(`User with IP ${ip} has been created/updated.`);
};

// Retrieve a user by IP
const getUserByIP = (ip) => {
  const data = readData();
  return data[ip] || null;
};

// Update a user's data
const updateUser = (ip, newUserData) => {
  const data = readData();
  if (data[ip]) {
    data[ip] = { ...data[ip], ...newUserData };
    writeData(data);
    console.log(`User with IP ${ip} has been updated.`);
  } else {
    console.log(`User with IP ${ip} not found.`);
  }
};

// Delete a user by IP
const deleteUserByIP = (ip) => {
  const data = readData();
  if (data[ip]) {
    delete data[ip];
    writeData(data);
    console.log(`User with IP ${ip} has been deleted.`);
  } else {
    console.log(`User with IP ${ip} not found.`);
  }
};

// Export the CRUD functions
module.exports = {
  createUserOrUpdate,
  getUserByIP,
  updateUser,
  deleteUserByIP
};
