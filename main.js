const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const cfg = require('./sys/cfg.json')
const wl = require('./wl/wl.json')
const fs = require('fs')
const hook = new Discord.WebhookClient('590483355418492928', 'auC9-zUiB9TX9XLcgUJWlOSMyab_qHA0-0tApWgGkPce43ob_ggfzhDar5G6slOjUUH9');
const book = new Discord.WebhookClient('590483978956308480', 'O_1tiaHKWEBw_-G7c2EvcsvobojnBSl8tjc5ZI1oAlzLrCI8n45zb4jn344TkDRaHnL4');
let token = cfg.token;
let prefix = cfg.prefix;
bot.commands = new Discord.Collection();

fs.readdir("./cmd", (err, files) => {
if(err) console.log(err);

let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
console.log("\x1b[33m","[Sylvie] Я не могу работать без команд");
return;
}

jsfile.forEach((f, i) => {
let props = require(`./cmd/${f}`);
bot.commands.set(props.help.name, props);
});
});


bot.on('ready', async (ready) => {
	console.log("\x1b[32m",`[Скрипт запущен | ${bot.user.tag}]`,"\x1b[0m")
	console.log()
	bot.user.setActivity(`в монитор | ${prefix}help`, {type: `watching`})
	bot.user.setStatus('dnd')
})

// main eblya

bot.on('message', async (message) => {
	if(message.author.id != '159985870458322944') {
		return;
	} else {
		return message.delete(60000).catch(err => { return })
	}
})


bot.on('message', async (message) => {
if(message.content.startsWith('https:/')) {
return message.delete().then(() => console.log(`${"\x1b[32m"}Удалённая ссылка${"\x1b[0m"} > ${message} | ` + message.author.tag + ' | ' + message.guild.name)).catch(err => {
console.log(`${"\x1b[31m"}Невозможно удалить сообщение${"\x1b[0m"} > Недостаточно прав | ${message} | ${message.author.tag}`)
}) 
} else {
return;
}
})

// adding role when user join to the guild

bot.on('guildMemberAdd', (guildMember) => {
  guildMember.addRole(guildMember.guild.roles.find(role => role.id === "497088522310647819"));
});


// Del messages from Dyno

bot.on('message', async (message) => {
	if(message.channel.id != '497008435238273050') {
		return;
	} else {
	if(message.author.id == '155149108183695360') {
		return message.delete().catch(err => {
			return;
		})
	} else {
		return;
	}
}
})

// hook message

bot.on('guildMemberAdd', member => {
	book.send(member + ', добро пожаловать на сервер!\nОзнакомиться с правилами: <#497010092206719006>\nНаша гильдия на VT: https://vimetop.ru/guild/582\nНаша группа в ВК: https://vk.com/trkteambw\nНадеемся, ты вступишь в нашу гильдию :smile:');
})


// Фразочки

bot.on('message', async (message) => {
if(message.content === 'Отличный ход') {
let bred = new Discord.RichEmbed()
.setColor("#945732")
.setImage("https://memepedia.ru/wp-content/uploads/2019/02/potryasayuschiy-hod-1.jpg")
message.channel.send(bred).catch(err => {
console.log(`Отправка прикольчика > Не удалось`)
})
}

if(message.content === 'Похуй') {
let bread = new Discord.RichEmbed()
.setColor("#A82323")
.setImage("https://pbs.twimg.com/media/DytV-5tWsAAFeUP.jpg")
message.channel.send(bread).catch(err => {
console.log(`Отправка прикольчика > Не удалось`)
})
}

if(message.content === 'Хороший вопрос') {
let breed = new Discord.RichEmbed()
.setImage("https://pp.userapi.com/c850520/v850520356/150a2a/-6q0a6fPnqo.jpg")
message.channel.send(breed).catch(err => {
console.log(`Отправка прикольчика > Не удалось`)
})
}

if(message.content === 'А может и нет') {
let breez = new Discord.RichEmbed()
.setImage("https://pp.userapi.com/c849132/v849132343/1b16b2/THlhMa4yKyw.jpg")
message.channel.send(breez).catch(err => {
console.log(`Отправка прикольчика > Не удалось`)
})
}

if(message.content === 'Вот так') {
let vottak = new Discord.RichEmbed()
.setImage("https://pp.userapi.com/c851436/v851436235/10a4c1/pVsfFen3-Ug.jpg")
message.channel.send(vottak).catch(err => {
console.log(`Отправка прикольчика > Не удалось`)
})
}
})


bot.on("message", async message => {
if(message.author.bot) return;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);
});

// login

bot.login(process.enc.BOT_TOKEN).catch(err => {
console.log("\x1b[31m",`[ERR_LOGIN] Запуск не был произведён // Возможные ошибки:`)
console.log("\x1b[31m",`> Неверно указан токен`)
console.log("\x1b[31m",`> Превышено время ответа с сервером`)
console.log("\x1b[31m",`> Отсутствует подключение к интернету${"\x1b[0m"}`)
return console.log()
})
