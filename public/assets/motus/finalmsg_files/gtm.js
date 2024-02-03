
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"16",
  
  "macros":[{
      "function":"__c",
      "vtp_value":"meetmotusbank.ca, motusbank.ca, dev.thrillworks.com"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",0],8,16],",c=",["escape",["macro",1],8,16],";try{var a=b.replace(\/(www.)|(\\\/$)|(\\s)\/ig,\"\").replace(\/(^,)|(,$)\/ig,\"\").replace(\/,\/ig,\"|\");if((a=1\u003Ca.length?new RegExp(a,\"ig\"):void 0)\u0026\u0026null!==",["escape",["macro",2],8,16],".match(a)\u0026\u0026",["escape",["macro",2],8,16],"!==c)return\"yes\"}catch(d){}return\"no\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(new Date).getTime();\"undefined\"!==typeof performance\u0026\u0026\"function\"===typeof performance.now\u0026\u0026(a+=performance.now());return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(c){var b=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"===c?b:b\u00263|8).toString(16)})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var h=1,g=8;return function(b){b.set(\"dimension\"+h,b.get(\"clientId\"));b.set(\"dimension\"+g,\"No\");var k=[{name:\"EMAIL\",regex:\/[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}\/gi,group:\"\"},{name:\"EMAIL\",regex:\/(\u0026|\\?)((email=))[\\d\\+\\s][^\u0026\\\/\\?]+\/gi,group:\"$1$2\"},{name:\"PHONE\",regex:\/(\u0026|\\?)((tel=)|(telephone=)|(phone=)|(phone_number))[\\d\\+\\s][^\u0026\\\/\\?]+\/gi,group:\"$1$2\"},{name:\"NAME\",regex:\/(\u0026|\\?)((firstname=)|(lastname=)|(name=)|(username=))[^\u0026\\\/\\?]+\/gi,group:\"$1$2\"},{name:\"PASSWORD\",regex:\/(\u0026|\\?)((password=)|(passwd=)|(pass=)|(pwd=))[^\u0026\\\/\\?]+\/gi,\ngroup:\"$1$2\"},{name:\"ADDRESS\",regex:\/(\u0026|\\?)((address=))[^\u0026\\\/\\?]+\/gi,group:\"$1$2\"},{name:\"USERID\",regex:\/(\u0026|\\?)((OMOUserId=))[^\u0026\\\/\\?]+\/gi,group:\"$1$2\"}],l=b.get(\"sendHitTask\"),c,a,d,e,f=[],m=new RegExp(\"(cd\"+g+\"\\x3d)[^\\x26]+\",\"gi\");b.set(\"sendHitTask\",function(b){a=b.get(\"hitPayload\").split(\"\\x26\");for(c=0;c\u003Ca.length;c++)d=a[c].split(\"\\x3d\"),e=decodeURIComponent(d[1]),k.forEach(function(a){a.regex.test(e)\u0026\u0026f.push(d[0]+\":\"+a.name);e=e.replace(a.regex,a.group+\"[PII: \"+a.name+\"]\")}),d[1]=encodeURIComponent(e),\na[c]=d.join(\"\\x3d\");a=a.join(\"\\x26\");a=0\u003Cf.length?a.replace(m,\"$1Yes: \"+f.join(\", \")):a;b.set(\"hitPayload\",a,!0);l(b)})}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],";if(a)return ",["escape",["macro",7],8,16],".split(\"mailto:\")[1].split(\"?\")[0].replace(\"@\",\"(at)\")})();"]
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!(",["escape",["macro",9],8,16],"\u0026\u0026\"80\"\u003C=",["escape",["macro",10],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";return a.split(\"\/\").pop().replace(\".mp4\",\"\")})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ip_name"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ip_cr"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ip_pos"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",14],8,16],",b=",["escape",["macro",15],8,16],",c=",["escape",["macro",16],8,16],",d=a+\"_\"+b+\"_\"+c;return{ecommerce:{promoClick:{promotions:[{id:d,name:a,creative:b,position:c}]}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",14],8,16],",b=",["escape",["macro",15],8,16],",c=",["escape",["macro",16],8,16],",d=a+\"_\"+b+\"_\"+c;return{ecommerce:{promoView:{promotions:[{id:d,name:a,creative:b,position:c}]}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],";if(a)return a.replace(\/[^\\d]\/g,\"\").replace(\/.(?=.{4,}$)\/g,\"#\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=[{width:\"all\",size:\"1: Below 768px\"},{width:\"(min-width: 769px)\",size:\"2: 769px to 1023px\"},{width:\"(min-width: 1024px)\",size:\"3: At Least 1024px\"}],b;c.forEach(function(a){window.matchMedia?window.matchMedia(a.width).matches\u0026\u0026(b=a.size):Number(a.width.replace(\/\\D\/ig,\"\"))\u003Cdocument.documentElement.clientWidth\u0026\u0026(b=a.size)});return b})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],";return null!==a.match(\/(\\?|\u0026)gcl(id|src)=[^\u0026]+\/)||null!==a.match(\/(\\?|\u0026)utm_source=[^\u0026]+\/)?\"Non-Direct\":null!==document.referrer.match(\/.+\/)?(a=",["escape",["macro",0],8,16],",a=a.replace(\/(www.)|(\\\/$)|(\\s)|(^,)|(,$)\/ig,\"\").replace(\/,\/ig,\"|\"),null!==document.referrer.match(a)?void 0:\"Non-Direct\"):\"Direct\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"#DateCreatePost\").innerText;if(a){a=new Date(a);var b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a=a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gtm_cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],";return a?a:void 0})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ATTRIBUTE",
      "vtp_defaultValue":"(not set)",
      "vtp_attribute":"data-gtm-type"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ATTRIBUTE",
      "vtp_defaultValue":"(not set)",
      "vtp_attribute":"data-gtm-label"
    },{
      "function":"__jsm",
      "convert_undefined_to":"(not set)",
      "vtp_javascript":["template","(function(){if(\"product\"==",["escape",["macro",26],8,16],"){var a=",["escape",["macro",27],8,16],";a=a.match(\/^(\\d+)\/);return null!==a?a[0]:void 0}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoImpressions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"productImpressions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={};",["escape",["macro",29],8,16],"\u0026\u00260\u003C",["escape",["macro",29],8,16],".length\u0026\u0026(a.promoView={promotions:",["escape",["macro",29],8,16],"});",["escape",["macro",30],8,16],"\u0026\u00260\u003C",["escape",["macro",30],8,16],".length\u0026\u0026(a.impressions=",["escape",["macro",30],8,16],");return{ecommerce:a}})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__dbg"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",35],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/(\\?.*)?$","value","Home"],["map","key","^\/(Community\/good-to-know|Save|Invest|Borrow|Live|Learn).*","value","Good to Know"],["map","key","^\/([^\/]+).*","value","$1"]]
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",35],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/Community\/Good-to-know\/(Save|Invest|Borrow|Live|Learn)\/.*","value","true"]]
    },{
      "function":"__d",
      "vtp_elementSelector":"h1",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"true\"==",["escape",["macro",39],8,16],"?",["escape",["macro",40],8,16],":void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"true\"==",["escape",["macro",39],8,16],"?",["escape",["macro",23],8,16],":void 0})();"]
    },{
      "function":"__d",
      "vtp_elementId":"category",
      "vtp_selectorType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"true\"==",["escape",["macro",39],8,16],"?",["escape",["macro",43],8,16],":void 0})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"p.author-container",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"true\"==",["escape",["macro",39],8,16],"?",["escape",["macro",45],8,16],":void 0})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",34],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"],["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",6]],["map","fieldName","userId","value",["macro",25]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",36]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",4]],["map","index","3","dimension",["macro",5]],["map","index","4","dimension",["template",["macro",37],": ",["macro",38]]],["map","index","23","dimension",["macro",41]],["map","index","24","dimension",["macro",42]],["map","index","25","dimension",["macro",44]],["map","index","27","dimension",["macro",46]],["map","index","9","dimension",["macro",20]],["map","index","10","dimension",["macro",22]],["map","index","18","dimension",["macro",25]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-132673147-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"PROTOCOL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"IS_OUTBOUND",
      "vtp_affiliatedDomains":["macro",0]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",10],
      "vtp_defaultValue":["macro",10],
      "vtp_map":["list",["map","key","95","value","100"]]
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorMessage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",35],8,16],";return{ecommerce:{click:{actionField:{list:a},products:[{id:",["escape",["macro",28],8,16],"}]}}}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",61],
      "vtp_map":["list",["map","key","5","value","5"],["map","key","25","value","20"],["map","key","50","value","25"],["map","key","75","value","25"],["map","key","95","value","20"],["map","key","100","value","5"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",62],8,16],"||0,b=",["escape",["macro",63],8,16],"||0;return Math.round(a\/100*b)})();"]
    },{
      "function":"__c",
      "vtp_value":"-1"
    },{
      "function":"__c",
      "vtp_value":"5,25,50,75,95"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"blog.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formFieldName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formFieldId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formFieldIndex"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",35],8,16],";return{ecommerce:{impressions:[{id:",["escape",["macro",28],8,16],",list:a}]}}})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ip_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"blog.postTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"blog.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"blog.postDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"blog.postAuthor"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Timer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"30s",
      "vtp_eventLabel":["template",["macro",1],["macro",35]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Click to Email",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","11","metric","1"]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":["macro",8],
      "vtp_eventLabel":["template",["macro",1],["macro",35]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Intersite Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":["template",["macro",2],["macro",50]],
      "vtp_eventLabel":["template",["macro",1],["macro",35]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","13","metric","1"]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":["template",["macro",2],["macro",50]],
      "vtp_eventLabel":["template",["macro",1],["macro",35]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",11],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Scroll Depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","5","metric","20"]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":["template",["macro",52],"%"],
      "vtp_eventLabel":["template",["macro",1],["macro",35]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":18
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Accordions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":["macro",54],
      "vtp_eventLabel":["template",["macro",1],["macro",35]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":27
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Forms",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Submit Success",
      "vtp_eventLabel":["macro",56],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",56]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":30
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Forms",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Submit Error",
      "vtp_eventLabel":["macro",57],
      "vtp_dimension":["list",["map","index","7","dimension",["macro",56]],["map","index","15","dimension",["macro",57]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Blog",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","16","metric","1"]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Click to Share",
      "vtp_eventLabel":["macro",58],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",17],
      "vtp_eventCategory":"Call to Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Promotion Click",
      "vtp_eventLabel":["macro",14],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":35
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",59],
      "vtp_eventCategory":"Call to Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Product Click",
      "vtp_eventLabel":["macro",28],
      "vtp_dimension":["list",["map","index","21","dimension",["macro",28]],["map","index","22","dimension",["macro",28]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/[404]",["macro",35]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":37
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","10","metric","1"]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":["template",["macro",2],["macro",50]],
      "vtp_eventLabel":["template",["macro",1],["macro",35]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Videos",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","4","metric","1"],["map","index","7","metric",["macro",62]],["map","index","8","metric",["macro",64]]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Complete",
      "vtp_eventLabel":["macro",13],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",12]],["map","index","6","dimension",["macro",13]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Click to Call",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","12","metric","1"]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":["macro",19],
      "vtp_eventLabel":["template",["macro",1],["macro",35]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Blog",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","14","metric","1"]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Read Article",
      "vtp_eventLabel":["template",["macro",1],["macro",35]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Blog",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Click Category Link",
      "vtp_eventLabel":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Videos",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","3","metric","1"]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Start",
      "vtp_eventLabel":["macro",13],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",12]],["map","index","6","dimension",["macro",13]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":45
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Videos",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","7","metric",["macro",62]],["map","index","8","metric",["macro",64]]],
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":["template","Watched ",["macro",61],"%"],
      "vtp_eventLabel":["macro",13],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",12]],["map","index","6","dimension",["macro",13]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":46
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Blog",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Click to Sort",
      "vtp_eventLabel":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Blog",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Click Article Link",
      "vtp_eventLabel":["macro",27],
      "vtp_dimension":["list",["map","index","16","dimension",["macro",50]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",31],
      "vtp_eventCategory":"Call to Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",47],
      "vtp_eventAction":"Impressions",
      "vtp_eventLabel":["template",["macro",1],["macro",35]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_22",
      "tag_id":54
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_23",
      "tag_id":55
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_24",
      "tag_id":56
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"11195435_26",
      "tag_id":57
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_33",
      "tag_id":58
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_35",
      "tag_id":59
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"a[href*='ip_name']",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"80",
      "vtp_onScreenDuration":"2000",
      "vtp_uniqueTriggerId":"11195435_36",
      "tag_id":60
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_37",
      "tag_id":61
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_38",
      "tag_id":62
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"a[data-gtm-type='product']",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"80",
      "vtp_onScreenDuration":"2000",
      "vtp_uniqueTriggerId":"11195435_44",
      "tag_id":63
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_45",
      "tag_id":64
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_47",
      "tag_id":65
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_53",
      "tag_id":66
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"20,40,60,80,95",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"11195435_57",
      "vtp_enableTriggerStartOption":true,
      "tag_id":67
    },{
      "function":"__cl",
      "tag_id":68
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11195435_62",
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b;var c=b=!0;var m=document.querySelectorAll(\"video\"),e=[],g=[],f=[],h=[];if(1==b\u0026\u0026\"-1\"!=",["escape",["macro",65],8,16],"){b=",["escape",["macro",65],8,16],";b=b.split(\",\");for(var n=0;n\u003Cb.length;n++)g.push(b[n].trim())}if(1==c\u0026\u0026\"-1\"!=",["escape",["macro",66],8,16],")for(c=",["escape",["macro",66],8,16],",c=c.split(\",\"),b=0;b\u003Cc.length;b++)e.push(c[b].trim());var k={};var l={};for(c=0;c\u003Cm.length;c++)m[c].addEventListener(\"play\",function(a){var c=this.getAttribute(\"data-gtm-video-id\")||this.getAttribute(\"id\")||\"(not set)\",b=this.getAttribute(\"data-gtm-video-title\")||\nthis.getAttribute(\"title\")||\"(not set)\";-1==f.indexOf(a.target.currentSrc)\u0026\u0026(f.push(a.target.currentSrc),window.dataLayer.push({event:\"gtm.video\",\"gtm.videoStatus\":\"start\",\"gtm.videoProvider\":\"html5\",\"gtm.videoCurrentTime\":Math.round(a.target.currentTime),\"gtm.videoUrl\":a.target.currentSrc,\"gtm.videoDuration\":a.target.duration,\"gtm.videoTitle\":b,videoId:c}),-1\u003Ch.indexOf(a.target.currentSrc)\u0026\u0026h.splice(h.indexOf(a.target.currentSrc),1))}),m[c].addEventListener(\"ended\",function(a){var c=this.getAttribute(\"data-gtm-video-id\")||\nthis.getAttribute(\"id\")||\"(not set)\",b=this.getAttribute(\"data-gtm-video-title\")||this.getAttribute(\"title\")||\"(not set)\";-1==h.indexOf(a.target.currentSrc)\u0026\u0026(window.dataLayer.push({event:\"gtm.video\",\"gtm.videoStatus\":\"complete\",\"gtm.videoProvider\":\"html5\",\"gtm.videoCurrentTime\":Math.round(a.target.currentTime),\"gtm.videoUrl\":a.target.currentSrc,\"gtm.videoDuration\":a.target.duration,\"gtm.videoTitle\":b,videoId:c,\"gtm.videoPercent\":\"100\"}),-1\u003Cf.indexOf(a.target.currentSrc)\u0026\u0026f.splice(f.indexOf(a.target.currentSrc),\n1),h.push(a.target.currentSrc))}),m[c].addEventListener(\"timeupdate\",function(a){var c=Math.round(a.target.currentTime\/a.target.duration*100),b=this.getAttribute(\"data-gtm-video-id\")||this.getAttribute(\"id\")||\"(not set)\",f=this.getAttribute(\"data-gtm-video-title\")||this.getAttribute(\"title\")||\"(not set)\";if(e\u0026\u00260\u003Ce.length)for(var d=0;d\u003Ce.length;d++)!(c\u003E=parseInt(e[d]))||k[a.target.currentSrc]\u0026\u0026k[a.target.currentSrc][e[d]]||(k[a.target.currentSrc]||(k[a.target.currentSrc]={}),k[a.target.currentSrc][e[d]]=\n\"yes\",window.dataLayer.push({event:\"gtm.video\",\"gtm.videoStatus\":\"progress\",\"gtm.videoProvider\":\"html5\",\"gtm.videoCurrentTime\":Math.round(a.target.currentTime),\"gtm.videoUrl\":a.target.currentSrc,\"gtm.videoDuration\":a.target.duration,\"gtm.videoTitle\":f,videoId:b,\"gtm.videoPercent\":e[d]}));if(g\u0026\u00260\u003Cg.length)for(d=0;d\u003Cg.length;d++)!(a.target.currentTime\u003E=parseInt(g[d]))||l[a.target.currentSrc]\u0026\u0026l[a.target.currentSrc][g[d]]||(l[a.target.currentSrc]||(l[a.target.currentSrc]={}),l[a.target.currentSrc][g[d]]=\n\"yes\",window.dataLayer.push({event:\"gtm.video\",\"gtm.videoStatus\":\"progress\",\"gtm.videoProvider\":\"html5\",\"gtm.videoCurrentTime\":Math.round(a.target.currentTime),\"gtm.videoUrl\":a.target.currentSrc,\"gtm.videoDuration\":a.target.duration,\"gtm.videoTitle\":f,videoId:b}))})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EElement.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(a){a=(this.document||this.ownerDocument).querySelectorAll(a);for(var b=a.length;0\u003C=--b\u0026\u0026a.item(b)!==this;);return-1\u003Cb});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar readJSConfig={debug:{console:!1,overlay:!1},el:\"div.story-content\",cb:function(){dataLayer.push({event:\"articleRead\"})}};\n(function(){var g=!1,k=!1,l=[],a={resetConfigStatus:function(){a.status={strict:!1,spa:!1,debug:{console:!1,overlay:!1,overlays:{}},timeInterval:1.5,activity:{scrollDepth:0,maxVertical:0,timeOnPage:0,timeInUnknownState:0,timeInView:0,scrolled:!1,dnp:0,vpp:0,pollingPoints:0,readingPoints:0,increment:100,read:!1,averageReadSpeed:5},thresholds:{viewport:50,domNode:30,minVertical:80,readingPoint:400,domPolling:100,minTimeInView:3,maxTimeInView:300,scrollDepth:0,percentagePoint:40}};return!0},getConfig:function(){return a.status},\nsetConfig:function(){if(g)return!1;if(\"undefined\"===typeof readJSConfig)return a.console(\"Error: Cannot find Read JS config object readJSConfig\"),!1;\"boolean\"===typeof readJSConfig.spa\u0026\u0026(a.status.spa=readJSConfig.spa);\"boolean\"===typeof readJSConfig.strict\u0026\u0026(a.status.strict=readJSConfig.strict);readJSConfig.debug\u0026\u0026(\"boolean\"===typeof readJSConfig.debug.console\u0026\u0026(a.status.debug.console=readJSConfig.debug.console),\"boolean\"===typeof readJSConfig.debug.overlay\u0026\u0026(a.status.debug.overlay=readJSConfig.debug.overlay));\n\"number\"===typeof readJSConfig.timeInterval\u0026\u0026(a.status.timeInterval=readJSConfig.timeInterval);readJSConfig.activity\u0026\u0026(\"number\"===typeof readJSConfig.activity.increment\u0026\u0026(a.status.activity.increment=readJSConfig.activity.increment),\"number\"===typeof readJSConfig.activity.averageReadSpeed\u0026\u0026(a.status.activity.averageReadSpeed=readJSConfig.activity.averageReadSpeed));readJSConfig.thresholds\u0026\u0026(\"number\"===typeof readJSConfig.thresholds.viewport\u0026\u0026(a.status.thresholds.viewport=readJSConfig.thresholds.viewport),\n\"number\"===typeof readJSConfig.thresholds.domNode\u0026\u0026(a.status.thresholds.domNode=readJSConfig.thresholds.domNode),\"number\"===typeof readJSConfig.thresholds.readingPoint\u0026\u0026(a.status.thresholds.readingPoint=readJSConfig.thresholds.readingPoint),\"number\"===typeof readJSConfig.thresholds.domPolling\u0026\u0026(a.status.thresholds.domPolling=readJSConfig.thresholds.domPolling),\"number\"===typeof readJSConfig.thresholds.timeInView\u0026\u0026(a.status.thresholds.timeInView=readJSConfig.thresholds.timeInView),\"number\"===typeof readJSConfig.thresholds.minTimeInView\u0026\u0026\n(a.status.thresholds.minTimeInView=readJSConfig.thresholds.minTimeInView),\"number\"===typeof readJSConfig.thresholds.maxTimeInView\u0026\u0026(a.status.thresholds.maxTimeInView=readJSConfig.thresholds.maxTimeInView),\"number\"===typeof readJSConfig.thresholds.minVertical\u0026\u0026(a.status.thresholds.minVertical=readJSConfig.thresholds.minVertical),\"number\"===typeof readJSConfig.thresholds.percentagePoint\u0026\u0026(a.status.thresholds.percentagePoint=readJSConfig.thresholds.percentagePoint));return\"string\"!==typeof readJSConfig.el?\n(a.console(\"ERROR: readJS.setConfig() expected a string representation of css selector\"),!1):\"function\"!==typeof readJSConfig.cb?(a.console(\"ERROR: readJS.setConfig() expected a callback function\"),!1):!0},initialize:function(b){if(\"function\"!==typeof b)return a.console(\"ERROR: readJS.initialize() expected a callback function\"),!1;a.callback=b;if(!readJSConfig.el)return a.console(\"ERROR: readJS.initialize() expected a dom node to inspect\"),!1;g=!0;a.stopPolling();a.readingWorker=window.setInterval(a.checkActivity,\n1E3*a.status.timeInterval);l.push(a.readingWorker);a.console(\"readJS: starting interval ID\",a.readingWorker);a.inDebugMode();return!0},getIntervals:function(){return l},checkActivity:function(){var b=a.status.timeInterval;a.status.activity.timeOnPage+=b;a.status.activity.timeInUnknownState+=b;a.status.activity.readingPoints+=b;a.detectForScroll();a.endConditionsChecked()},endConditionsChecked:function(){return a.isUpdateRequired()?(a.calculateCoordinates(),a.addPoints(),a.hasRead(),!0):!1},detectForScroll:function(){return a.status.activity.scrolled?\n(a.status.activity.scrolled=!1,a.reactivate(),a.console(\"detected scroll:\",a.status.activity.timeOnPage,\" seconds\"),!0):!1},console:function(){return a.status.debug.console?(console.log(a.readingWorker,arguments),!0):!1},getText:function(b){try{for(var e=\"\",h=b.childNodes.length,d=0;d\u003Ch;d++){var f=b.childNodes[d];8!==f.nodeType\u0026\u0026(e+=1!==f.nodeType?f.nodeValue:a.getText(f))}return e.replace(\/[\\t\\n\\r]+\/g,\"\").replace(\/\\s+\/g,\" \").trim()}catch(m){return a.console(m),!1}},calculateCoordinates:function(){if(a.domNode){var b=\na.inView(a.domNode);a.console(\"dom_node_inview_percent\",b.dom_node_inview_percent,\"dom_node_viewport_percent\",b.dom_node_viewport_percent);return!0}a.console(\"ERROR: could not find the story body\");return!1},hasRead:function(){if(a.status.activity.read)return!0;if(a.status.activity.scrollDepth\u003Ca.status.thresholds.scrollDepth)return a.console(\"Has not read yet because user didn't pass scrollDepth threshold\"),a.report(),!1;if(a.status.strict\u0026\u0026a.status.activity.dnp\u003Ca.status.thresholds.domNode)return a.console(\"STRICT MODE: not enough of dom node is in view\"),\na.report(),!1;if(a.status.activity.readingPoints\u003C=a.status.thresholds.readingPoint||a.status.activity.timeInView\u003Ca.status.thresholds.timeInView)return a.report(),!1;a.status.activity.read=!0;a.callback();a.removeListeners();a.console(\"readJS: the user has read the article\",a.status.activity.readingPoints);a.stopPolling();return!0},stopPolling:function(){a.readingWorker\u0026\u0026(window.clearInterval(a.readingWorker),a.console(\"readJS: ending interval ID\",a.readingWorker),delete a.readingWorker)},report:function(){a.console(\"readingPoints: \"+\na.status.activity.readingPoints,\"timeInView: \"+a.status.activity.timeInView,a.status.thresholds.readingPoint,a.status.thresholds.timeInView)},addPoints:function(){if(!a.inViewport(a.domNode))return!1;a.status.activity.dnp\u003Ea.status.thresholds.domNode\u0026\u0026(a.status.activity.readingPoints+=a.status.activity.increment);a.status.activity.vpp\u003Ea.status.thresholds.viewport\u0026\u0026(a.status.activity.readingPoints+=a.status.activity.increment);return a.status.activity.readingPoints},isUpdateRequired:function(){a.status.activity.pollingPoints+=\n100*Math.pow(.9,a.status.activity.timeInUnknownState);return a.status.activity.pollingPoints\u003E=a.status.thresholds.domPolling?(a.console(\"readJS: analyzing the DOM at\",a.status.activity.timeOnPage,\" seconds\",a.status.activity.pollingPoints),a.status.activity.pollingPoints=0,!0):!1},reactivate:function(){a.console(\"readJS: reactivating refresh rate\");a.status.activity.timeInUnknownState=0;a.status.activity.pollingPoints+=a.status.activity.increment},inDebugMode:function(){a.status.debug.overlay\u0026\u0026(a.scrollDataOverlay=\ndocument.createElement(\"DIV\"),a.scrollDataOverlay.style.position=\"fixed\",a.scrollDataOverlay.style.bottom=\"2em\",a.scrollDataOverlay.style.right=\"2em\",a.scrollDataOverlay.style.zIndex=1E4,a.scrollDataOverlay.id=\"scrollinfo\",document.body.appendChild(a.scrollDataOverlay),a.showScrollInfo())},inViewport:function(a){a=a.getBoundingClientRect();return 0\u003Ca.bottom\u0026\u00260\u003Ca.right\u0026\u0026a.left\u003Cwindow.innerWidth\u0026\u0026a.top\u003Cwindow.innerHeight},showScrollInfo:function(){if(!a.status.debug.overlay)return!1;document.getElementById(\"scrollinfo\").innerHTML=\na.status.activity.scrollDepth;return!0},getScrollInfo:function(){var b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;b+=e;b\u003Ea.status.activity.scrollDepth\u0026\u0026(a.status.activity.scrollDepth=b);return!0},removeDomNode:function(a){if(a=document.getElementById(a)){var b=a.parentNode;b.removeChild(a);return!0}return!1},removeOverlays:function(){a.removeDomNode(\"viewport_inview\");a.removeDomNode(\"overlap_inview\");\na.removeDomNode(\"domnode_inview\")},getVisibilityProperties:function(){if(\"undefined\"!==typeof document.hidden){var a=\"hidden\";var e=\"visibilitychange\"}else\"undefined\"!==typeof document.mozHidden?(a=\"mozHidden\",e=\"mozvisibilitychange\"):\"undefined\"!==typeof document.msHidden?(a=\"msHidden\",e=\"msvisibilitychange\"):\"undefined\"!==typeof document.webkitHidden\u0026\u0026(a=\"webkitHidden\",e=\"webkitvisibilitychange\");return{hiddenProp:a,eventName:e}},handleVisibilityChange:function(){var b=a.getVisibilityProperties().hiddenProp;\ndocument[b]?(a.console(\"readJS: pausing after detecting focus to another tab\"),a.stopPolling()):(a.console(\"readJS: reinitializing after detecting tab is in focus\"),a.initialize(a.callback))},inView:function(b){a.domNode=b;var e=[],h=[];e[0]=Math.abs(document.body.scrollLeft||document.documentElement.scrollLeft);e[1]=Math.abs(document.body.scrollTop||document.documentElement.scrollTop);h[0]=e[0]+window.innerWidth;h[1]=e[1]+window.innerHeight;var d=window.innerWidth;var f=window.innerHeight;var g=\nd*f;if(a.status.debug.overlay){if(!a.status.debug.overlays.vui){var c=document.createElement(\"DIV\");c.id=\"viewport_inview\";c.style.position=\"absolute\";c.style.background=\"green\";c.style.opacity=\"0.5\";c.style.zIndex=9999;document.body.appendChild(c);a.status.debug.overlays.vui=c}c=a.status.debug.overlays.vui;c.style.left=e[0]+\"px\";c.style.top=e[1]+\"px\";c.style.width=d+\"px\";c.style.height=f+\"px\"}c=[];d=[];b=b.getBoundingClientRect();f=\"undefined\"===typeof window.scrollX?parseInt(window.pageXOffset,\n10):parseInt(window.scrollX,10);var k=\"undefined\"===typeof window.scrollY?parseInt(window.pageYOffset,10):parseInt(window.scrollY,10);c[0]=b.left+f;c[1]=b.top+k;d[0]=c[0]+b.width;d[1]=c[1]+b.height;a.getScrollInfo();a.status.thresholds.scrollDepth=Math.abs(c[1])+b.height*a.status.thresholds.minVertical\/100;a.status.debug.overlay\u0026\u0026(a.status.debug.overlays.dui||(f=document.createElement(\"DIV\"),f.id=\"domnode_inview\",f.style.position=\"absolute\",f.style.background=\"blue\",f.style.opacity=\"0.5\",f.style.zIndex=\n9999,document.body.appendChild(f),a.status.debug.overlays.dui=f),f=a.status.debug.overlays.dui,f.style.left=c[0]+\"px\",f.style.top=c[1]+\"px\",f.style.width=b.width+\"px\",f.style.height=b.height+\"px\");if(!a.inViewport(a.domNode))return{dom_node_inview_percent:0,dom_node_viewport_percent:0};b=[];f=[];b[0]=c[0]\u003E=e[0]?c[0]:e[0];b[1]=c[1]\u003E=e[1]?c[1]:e[1];f[0]=d[0]\u003C=h[0]?d[0]:h[0];f[1]=d[1]\u003C=h[1]?d[1]:h[1];e=Math.abs(b[0]-f[0]);h=Math.abs(b[1]-f[1]);c=Math.abs((c[0]-d[0])*(c[1]-d[1]));d=Math.abs(e*h);c=d\/\nc*100;g=d\/g*100;a.status.debug.overlay\u0026\u0026(a.status.debug.overlays.oui||(d=document.createElement(\"DIV\"),d.id=\"overlap_inview\",document.body.appendChild(d),d.style.position=\"absolute\",d.style.background=\"red\",d.style.opacity=\"0.5\",d.style.zIndex=9999,a.status.debug.overlays.oui=d),d=a.status.debug.overlays.oui,d.style.left=b[0]+\"px\",d.style.top=b[1]+\"px\",d.style.width=e+\"px\",d.style.height=h+\"px\");a.status.activity.dnp=c;a.status.activity.vpp=g;e={dom_node_inview_percent:c,dom_node_viewport_percent:g};\nif(a.status.strict\u0026\u0026(c\u003Ca.status.thresholds.domNode||g\u003Ca.status.thresholds.viewport))return e;a.status.activity.timeInView+=a.status.timeInterval;return e},handleScroll:function(){a.status.activity.scrolled=!0;a.showScrollInfo()},handleClick:function(){a.status.activity.readingPoints+=a.status.activity.increment;a.reactivate()},handleLoad:function(){a.domNode=document.querySelector(readJSConfig.el);a.setTimeInViewThreshold();a.domNode.addEventListener(\"click\",a.handleClick);a.calculateCoordinates()},\nsetTimeInViewThreshold:function(){if(\"number\"===typeof a.status.thresholds.timeInView)return!1;var b=a.getText(a.domNode).split(\" \").length,e=a.status.activity.averageReadSpeed;a.status.thresholds.timeInView=Math.floor(a.status.thresholds.percentagePoint\/100*b\/e);a.status.thresholds.minTimeInView\u003Ea.status.thresholds.timeInView?a.status.thresholds.timeInView=a.status.thresholds.minTimeInView:a.status.thresholds.timeInView\u003Ea.status.thresholds.maxTimeInView\u0026\u0026(a.status.thresholds.timeInView=a.status.thresholds.maxTimeInView);\nreturn!0},removeListeners:function(){window.removeEventListener(\"scroll\",a.handleScroll);window.removeEventListener(\"load\",a.handleLoad);\"undefined\"!==typeof a.domNode\u0026\u0026a.domNode.removeEventListener(\"click\",a.handleClick);document.removeEventListener(a.getVisibilityProperties().eventName,a.handleVisibilityChange,!1)},isOn:function(){return g},turnOff:function(){if(!g)return!1;a.removeListeners();a.console(\"readJS: stopping midway\");a.stopPolling();a.removeOverlays();g=a.status.activity.read=!1;return!0},\nturnOn:function(){if(g)return!1;a.resetConfigStatus();a.setConfig();if(k\u0026\u0026!readJSConfig.spa)return a.console(\"ERROR: Not a SPA. Cannot turnOn() again on the same web page\"),!1;if(\"undefined\"===typeof readJSConfig)return a.console(\"ERROR: Could not find callback and\/or domNode css selector in window.readJSConfig\"),!1;if(\"string\"!==typeof readJSConfig.el)return a.console(\"ERROR: Could not find domNode css selector in window.readJSConfig\"),!1;if(\"function\"!==typeof readJSConfig.cb)return a.console(\"ERROR: Could not find callback function in window.readJSConfig\"),\n!1;window.addEventListener(\"scroll\",a.handleScroll);document.addEventListener(a.getVisibilityProperties().eventName,a.handleVisibilityChange,!1);a.status.spa?a.handleLoad():window.addEventListener(\"load\",a.handleLoad);a.initialize(readJSConfig.cb);g=!0;k||(a.handleVisibilityChange(),k=!0);return!0}};window.readJS=a})();\"undefined\"!==typeof readJSConfig\u0026\u0026!0!==readJSConfig.spa?readJS.turnOn():readJS.resetConfigStatus();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.gtmProductImpressionQueue=window.gtmProductImpressionQueue||[];window.gtmProductImpressionQueue.push({id:",["escape",["macro",28],8,16],",list:",["escape",["macro",35],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=[],b=[];setInterval(function(){if(window.gtmProductImpressionQueue\u0026\u00260\u003Cwindow.gtmProductImpressionQueue.length||window.gtmPromoImpressionQueue\u0026\u00260\u003Cwindow.gtmPromoImpressionQueue.length)window.dataLayer.push({event:\"sendImpressions\",promoImpressions:window.gtmPromoImpressionQueue,productImpressions:window.gtmProductImpressionQueue}),b.concat(window.gtmPromoImpressionQueue),a.concat(window.gtmProductImpressionQueue),window.gtmPromoImpressionQueue=[],window.gtmProductImpressionQueue=\n[]},1E3)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.gtmPromoImpressionQueue=window.gtmPromoImpressionQueue||[];var a=",["escape",["macro",14],8,16],",b=",["escape",["macro",15],8,16],",c=",["escape",["macro",16],8,16],",d=a+\"_\"+b+\"_\"+c;window.gtmPromoImpressionQueue.push({name:a,creative:b,position:c,id:d})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_26($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",48],
      "arg1":"^mailto$",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",49],
      "arg1":".article-social-container a"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_23($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"yes",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_22($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",51],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_24($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_57($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",53],
      "arg1":"404",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.dom"
    },{
      "function":"_css",
      "arg0":["macro",49],
      "arg1":"ul.accordion .accordion-title[aria-expanded='true']"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_38($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"start",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"form"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"fieldChange",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_33($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"formSubmitSuccess",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"submitError",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"social"
    },{
      "function":"_css",
      "arg0":["macro",49],
      "arg1":"a[href*='ip_name']"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_35($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",49],
      "arg1":"a[data-gtm-type='product']"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_37($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(?:[^\/][\\d\\w\\.]+)\\.(pdf|doc(x)*|xls(x)*|ppt(x)*|zip|exe)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_45($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"complete"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",48],
      "arg1":"tel",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_47($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"articleRead"
    },{
      "function":"_css",
      "arg0":["macro",49],
      "arg1":"li.category a, ul.categories a"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"\/Community\/Good-to-know",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_53($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"start"
    },{
      "function":"_eq",
      "arg0":["macro",60],
      "arg1":"progress"
    },{
      "function":"_css",
      "arg0":["macro",49],
      "arg1":"li.tabs-title, li.tabs-title *"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",49],
      "arg1":"[data-gtm-type=\"article-link\"]"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_62($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"sendImpressions"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",67],
      "arg1":"^post$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_44($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(^$|((^|,)11195435_36($|,)))"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",2,4,5],["unless",3],["add",1]],
    [["if",4,6,7],["add",2]],
    [["if",4,8,9],["unless",3],["add",3]],
    [["if",10,11],["add",4]],
    [["if",12],["add",5,44,27,28,29,31,32,33,34,35,36,37,38,39,41,42]],
    [["if",14],["add",6,43]],
    [["if",4,15,16],["add",7]],
    [["if",17,18],["add",8]],
    [["if",18,19],["add",9]],
    [["if",20,21],["add",10]],
    [["if",18,22],["add",11]],
    [["if",18,23],["add",12]],
    [["if",24],["add",13]],
    [["if",4,25,26],["add",14]],
    [["if",4,27,28],["add",15]],
    [["if",12,13],["add",16],["block",5]],
    [["if",4,29,30],["add",17]],
    [["if",31,32],["add",18]],
    [["if",4,33,34],["add",19]],
    [["if",35],["add",20]],
    [["if",4,36,37,38],["add",21]],
    [["if",32,39],["add",22]],
    [["if",32,40],["add",23]],
    [["if",37,41,42],["add",24]],
    [["if",4,37,43,44],["add",25]],
    [["if",45],["add",26]],
    [["if",12,46],["add",30]],
    [["if",47],["add",40,47]],
    [["if",14,37,48],["add",45]],
    [["if",49,50],["add",46]],
    [["if",49,51],["add",48]]]
},
"runtime":[
[],[]
]



};
var ba,ca=this||self,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ja=function(a){return"string"==typeof a},ka=function(a){return"number"==typeof a&&!isNaN(a)},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},na=function(a,b){if(a&&la(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ka(a)||
!ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ta=function(a){return Math.round(Number(a))||0},ua=function(a){return"false"==String(a).toLowerCase()?!1:!!a},va=function(a){var b=[];if(la(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},wa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},xa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var ya=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},za=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Aa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ba=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Da=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ea=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Fa=function(a){if(null==a)return String(a);var b=Ea.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ga=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ha=function(a){if(!a||"object"!=Fa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ga(a,"constructor")&&!Ga(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ga(a,b)},f=function(a,b){var c=b||("array"==Fa(a)?[]:{}),d;for(d in a)if(Ga(a,d)){var e=a[d];"array"==Fa(e)?("array"!=Fa(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ha(e)?(Ha(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};var u=window,A=document,Ia=navigator,Ja=A.currentScript&&A.currentScript.src,Ka=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},La=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ma=function(a,b,c){var d=A.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;La(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=A.getElementsByTagName("script")[0]||A.body||A.head;l.parentNode.insertBefore(d,l);return d},Na=function(){if(Ja){var a=Ja.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oa=function(a,b){var c=A.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=A.body&&A.body.lastChild||
A.body||A.head;d.parentNode.insertBefore(c,d);La(c,b);void 0!==a&&(c.src=a);return c},Pa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ra=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},D=function(a){u.setTimeout(a,0)},Sa=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ta=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ua=function(a){var b=A.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Xa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ya=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a={},ab=function(a,b){$a[a]=$a[a]||[];$a[a][b]=!0},bb=function(a){for(var b=[],c=$a[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},gb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eb(a.protocol)||eb(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=eb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=fb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||ab("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=ma(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},eb=function(a){return a?a.replace(":","").toLowerCase():""},fb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
ib=function(a){var b=A.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||ab("TAGGING",1),c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var jb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},mb=function(a,b,c,d){var e=kb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=lb(e,function(g){return g.Eb},b);if(1===e.length)return e[0].id;e=lb(e,function(g){return g.Za},c);return e[0]?e[0].id:void 0}};
function nb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=jb(b,e).indexOf(c)}
var qb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=ob(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!pb(y,t)&&nb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!pb(p,t)&&nb(m,a,l)}return k};function lb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function kb(a,b){for(var c=[],d=jb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Eb:1*k[0]||1,Za:1*k[1]||1}))}}return c}
var sb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,tb=/(^|\.)doubleclick\.net$/i,pb=function(a,b){return tb.test(document.location.hostname)||"/"===b&&sb.test(a)},ob=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var ub=[],vb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},wb=function(a){return vb[a]},xb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Db=function(a){return Cb[a]};
ub[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Bb,Db)+"'"}};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};ub[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Xb,Yb,Zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},$b=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Ub[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Ub[c](e):(void 0)(c,e,b)},bc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ac(a[e],b,c));return d},
cc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ub[b];return c?c.priorityOverride||0:0},ac=function(a,b,c){if(la(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ac(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.Bc(h))return;c[g]=!0;try{var k=bc(h,b,c);k.vtp_gtmEventId=b.id;d=$b(k,b);Yb&&(d=Yb.wf(d,k))}catch(w){b.Td&&b.Td(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[ac(a[l],b,c)]=ac(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=ac(a[n],b,c);Xb&&(m=m||p===Xb.sb);d.push(p)}return Xb&&m?Xb.zf(d):d.join("");case "escape":d=ac(a[1],b,c);if(Xb&&la(a[1])&&"macro"===a[1][0]&&Xb.ag(a))return Xb.kg(d);d=String(d);for(var t=2;t<a.length;t++)ub[a[t]]&&(d=ub[a[t]](d));return d;case "tag":var q=a[1];if(!Sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Fd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=dc(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},dc=function(a,b,c){try{return Vb(bc(a,b,c))}catch(d){JSON.stringify(a)}return null};var ec=function(){var a=function(b){return{toString:function(){return b}}};return{ad:a("convert_case_to"),bd:a("convert_false_to"),cd:a("convert_null_to"),dd:a("convert_true_to"),ed:a("convert_undefined_to"),ja:a("function"),Le:a("instance_name"),Me:a("live_only"),Ne:a("malware_disabled"),Oe:a("metadata"),Vg:a("original_vendor_template_id"),Pe:a("once_per_event"),ud:a("once_per_load"),vd:a("setup_tags"),wd:a("tag_id"),xd:a("teardown_tags")}}();var fc=null,ic=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];fc=gc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=hc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},hc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=fc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=fc(e[g]);if(null===h)return null;
if(h)return!1}return!0},gc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=dc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var xc={},yc=null,zc=Math.random();xc.i="GTM-W4HSZV8";xc.wb="7o0";var Ac={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Cc="www.googletagmanager.com/gtm.js";var Dc=Cc,Ec=null,Fc=null,Gc=null,Hc="//www.googletagmanager.com/a?id="+xc.i+"&cv=16",Ic={},Jc={},Kc=function(){var a=yc.sequence||0;yc.sequence=a+1;return a};var G=function(a,b,c,d){return(2===Lc()||d||"http:"!=u.location.protocol?a:b)+c},Lc=function(){var a=Na(),b;if(1===a)a:{var c=Dc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=A.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Mc=!1;
var Qc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Zc=function(){Rc&&(u.clearTimeout(Rc),Rc=void 0);void 0===Sc||Tc[Sc]&&!Uc||(Vc[Sc]||Wc.cg()||0>=Xc--?(ab("GTM",1),Vc[Sc]=!0):(Wc.wg(),Pa(Yc()),Tc[Sc]=!0,Uc=""))},Yc=function(){var a=Sc;if(void 0===a)return"";var b=bb("GTM"),c=bb("TAGGING");return[$c,Tc[a]?"":"&es=1",ad[a],b?"&u="+b:"",c?"&ut="+c:"",Qc(),Uc,"&z=0"].join("")},bd=function(){return[Hc,"&v=3&t=t","&pid="+oa(),"&rv="+xc.wb].join("")},cd="0.005000">
Math.random(),$c=bd(),dd=function(){$c=bd()},Tc={},Uc="",Sc=void 0,ad={},Vc={},Rc=void 0,Wc=function(a,b){var c=0,d=0;return{cg:function(){if(c<a)return!1;xa()-d>=b&&(c=0);return c>=a},wg:function(){xa()-d>=b&&(c=0);c++;d=xa()}}}(2,1E3),Xc=1E3,ed=function(a,b){if(cd&&!Vc[a]&&Sc!==a){Zc();Sc=a;Uc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ad[a]="&e="+c+"&eid="+a;Rc||(Rc=u.setTimeout(Zc,500))}},fd=function(a,b,c){if(cd&&!Vc[a]&&b){a!==Sc&&(Zc(),Sc=a);var d=String(b[ec.ja]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Uc=Uc?Uc+"."+e:"&tr="+e;Rc||(Rc=u.setTimeout(Zc,500));2022<=Yc().length&&Zc()}};var gd={},hd=new pa,id={},jd={},nd={name:"dataLayer",set:function(a,b){f(kd(a,b),id);ld()},get:function(a){return md(a,2)},reset:function(){hd=new pa;id={};ld()}},md=function(a,b){if(2!=b){var c=hd.get(a);if(cd){var d=od(a);c!==d&&ab("GTM",5)}return c}return od(a)},od=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:qd(d)},qd=function(a){for(var b=id,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var td=function(a,b){jd.hasOwnProperty(a)||(hd.set(a,b),f(kd(a,b),id),ld())},kd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},ld=function(a){ra(jd,function(b,c){hd.set(b,c);f(kd(b,void 0),id);f(kd(b,c),id);a&&delete jd[b]})},ud=function(a,b,c){gd[a]=gd[a]||{};var d=1!==c?od(b):hd.get(b);"array"===Fa(d)||"object"===Fa(d)?gd[a][b]=f(d):gd[a][b]=d},vd=function(a,b){if(gd[a])return gd[a][b]};var wd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),xd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},yd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},zd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Bd=function(a){var b=md("gtm.whitelist");b&&ab("GTM",9);var c=b&&Da(va(b),xd),d=md("gtm.blacklist");d||(d=md("tagTypeBlacklist"))&&ab("GTM",3);
d?ab("GTM",8):d=[];Ad()&&(d=va(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ma(va(d),"google")&&ab("GTM",2);var e=d&&Da(va(d),yd),g={};return function(h){var k=h&&h[ec.ja];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Jc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ma(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
ma(c,l[p])){ab("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=ma(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&ab("GTM",10);t=r}}var v=!m||t;v||!(0<=ma(l,"sandboxedScripts"))||c&&-1!==ma(c,"sandboxedScripts")||(v=qa(e,zd));return g[k]=v}},Ad=function(){return wd.test(u.location&&u.location.hostname)};var Cd={wf:function(a,b){b[ec.ad]&&"string"===typeof a&&(a=1==b[ec.ad]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ec.cd)&&null===a&&(a=b[ec.cd]);b.hasOwnProperty(ec.ed)&&void 0===a&&(a=b[ec.ed]);b.hasOwnProperty(ec.dd)&&!0===a&&(a=b[ec.dd]);b.hasOwnProperty(ec.bd)&&!1===a&&(a=b[ec.bd]);return a}};var Dd={active:!0,isWhitelisted:function(){return!0}},Ed=function(a){var b=yc.zones;!b&&a&&(b=yc.zones=a());return b};var Fd=!1,Gd=0,Hd=[];function Id(a){if(!Fd){var b=A.createEventObject,c="complete"==A.readyState,d="interactive"==A.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fd=!0;for(var e=0;e<Hd.length;e++)D(Hd[e])}Hd.push=function(){for(var g=0;g<arguments.length;g++)D(arguments[g]);return 0}}}function Jd(){if(!Fd&&140>Gd){Gd++;try{A.documentElement.doScroll("left"),Id()}catch(a){u.setTimeout(Jd,50)}}}var Kd=function(a){Fd?a():Hd.push(a)};var Ld={},Md={},Nd=function(a,b,c,d){if(!Md[a]||Ac[b]||"__zone"===b)return-1;var e={};Ha(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Md[a].tags.push(e)-1},Od=function(a,b,c,d){if(Md[a]){var e=Md[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pd(a){for(var b=Ld[a]||[],c=0;c<b.length;c++)b[c]();Ld[a]={push:function(d){d(xc.i,Md[a])}}}
var Sd=function(a,b,c){Md[a]={tags:[]};ha(b)&&Qd(a,b);c&&u.setTimeout(function(){return Pd(a)},Number(c));return Rd(a)},Qd=function(a,b){Ld[a]=Ld[a]||[];Ld[a].push(za(function(){return D(function(){b(xc.i,Md[a])})}))};function Rd(a){var b=0,c=0,d=!1;return{add:function(){c++;return za(function(){b++;d&&b>=c&&Pd(a)})},cf:function(){d=!0;b>=c&&Pd(a)}}};var Td=function(){function a(d){return!ka(d)||0>d?0:d}if(!yc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=ka(nd.get("gtm.start"))?nd.get("gtm.start"):0;yc._li={cst:a(c-b),cbt:a(Fc-b)}}};var Xd=!1,Yd=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},Zd=!1;
var $d=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||ab("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}Td();return u[b]},ae=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Yd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ce=function(){},be=function(){return u.GoogleAnalyticsObject||"ga"},de=!1;var ke=function(a){};function je(a,b){a.containerId=xc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function le(a,b,c,d){var e=Sb[a],g=me(a,b,c,d);if(!g)return null;var h=ac(e[ec.vd],c,[]);if(h&&h.length){var k=h[0];g=le(k.index,{I:g,O:1===k.Fd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function me(a,b,c,d){function e(){if(g[ec.Ne])k();else{var w=bc(g,c,[]),y=Nd(c.id,String(g[ec.ja]),Number(g[ec.wd]),w[ec.Oe]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=xa()-C;fd(c.id,Sb[a],"5");Od(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=xa()-C;fd(c.id,Sb[a],"6");Od(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;fd(c.id,g,"1");var z=function(B){var E=xa()-C;ke(B);fd(c.id,g,"7");Od(c.id,y,"exception",E);x||(x=!0,k())};var C=xa();try{$b(w,c)}catch(B){z(B)}}}var g=Sb[a],h=b.I,k=b.O,l=b.terminate;if(c.Bc(g))return null;var m=ac(g[ec.xd],c,[]);if(m&&m.length){var n=m[0],p=le(n.index,{I:h,O:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Fd?l:p}if(g[ec.ud]||g[ec.Pe]){var t=g[ec.ud]?Tb:c.Gg,q=h,r=k;if(!t[a]){e=za(e);var v=ne(a,t,e);h=v.I;k=v.O}return function(){t[a](q,r)}}return e}
function ne(a,b,c){var d=[],e=[];b[a]=oe(d,e,c);return{I:function(){b[a]=pe;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=qe;for(var g=0;g<e.length;g++)e[g]()}}}function oe(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function pe(a){a()}function qe(a,b){b()};var te=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ya[d]){var e=Sb[d];var g=b.add();try{var h=le(d,{I:g,O:g,terminate:g},a,d);h?c.push({ke:d,ae:cc(e),Hf:h}):(re(d,a),g())}catch(l){g()}}b.cf();c.sort(se);for(var k=0;k<c.length;k++)c[k].Hf();return 0<c.length};function se(a,b){var c,d=b.ae,e=a.ae;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ke,k=b.ke;g=h>k?1:h<k?-1:0}return g}
function re(a,b){if(!cd)return;var c=function(d){var e=b.Bc(Sb[d])?"3":"4",g=ac(Sb[d][ec.vd],b,[]);g&&g.length&&c(g[0].index);fd(b.id,Sb[d],e);var h=ac(Sb[d][ec.xd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ue=!1,ve=function(a,b,c,d,e){if("gtm.js"==b){if(ue)return!1;ue=!0}ed(a,b);var g=Sd(a,d,e);ud(a,"event",1);ud(a,"ecommerce",1);ud(a,"gtm");var h={id:a,name:b,Bc:Bd(c),Ya:[],Gg:[],Td:function(n){ab("GTM",6);ke(n)}};h.Ya=ic(h);var k=te(h,g);"gtm.js"!==b&&"gtm.sync"!==b||ce();if(!k)return k;for(var l=0;l<h.Ya.length;l++)if(h.Ya[l]){var m=
Sb[l];if(m&&!Ac[String(m[ec.ja])])return!0}return!1};var xe=function(a,b,c){var d=this;this.eventModel=a;this.targetConfig=b||{};this.globalConfig=c||{};this.getWithConfig=function(e){if(d.eventModel.hasOwnProperty(e))return d.eventModel[e];if(d.targetConfig.hasOwnProperty(e))return d.targetConfig[e];if(d.globalConfig.hasOwnProperty(e))return d.globalConfig[e]}};var H={Wb:"event_callback",Yb:"event_timeout",R:"gtag.config"};var ye=function(){var a=!1;return a};function ze(){var a=yc;return a.gcq=a.gcq||new Ae}var Be=function(a,b){ze().register(a,b)},Ce=function(){this.status=1;this.sc={};this.be=null},De=function(a,b,c,d,e){this.type=a;this.Lg=b;this.ca=c||"";this.yb=d;this.defer=e},Ae=function(){this.me={};this.Ld={};this.Ta=[]},Ee=function(a,b){return a.me[b]=a.me[b]||new Ce},Fe=function(a,b,c,d){var e=Ee(a,d.ca).be;if(e){var g=f(c),h=f(Ee(a,d.ca).sc),k=f(a.Ld),l=new xe(g,h,k);try{e(b,d.Lg,l)}catch(m){}}};
Ae.prototype.register=function(a,b){3!==Ee(this,a).status&&(Ee(this,a).be=b,Ee(this,a).status=3,this.flush())};Ae.prototype.push=function(a,b,c,d){var e=Math.floor(xa()/1E3);if(c&&1===Ee(this,c).status&&(Ee(this,c).status=2,this.push("require",[],c),!ye())){var g=encodeURIComponent(c);Ma(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+g+"&l=dataLayer&cx=c"))}this.Ta.push(new De(a,e,c,b,d));d||this.flush()};
Ae.prototype.flush=function(a){for(var b=this;this.Ta.length;){var c=this.Ta[0];if(c.defer)c.defer=!1,this.Ta.push(c);else switch(c.type){case "require":if(3!==Ee(this,c.ca).status&&!a)return;break;case "set":ra(c.yb[0],function(e,g){b.Ld[e]=g});break;case "config":var d=c.yb[0];Ee(this,c.ca).sc={};Fe(this,H.R,d,c);Ee(this,c.ca).sc=d;break;case "event":Fe(this,c.yb[1],c.yb[0],c)}this.Ta.shift()}};var Ge=/[A-Z]+/,He=/\s/,Ie=function(a){if(ja(a)&&(a=wa(a),!He.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ge.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ka:d}}}}},Ke=function(a){for(var b={},c=0;c<a.length;++c){var d=Ie(a[c]);d&&(b[d.id]=d)}Je(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Je(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ka[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Le={};var Me=null,Ne={},Oe={},Pe,Qe=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.Wb]&&(c.eventCallback=b[H.Wb]),b[H.Yb]&&(c.eventTimeout=b[H.Yb]));return c};
var Xe={config:function(a){},event:function(a){var b=a[1];if(ja(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ha(a[2]))return;c=a[2]}var d=Qe(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Le[b]||(Le[b]=[]);Le[b].push(c)}},set:function(a){var b;2==a.length&&Ha(a[1])?b=f(a[1]):3==a.length&&ja(a[1])&&(b={},b[a[1]]=a[2]);if(b){b.eventModel=f(b);b.event="gtag.set";b._clear=!0;return b}}},Ye={policy:!0};var $e=function(a){return Ze?A.querySelectorAll(a):null},af=function(a,b){if(!Ze)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!A.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},bf=!1;if(A.querySelectorAll)try{var cf=A.querySelectorAll(":root");cf&&1==cf.length&&cf[0]==A.documentElement&&(bf=!0)}catch(a){}var Ze=bf;var kf=function(a){if(jf(a))return a;this.Og=a};kf.prototype.Of=function(){return this.Og};var jf=function(a){return!a||"object"!==Fa(a)||Ha(a)?!1:"getUntrustedUpdateValue"in a};kf.prototype.getUntrustedUpdateValue=kf.prototype.Of;var lf=!1,mf=[];function nf(){if(!lf){lf=!0;for(var a=0;a<mf.length;a++)D(mf[a])}}var of=function(a){lf?D(a):mf.push(a)};var pf=[],qf=!1,rf=function(a){return u["dataLayer"].push(a)},sf=function(a){var b=yc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},uf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&td(g,void 0),td(g,h))});Ec||(Ec=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Kc(),a["gtm.uniqueEventId"]=d,td("gtm.uniqueEventId",d));Gc=c;var e=tf(a);
Gc=null;switch(c){case "gtag.set":e&&ab("GTM",18);break;case "gtm.init":ab("GTM",19),e&&ab("GTM",20)}return e};function tf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=yc.zones;d=e?e.checkState(xc.i,c):Dd;return d.active?ve(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var vf=function(){for(var a=!1;!qf&&0<pf.length;){qf=!0;delete id.eventModel;ld();var b=pf.shift();if(null!=b){var c=jf(b);if(c){var d=b;b=jf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=md(h,1);if(la(k)||Ha(k))k=f(k);jd[h]=k}}try{if(ha(b))try{b.call(nd)}catch(v){}else if(la(b)){var l=b;if(ja(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=md(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ja(b[0])){var r=Xe[b[0]];if(r&&(!c||!Ye[b[0]])){b=r(b);break a}}b=void 0}if(!b){qf=!1;continue}}a=uf(b)||a}}finally{c&&ld(!0)}}qf=!1}
return!a},wf=function(){var a=vf();try{var b=xc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},xf=function(){var a=Ka("dataLayer",[]),b=Ka("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});of(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<yc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new kf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);pf.push.apply(pf,d);if(300<this.length)for(ab("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return vf()&&h};pf.push.apply(pf,a.slice(0));D(wf)};var yf;var Uf={};Uf.sb=new String("undefined");
var Vf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Uf.sb?b:a[d]);return c.join("")}};Vf.prototype.toString=function(){return this.resolve("undefined")};Vf.prototype.valueOf=Vf.prototype.toString;Uf.Qe=Vf;Uf.jc={};Uf.zf=function(a){return new Vf(a)};var Wf={};Uf.xg=function(a,b){var c=Kc();Wf[c]=[a,b];return c};Uf.Cd=function(a){var b=a?0:1;return function(c){var d=Wf[c];if(d&&"function"===typeof d[b])d[b]();Wf[c]=void 0}};Uf.ag=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Uf.kg=function(a){if(a===Uf.sb)return a;var b=Kc();Uf.jc[b]=a;return'google_tag_manager["'+xc.i+'"].macro('+b+")"};Uf.eg=function(a,b,c){a instanceof Uf.Qe&&(a=a.resolve(Uf.xg(b,c)),b=fa);return{zc:a,I:b}};var Xf=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Sa(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Yf=function(a){yc.hasOwnProperty("autoEventsSettings")||(yc.autoEventsSettings={});var b=yc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Zf=function(a,b,c){Yf(a)[b]=c},$f=function(a,b,c,d){var e=Yf(a),g=ya(e,b,d);e[b]=c(g)},ag=function(a,b,c){var d=Yf(a);return ya(d,b,c)};var bg=function(){for(var a=Ia.userAgent+(A.cookie||"")+(A.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(xa()/1E3)].join(".")},eg=function(a,b,c,d){var e=cg(b);return mb(a,e,dg(c),d)},fg=function(a,b,c,d){var e=""+cg(c),g=dg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},cg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},dg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var gg=["1"],hg={},lg=function(a,b,c,d){var e=ig(a);hg[e]||jg(e,b,c)||(kg(e,bg(),b,c,d),jg(e,b,c))};function kg(a,b,c,d,e){var g=fg(b,"1",d,c);qb(a,g,c,d,0==e?void 0:new Date(xa()+1E3*(void 0==e?7776E3:e)))}function jg(a,b,c){var d=eg(a,b,c,gg);d&&(hg[a]=d);return d}function ig(a){return(a||"_gcl")+"_au"};var mg=function(){for(var a=[],b=A.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Uc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Uc]||(g[a[h].Uc]=[]),g[a[h].Uc].push({timestamp:k[1],Lf:k[2]}))}return g};function ng(){for(var a=og,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function pg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var og,qg,rg=function(a){og=og||pg();qg=qg||ng();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(og[l],og[m],og[n],og[p])}return b.join("")},sg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=qg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}og=og||pg();qg=qg||
ng();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var tg;function ug(a,b){if(!a||b===A.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var yg=function(){var a=vg,b=wg,c=xg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qa(A,"mousedown",d);Qa(A,"keyup",d);Qa(A,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},xg=function(){var a=Ka("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var zg=/(.*?)\*(.*?)\*(.*)/,Ag=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Bg=/^(?:www\.|m\.|amp\.)+/,Cg=/([^?#]+)(\?[^#]*)?(#.*)?/,Dg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Fg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(rg(String(d))))}var e=b.join("*");return["1",Eg(e),e].join("*")},Eg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=tg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}tg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^tg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Hg=function(){return function(a){var b=ib(u.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=Gg(d)||{};var e=gb(b,"fragment").match(Dg);a.fragment=Gg(e&&e[3]||
"")||{}}},Ig=function(){var a=Hg(),b=xg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Aa(c,d.query),Aa(c,d.fragment));return c},Gg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=zg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Eg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=sg(t[q+1]);return p}}}}catch(r){}};
function Jg(a,b,c){function d(m){var n=m,p=Dg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Cg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Kg(a,b,c){for(var d={},e={},g=xg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&ug(k.domains,b)&&(k.fragment?Aa(e,k.callback()):Aa(d,k.callback()))}if(Ba(d)){var l=Fg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=A.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Jg(l,a.action);Za.test(v)&&(a.action=v)}}}else Lg(l,a,!1)}if(!c&&Ba(e)){var w=Fg(e);Lg(w,a,!0)}}function Lg(a,b,c){if(b.href){var d=Jg(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var vg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Kg(e,e.hostname,!1)}}catch(h){}},wg=function(a){try{if(a.action){var b=gb(ib(a.action),"host");Kg(a,b,!0)}}catch(c){}},Mg=function(a,b,c,d){yg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};xg().decorators.push(e)},Ng=function(){var a=A.location.hostname,b=Ag.exec(A.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Bg,"")===e.replace(Bg,"")},Og=function(a,b){return!1===a?!1:a||b||Ng()};var Pg={};var Qg=/^\w+$/,Rg=/^[\w-]+$/,Sg=/^~?[\w-]+$/,Tg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Ug(a){return a&&"string"==typeof a&&a.match(Qg)?a:"_gcl"}var Wg=function(){var a=ib(u.location.href),b=gb(a,"query",!1,void 0,"gclid"),c=gb(a,"query",!1,void 0,"gclsrc"),d=gb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Vg(b,c,d)};
function Vg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Rg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Pg.gtm_3pds?0:Pg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Xg(a,b,c){function d(p,t){var q=Yg(p,e);q&&qb(q,t,h,g,l,!0)}b=b||{};var e=Ug(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ud?7776E3:b.Ud;c=c||xa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.vh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Yg=function(a,b){var c=Tg[a];if(void 0!==c)return b+c},Zg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function $g(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ah=function(a,b,c,d,e){if(la(b)){var g=Ug(e);Mg(function(){for(var h={},k=0;k<a.length;++k){var l=Yg(a[k],g);if(l){var m=jb(l,A.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},bh=function(a){return a.filter(function(b){return Sg.test(b)})},ch=function(a){for(var b=["aw","dc"],c=Ug(a&&a.prefix),d={},e=0;e<b.length;e++)Tg[b[e]]&&(d[b[e]]=Tg[b[e]]);ra(d,function(g,h){var k=jb(c+h,A.cookie);if(k.length){var l=k[0],m=Zg(l),n={};n[g]=[$g(l)];Xg(n,a,m)}})};var dh=/^\d+\.fls\.doubleclick\.net$/;function eh(a){var b=ib(u.location.href),c=gb(b,"host",!1);if(c&&c.match(dh)){var d=gb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function fh(a,b){if("aw"==a||"dc"==a){var c=eh("gcl"+a);if(c)return c.split(".")}var d=Ug(b);if("_gcl"==d){var e;e=Wg()[a]||[];if(0<e.length)return e}var g=Yg(a,d),h;if(g){var k=[];if(A.cookie){var l=jb(g,A.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=$g(l[m]);n&&-1===ma(k,n)&&k.push(n)}h=bh(k)}else h=k}else h=k}else h=[];return h}
var gh=function(){var a=eh("gac");if(a)return decodeURIComponent(a);var b=mg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Lf);g=bh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},hh=function(a,b,c,d,e){lg(b,c,d,e);var g=hg[ig(b)],h=Wg().dc||[],k=!1;if(g&&0<h.length){var l=yc.joined_au=yc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Pa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=ig(b),r=hg[q];r&&kg(q,r,c,d,e)}};var ih;if(3===xc.wb.length)ih="g";else{var jh="G";ih=jh}
var kh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ih,OPT:"o"},lh=function(a){var b=xc.i.split("-"),c=b[0].toUpperCase(),d=kh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===xc.wb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+xc.wb+e};var rh=["input","select","textarea"],sh=["button","hidden","image","reset","submit"],th=function(a){var b=a.tagName.toLowerCase();return!na(rh,function(c){return c===b})||"input"===b&&na(sh,function(c){return c===a.type.toLowerCase()})?!1:!0},uh=function(a){return a.form?a.form.tagName?a.form:A.getElementById(a.form):Xa(a,["form"],100)},vh=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(th(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var yh=!!u.MutationObserver,zh=void 0,Ah=function(a){if(!zh){var b=function(){var c=A.body;if(c)if(yh)(new MutationObserver(function(){for(var e=0;e<zh.length;e++)D(zh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qa(c,"DOMNodeInserted",function(){d||(d=!0,D(function(){d=!1;for(var e=0;e<zh.length;e++)D(zh[e])}))})}};zh=[];A.body?b():D(b)}zh.push(a)};
var Sh=function(){var a=A.body,b=A.documentElement||a&&a.parentElement,c,d;if(A.compatMode&&"BackCompat"!==A.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};ab("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Th=function(a){var b=Sh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},Uh=function(a){if(A.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!u.getComputedStyle)return!0;var c=u.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=u.getComputedStyle(d,null))}return!1};var Vh=[],Wh=!(!u.IntersectionObserver||!u.IntersectionObserverEntry),Xh=function(a,b,c){for(var d=new u.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<Vh.length;g++)if(!Vh[g])return Vh[g]=d,g;return Vh.push(d)-1},Yh=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:xa()};D(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Th(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},Zh=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Wh){var e=!1;D(function(){e||Yh(a,b,c)()});return Xh(function(g){e=!0;for(var h={Ga:0};h.Ga<g.length;h={Ga:h.Ga},h.Ga++)D(function(k){return function(){return a(g[k.Ga])}}(h))},b,c)}return u.setInterval(Yh(a,b,c),1E3)},$h=function(a){Wh?0<=a&&a<Vh.length&&Vh[a]&&(Vh[a].disconnect(),Vh[a]=void 0):u.clearInterval(a)};var bi=u.clearTimeout,ci=u.setTimeout,K=function(a,b,c){if(ye()){b&&D(b)}else return Ma(a,b,c)},di=function(){return new Date},ei=function(){return u.location.href},fi=function(a){return gb(ib(a),"fragment")},gi=function(a){return fb(ib(a))},hi=null;
var ii=function(a,b){return md(a,b||2)},ji=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return rf(a)},ki=function(a,b){u[a]=b},L=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},li=function(a,b,c){return jb(a,b,void 0===c?!0:!!c)},mi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Ud:d},g=Wg();Xg(g,e);ch(e)},ni=function(a,b,c,d,e){for(var g=Ig(),h=Ug(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Tg[l]){var m=Yg(l,h),
n=g[m];if(n){var p=Math.min(Zg(n),xa()),t;b:{for(var q=p,r=jb(m,A.cookie),v=0;v<r.length;++v)if(Zg(r[v])>q){t=!0;break b}t=!1}t||qb(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Xg(Vg(g.gclid,g.gclsrc),w);},oi=function(a,b,c,d,e){ah(a,b,c,d,e);},pi=function(a,b){if(ye()){
b&&D(b)}else Oa(a,b)},qi=function(a){return!!ag(a,"init",!1)},ri=function(a){Zf(a,"init",!0)},si=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Dc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(G("https://","http://",d))},ti=function(a,b){var c=a[b];return c};var vi=Uf.eg;
var wi=new pa,xi=function(a,b){function c(h){var k=ib(h),l=gb(k,"protocol"),m=gb(k,"host",!0),n=gb(k,"port"),p=gb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},yi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(yi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=ma(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=wi.get(q);r||(r=new RegExp(c,t),wi.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return xi(b,c)}return!1};var Ai=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Bi={},Ci=encodeURI,X=encodeURIComponent,Di=Pa;var Ei=function(a,b){if(!a)return!1;var c=gb(ib(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Fi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Bi.bg=function(){var a=!1;return a};var Gi=function(){var a=!1;return a};var fj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var wj=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},xj=function(){this.c=1;this.e=[];this.p2=this.p=null};function yj(a){var b=yc,c=b.gss=b.gss||{};return c[a]=c[a]||new xj}
var zj=function(a){if(yj(a).p&&!yj(a).p2){var b=yj(a).p;yj(a).p2=function(c,d,e){b(c,d,e.eventModel)}}return yj(a).p2},Aj=function(a,b){yj(a).p2=b;yj(a).p=function(c,d,e){return b(c,d,new xe(e))}},Bj=function(a){var b=yj(a),c=zj(a);if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,new xe(l.p))}catch(m){}};g(d);g(e)}};var Uj=window,Vj=document,Wj=function(a){var b=Uj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Uj["ga-disable-"+a])return!0;try{var c=Uj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=jb("AMP_TOKEN",Vj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Vj.getElementById("__gaOptOutExtension")?!0:!1};var bk=!1;bk=!0;
var dk=function(a,b,c){if(bk)ze().push("event",[c,b],a,void 0);else{ck(a);var d=Math.floor(xa()/1E3);yj(a).e.push(new wj(b,d,c,void 0));Bj(a)}},ek=function(a,b,c){if(bk)ze().push("event",[c,b],a,!0);else{ck(a);var d=Math.floor(xa()/1E3);yj(a).e.push(new wj(b,d,c,!0))}},ck=function(a){if(1===yj(a).c&&(yj(a).c=2,!ye())){var b=encodeURIComponent(a);Ma(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},gk=function(a,b){},fk=function(a,b){},hk=function(a){return"_"===a.charAt(0)},ik=function(a){ra(a,function(c){hk(c)&&
delete a[c]});var b=a[H.rb]||{};ra(b,function(c){hk(c)&&delete b[c]})};var Z={a:{}};Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"16"})}();
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],C=x.split(","),B=0;B<C.length;B++){var E=Number(C[B]);if(isNaN(E))return[];n.test(C[B])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var C=Sh(),B=C.height;x=Math.max(v.scrollLeft+C.width,x);z=Math.max(v.scrollTop+B,z);return{Cf:x,Df:z}}}function d(){q=L("self");
r=q.document;v=r.scrollingElement||r.body&&r.body.parentNode;y=c()}function e(x,z,C,B){var E=l(z),F={},P;for(P in E){F.qa=P;if(E.hasOwnProperty(F.qa)){var T=Number(F.qa);x<T||(ji({event:"gtm.scrollDepth","gtm.scrollThreshold":T,"gtm.scrollUnits":C.toLowerCase(),"gtm.scrollDirection":B,"gtm.triggers":E[F.qa].join(",")}),$f("sdl",z,function(R){return function(U){delete U[R.qa];return U}}(F),{}))}F={qa:F.qa}}}function g(){var x=y(),z=x.Cf,C=x.Df,B=z/v.scrollWidth*100,E=C/v.scrollHeight*100;e(z,"horiz.pix",
p.ub,t.td);e(B,"horiz.pct",p.tb,t.td);e(C,"vert.pix",p.ub,t.yd);e(E,"vert.pct",p.tb,t.yd);Zf("sdl","pending",!1)}function h(){var x=250,z=!1;r.scrollingElement&&r.documentElement&&q.addEventListener&&(x=50,z=!0);var C=0,B=!1,E=function(){B?C=ci(E,x):(C=0,g(),qi("sdl")&&!a()&&(Ra(q,"scroll",F),Ra(q,"resize",F),Zf("sdl","init",!1)));B=!1},F=function(){z&&y();C?B=!0:(C=ci(E,x),Zf("sdl","pending",!0))};return F}function k(x,z,C){if(z){var B=b(String(x));$f("sdl",C,function(E){for(var F=0;F<B.length;F++){var P=
String(B[F]);E.hasOwnProperty(P)||(E[P]=[]);E[P].push(z)}return E},{})}}function l(x){return ag("sdl",x,{})}function m(x){D(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,C=x.vtp_horizontalThresholdsPixels,B=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,F=x.vtp_verticalThresholdsPixels,P=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case p.ub:k(C,z,"horiz.pix");break;case p.tb:k(B,z,"horiz.pct")}switch(E){case p.ub:k(F,z,"vert.pix");break;case p.tb:k(P,
z,"vert.pct")}qi("sdl")?ag("sdl","pending")||(w||(d(),w=!0),D(function(){return g()})):(d(),w=!0,v&&(ri("sdl"),Zf("sdl","pending",!0),D(function(){g();if(a()){var T=h();Qa(q,"scroll",T);Qa(q,"resize",T)}else Zf("sdl","init",!1)})))}var n=/^\s*$/,p={tb:"PERCENT",ub:"PIXELS"},t={yd:"vertical",td:"horizontal"},q,r,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):of(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=L("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=$e(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=A.getElementById(a.vtp_elementId);b&&(c=d?Sa(b,d):Ta(b));return wa(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(vd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=ii("gtm.referrer",1)||A.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?gb(ib(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):gi(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Xf(c,"gtm.click");ji(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!qi("cl")){var c=L("document");Qa(c,"click",a,!0);ri("cl")}D(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=L(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return li(a.vtp_name,ii("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();


Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:ii("gtm.url",1))||ei();var d=b[a("vtp_component")];if(!d||"URL"==d)return gi(String(c));var e=ib(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?la(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=gb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=gb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=ii(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Gc&&b.Ic>=b.Gc)b.Ac&&L("self").clearInterval(b.Ac);else{b.Ic++;var c=di().getTime();ji({event:b.S,"gtm.timerId":b.Ac,"gtm.timerEventNumber":b.Ic,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Gc,"gtm.timerStartTime":b.je,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.je,"gtm.triggers":b.Mg})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){D(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{S:b.vtp_eventName,Ic:0,interval:Number(b.vtp_interval),Gc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Mg:String(b.vtp_uniqueTriggerId||"0"),je:di().getTime()};c.Ac=L("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;f(Fi(m.vtp_fieldsToSet,"fieldName","value"),e);f(Fi(m.vtp_contentGroup,"index","group"),g);f(Fi(m.vtp_dimension,"index","dimension"),h);f(Fi(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=f(m);c=f(c,n)}f(Fi(c.vtp_fieldsToSet,"fieldName","value"),e);f(Fi(c.vtp_contentGroup,
"index","group"),g);f(Fi(c.vtp_dimension,"index","dimension"),h);f(Fi(c.vtp_metric,"index","metric"),k);var p=$d(c.vtp_functionName);if(ha(p)){var t="",q="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(q=c.vtp_trackerName,t=q+"."):(q="gtm"+Kc(),t=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},w=function(V){var N=[].slice.call(arguments,0);N[0]=t+N[0];p.apply(window,N)},y=function(V,N){return void 0===N?N:V(N)},x=function(V,N){if(N)for(var aa in N)N.hasOwnProperty(aa)&&w("set",V+aa,N[aa])},z=function(){
var V=function(kk,mh,lk){if(!Ha(mh))return!1;for(var Bc=ya(Object(mh),lk,[]),Se=0;Bc&&Se<Bc.length;Se++)w(kk,Bc[Se]);return!!Bc&&0<Bc.length},N;if(c.vtp_useEcommerceDataLayer){var aa=!1;aa||(N=ii("ecommerce",1))}else c.vtp_ecommerceMacroData&&(N=c.vtp_ecommerceMacroData.ecommerce);if(!Ha(N))return;N=Object(N);var sa=ya(e,"currencyCode",N.currencyCode);
void 0!==sa&&w("set","&cu",sa);V("ec:addImpression",N,"impressions");if(V("ec:addPromo",N[N.promoClick?"promoClick":"promoView"],"promotions")&&N.promoClick){w("ec:setAction","promo_click",N.promoClick.actionField);return}for(var Ca="detail checkout checkout_option click add remove purchase refund".split(" "),Va="refund purchase remove checkout checkout_option add click detail".split(" "),Wa=0;Wa<Ca.length;Wa++){var hb=N[Ca[Wa]];if(hb){V("ec:addProduct",hb,"products");w("ec:setAction",Ca[Wa],hb.actionField);
if(cd)for(var rb=0;rb<Va.length;rb++){var Wb=N[Va[rb]];if(Wb){Wb!==hb&&ab("GTM",13);break}}break}}},C=function(V,N,aa){var sa=0;if(V)for(var Ca in V)if(V.hasOwnProperty(Ca)&&(aa&&r[Ca]||!aa&&void 0===r[Ca])){var Va=v[Ca]?ua(V[Ca]):V[Ca];"anonymizeIp"!=Ca||Va||(Va=void 0);N[Ca]=Va;sa++}return sa},B={name:q};C(e,B,!0);(function(){})();
p("create",c.vtp_trackingId||d.trackingId,B);w("set","&gtm",lh(!0));c.vtp_enableRecaptcha&&w("require","recaptcha","recaptcha.js");(function(V,N){void 0!==c[N]&&w("set",V,c[N])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};C(e,E,!1)&&w("set",E);var F;c.vtp_enableLinkId&&w("require",
"linkid","linkid.js");w("set","hitCallback",function(){var V=e&&e.hitCallback;ha(V)&&V();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){c.vtp_enableEcommerce&&(w("require","ec","ec.js"),z());var P={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(ta,c.vtp_eventValue||d.value)};C(F,P,!1);w("send",
P);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==
c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(w("require","ec","ec.js"),z());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var S=
"_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","displayfeatures",void 0,{cookieName:S})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var Y="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","adfeatures",{cookieName:Y})}F?w("send","pageview",F):w("send","pageview");}if(!a){var W=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(W="internal/"+W);a=!0;var ia=G("https:","http:","//www.google-analytics.com/"+W,e&&e.forceSSL);K(ia,function(){var V=Yd();V&&V.loaded||c.vtp_gtmOnFailure();},
c.vtp_gtmOnFailure)}}else D(c.vtp_gtmOnFailure)};Z.__ua=b;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return xc.i})}();

Z.a.aev=["google"],function(){function a(q,r){var v=vd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(q,w);if(z&&(x=v(z),n[y]=x,p.push(y),35<p.length)){var C=p.shift();delete n[C]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(ei());la(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!Ei(q,w)}function e(q){m.test(q)||(q="http://"+q);return gb(ib(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":return b(r,"FORM."+q,k)||v;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":return a(r,"interactedFormFieldPosition")||
v;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Sa(q,"value");case "button":return Ta(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)th(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Sa(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",
HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||v;case "TEXT":return b(r,w,Ta)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),C=ib(z),
B=String(q.vtp_component||"URL");switch(B){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=gb(C,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,P=a(r,"element");E=P&&Sa(P,F)||v||""}return E;case "MD":var T=q.vtp_mdValue,R=b(r,"MD",Oh);return T&&R?Rh(R,T)||v:R||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();

Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=f(a),c=b;c[ec.ja]=null;c[ec.Le]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Z.a.fsl=[],function(){function a(){var e=L("document"),g=c(),h=HTMLFormElement.prototype.submit;Qa(e,"click",function(k){var l=k.target;if(l&&(l=Xa(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Sa(l,"value")){var m;(m=l.form?l.form.tagName?l.form:A.getElementById(l.form):Xa(l,["form"],100))&&g.store(m,l)}},!1);Qa(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=g.get(l),t=!0;if(d(l,function(){if(t){var q;
p&&(q=e.createElement("input"),q.type="hidden",q.name=p.name,q.value=p.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n,p))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return na(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=ag("fsl",h?"nv.mwt":"mwt",0),n;n=h?ag("fsl","nv.ids",[]):ag("fsl","ids",[]);if(!n.length)return!0;var p=Xf(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);p["gtm.elementUrl"]=t;l&&(p["gtm.formSubmitElement"]=l);if(k&&m){if(!ji(p,sf(g),m))return!1}else ji(p,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};$f("fsl","mwt",m,0);h||$f("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};$f("fsl","ids",n,[]);h||$f("fsl","nv.ids",n,[]);qi("fsl")||(a(),ri("fsl"));D(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Fi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){D(a.vtp_gtmOnFailure)})}();

Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=A.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,La(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){D(h)}}}var c=function(d){if(A.body){var e=
d.vtp_gtmOnFailure,g=vi(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.zc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(A.body,Ua(h),k,e)()}else ci(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();
Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=L("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Xa(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=ag("lcl",k?"nv.mwt":"mwt",0),m;m=k?ag("lcl","nv.ids",[]):ag("lcl","ids",[]);if(m.length){var n=Xf(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=L((ti(h,"target")||"_self").substring(1)),t=!0;if(ji(n,sf(function(){t&&p&&(p.location.href=ti(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else ji(n,function(){},l||2E3);return!0}}};Qa(c,"click",e,!1);Qa(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=ti(d,"href"),h=g.indexOf("#"),k=ti(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=gi(g),m=gi(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};$f("lcl","mwt",k,0);e||$f("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};$f("lcl","ids",l,[]);e||$f("lcl","nv.ids",l,[]);qi("lcl")||(a(),ri("lcl"));D(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(ii("gtm.start"))||0;return di().getTime()-g}function c(g,h,k,l){function m(){if(!Uh(g.target)){h.has(e.vb)||h.set(e.vb,""+b());h.has(e.ic)||h.set(e.ic,""+b());var p=0;h.has(e.xb)&&(p=Number(h.get(e.xb)));p+=100;h.set(e.xb,""+p);if(p>=k){var t=Xf(g.target,"gtm.elementVisibility",[h.uid]),q=Th(g.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.ic));
t["gtm.visibleLastTime"]=Number(h.get(e.vb));ji(t);l()}}}if(!h.has(e.Qa)&&(0==k&&m(),!h.has(e.wa))){var n=L("self").setInterval(m,100);h.set(e.Qa,n)}}function d(g){g.has(e.Qa)&&(L("self").clearInterval(Number(g.get(e.Qa))),g.remove(e.Qa))}var e={Qa:"polling-id-",ic:"first-on-screen-",vb:"recent-on-screen-",xb:"total-visible-time-",wa:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Z.__evl=g;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=$e(m)}catch(F){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=A.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var C=0;C<v.length;C++){var B=
new a(v[C],q);d(B)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&$h(w);0<v.length&&(w=Zh(k,v,[t]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=t?x.has(e.wa)||c(y,x,p,"ONCE"===r?function(){for(var z=0;z<v.length;z++){var C=new a(v[z],q);C.set(e.wa,"1");d(C)}$h(w);if(n&&zh)for(var B=0;B<zh.length;B++)zh[B]===h&&zh.splice(B,1)}:function(){x.set(e.wa,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.wa)&&(x.remove(e.wa),x.remove(e.xb)),x.remove(e.vb))}var l=g.vtp_selectorType,m;"ID"===
l?m=String(g.vtp_elementId):"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,p=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,t=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],w=-1;h();n&&Ah(h);D(g.vtp_gtmOnSuccess)})}();

var jk={};jk.macro=function(a){if(Uf.jc.hasOwnProperty(a))return Uf.jc[a]},jk.onHtmlSuccess=Uf.Cd(!0),jk.onHtmlFailure=Uf.Cd(!1);jk.dataLayer=nd;jk.callback=function(a){Ic.hasOwnProperty(a)&&ha(Ic[a])&&Ic[a]();delete Ic[a]};jk.jf=function(){yc[xc.i]=jk;Aa(Jc,Z.a);Xb=Xb||Uf;Yb=Cd};
jk.Xf=function(){Pg.gtm_3pds=!0;yc=u.google_tag_manager=u.google_tag_manager||{};if(yc[xc.i]){var a=yc.zones;a&&a.unregisterChild(xc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(p)}Ub=Z;Vb=yi;jk.jf();xf();Fd=!1;Gd=0;if("interactive"==A.readyState&&!A.createEventObject||"complete"==A.readyState)Id();else{Qa(A,"DOMContentLoaded",Id);Qa(A,"readystatechange",Id);if(A.createEventObject&&A.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(y){}q&&Jd()}Qa(u,"load",Id)}lf=!1;"complete"===A.readyState?nf():
Qa(u,"load",nf);a:{if(!cd)break a;u.setInterval(dd,864E5);}
Fc=(new Date).getTime();}};(0,jk.Xf)();

})()
