                    
const rwClient = require("./twitterClient.js")                               // Acesso aos tokens            
// var cronJob = require('cron').CronJob;                                   //Cria agendamentos de tweet

const tweet = async () => {
    try{
        await rwClient.v2.tweet("Bom dia e vamos para mais um dia de luta")
        // var postTweet = "Bom dia, vamos para a luta";
        //Agendamento dos tweets
        // var agenda = schedule.scheduleJob({hour:19, minute:12}, function(){
        
    }catch (e) {
        console.error(e)
    }
}
tweet();