                    
const { CronJob } = require("cron");
const rwClient = require("./twitterClient.js")                               // Acesso aos tokens            
                            
const arr = [
    'Você tentou o seu melhor e falhou miseravelmente. A lição é: nunca tente.',
    'É só uma fase ruim, logo vai piorar',
    'A vida é difícil, mas é ainda mais difícil se você for idiota.',
    'Cada dia é uma nova chance para você errar novamente.',
    'Sempre há espaço na vida para fazer mais merda. Sempre.',
    'Quem disse que dinheiro não compra felicidade não sabia onde comprar.',
    'Se você nunca tentar nada novo, perderá muitas das grandes decepções da vida.',
    'Nunca é tarde para voltar para a cama.',
    'Sempre haverá alguém na Índia que sabe fazer melhor do que você.',
    'A morte é inevitável !',
]

const tweet = async () =>  {
    try {
        
     await rwClient.v2.tweet(arr[Math.floor(Math.random() * arr.length)
      ]);

    } catch (e) {
        console.error(e);
    }
}

tweet()