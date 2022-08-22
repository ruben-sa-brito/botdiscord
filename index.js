// @discordjs/voice@0.10.0  
// ├── discord.js@11.5.1        
// ├── ffmpeg-static@4.3.0      
// ├── opusscript@0.0.6
// └── ytdl-core@4.11.0

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const Ytdl = require('ytdl-core');


const TOKEN = '**';
let estouPronto = false;

client.on("ready", ()=> {
    console.log('estou online!')
});
client.on("message", (msg) => {
    if(msg.content == 'olá'){
        msg.reply('olá!');
    }
});

client.on("message", (msg) => {
    if(msg.content === '!join'){
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.join()
            estouPronto = true;
        }
        else {
            msg.channel.send('Voce precisa estar em um canal');
            
        }
    }
    else if(msg.content === '!sair'){
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.leave();
            estouPronto = false;
        }
        else {
            msg.channel.send('Voce precisa estar em um canal');
        }
    }
    else if(msg.content.startsWith('!play ')){
        if(estouPronto){
            let oQueTocar = msg.content.replace('!play ','')
            
            if (Ytdl.validateURL(oQueTocar)){
                msg.member.voiceChannel.connection.playStream(Ytdl(oQueTocar))

            }

            else{
                msg.channel.send('O link nao é valido');
            }
        }
        }
    else if(msg.content.startsWith('teste')){
        msg.member.setMute(true)



    }});
//client.on('voiceStateUpdate', (oldMember, newMember) =>{
//    if (newMember.voiceChannel == "Sala 1"){
//        newMember.setMute(true)
//    }
//    else if(newMember.voiceChannel == oldMember.voiceChannel){
 //       newMember.setMute(false)
  //  }
    

//})


client.login(TOKEN);