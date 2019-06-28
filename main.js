const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const hook = new Discord.WebhookClient('590483355418492928', 'auC9-zUiB9TX9XLcgUJWlOSMyab_qHA0-0tApWgGkPce43ob_ggfzhDar5G6slOjUUH9');
const book = new Discord.WebhookClient('590483978956308480', 'O_1tiaHKWEBw_-G7c2EvcsvobojnBSl8tjc5ZI1oAlzLrCI8n45zb4jn344TkDRaHnL4');
let prefix = "a!";
bot.commands = new Discord.Collection();


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


// fuck

bot.on('message', async (message) => {
	if(message.content == `${prefix}help`) {
		var links = 'https://discord.gg/k7PruNp';
let embedm = new Discord.RichEmbed()
.setDescription("Помощь")
.setColor("#8AC951")
.setThumbnail(message.author.avatarURL)
.addField(message.author.tag, "Вот тебе немного помощи")
.addField("Для администрации:", `${prefix}очистка, ${prefix}clear`)
.addField('Для пользователей:', `${prefix}wl, ${prefix}help`)
.addField('Пикчи:', 'Похуй, Отличный ход, Вот так, А может и нет, Хороший вопрос')
.setImage('https://contenthub-static.grammarly.com/blog/wp-content/uploads/2018/05/how-to-ask-for-help-760x400.jpg')
.addField("Сервер создателя:", links)
.setFooter('По вопросам обращаться к создателю: Leonid#9085')

return message.channel.send(embedm).catch(err => {
	console.log(`Помощь > Невозможно`)
})
	}

	// next

	if(message.content == `${prefix}keyforclear`) {
		var ids = '415868083232833536';

if(message.author.id != ids) {
			return;
		} else {
			console.clear()
			console.log(`${"\x1b[36m"}Очистка${"\x1b[0m"} > ` + 'Developer#0000' + `, вы очистили консоль.`)
			console.log()
		}

	}

	//next

	if(message.content == `${prefix}wl`) {
		var wlone = 'https://vk.com/trkteambw'
var wltwo = 'https://vimetop.ru/guild/582'
let embedom = new Discord.RichEmbed()
.setDescription("Ссылки вайт листа:")
.setColor("#8AC951")
.addField("The Russian Kings Группа ВК:", wlone)
.addField("The Russian Kings VimeTop:", wltwo)
.setThumbnail('https://www.merseaislandlionsclub.com/wp-content/uploads/2017/04/clipboard-list-flat.png')
.setFooter('По вопросам обращаться к создателю: Leonid#9085')

return message.channel.send(embedom).catch(err => {
	console.log(`Помощь > Невозможно`)
})
	}

	//next 

	if(message.content == `${prefix}чистка`) {
		var idf = '367707542475898900';

if(message.author.id != idf) {
			const emojis = message.guild.emojis.find(emoji => emoji.name === 'no');
			if(!emojis) return console.log(`Эмодзи > Не найдено`)
			message.react(emojis).catch(err => { console.log(`Эмодзи > Не могу реактить`) }).then(() => console.log(`${"\x1b[33m"}Предупреждение ${"\x1b[0m"}> ${message.author.tag} попытался очистить консоль!`))
			message.reply('вам нельзя использовать данную команду!').then(message => message.delete(5000)).catch(err => { return })
			return;
		} else {
			if(!emoji) return console.log('Эмодзи > Не найдено')
			const emoji = message.guild.emojis.find(emoji => emoji.name === 'ok');
			message.react(emoji).catch(err => { console.log(`Эмодзи > Не могу реактить`) })
			console.clear()
			console.log(`${"\x1b[36m"}Очистка${"\x1b[0m"} > ` + message.author.tag + `, вы очистили консоль.`)
			console.log()
			return;
		}
	}

	//next 

	if(message.content == `${prefix}clear`) {
		if(!message.member.hasPermission("MANAGE_MESSAGES")) {
		return message.reply('вы не можете использовать данную команду!')
	} else {
		if(!args[0]) return message.reply(`вы не указали количество сообщений, которые нужно удалить!\nПример: ${prefix}clear 10`);
		message.channel.bulkDelete(args[0]).then(() => {
			let embed = new Discord.RichEmbed()
			.setColor("#D4862A")
			.setThumbnail('https://pp.userapi.com/c849224/v849224944/1bfea6/IGe5LCIEAg0.jpg')
			.addField(`Удалено сообщений:`, args[0])
			.setFooter('По вопросам обращаться к создателю: Leonid#9085')
			message.channel.send(embed).then(message => message.delete(10000).catch(err => { return }));
		})
	}
	}

	
})


// login

bot.login(cfg.token).catch(err => {
console.log("\x1b[31m",`[ERR_LOGIN] Запуск не был произведён // Возможные ошибки:`)
console.log("\x1b[31m",`> Неверно указан токен`)
console.log("\x1b[31m",`> Превышено время ответа с сервером`)
console.log("\x1b[31m",`> Отсутствует подключение к интернету${"\x1b[0m"}`)
return console.log()
})
