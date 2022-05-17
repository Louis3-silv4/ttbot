const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({

appKey: "D8Pd1jS4EiTUwQeqGfL40xw0v",
appSecret: "R55okMnd9wxyqM2xFNw3zDPfJiLNmK8SplrsM6AWw2AhrkaU2m",
accessToken: "1516138576857157637-X9T1qnO3GqxcDXLO6j6SCq13y7U7OJ",
accessSecret: "sP3YZbpRfCDzl6Gn1NViEgj661eD7PmW7vD5MAtIr6XmL", 
})
const rwClient = client.readWrite

module.exports = rwClient