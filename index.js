                    
const rwClient = require("./twitterClient.js")                               // Acesso aos tokens            
// var cronJob = require('cron').CronJob;                                   //Cria agendamentos de tweet

const tweet = async () => {
    try{
        await rwClient.v2.tweet("Bom dia e vamos para mais um dia de luta")
        
        
    }catch (e) {
        console.error(e)
    }
}
tweet();