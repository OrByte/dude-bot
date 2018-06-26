/* Wroted by https://vk.com/rayvy */ /* if u read this, you are PIDOR */
const Discord = require('discord.js');

var client = new Discord.Client(); /* variable */
var cfg = require('./cfg.json'); /*activate cfg.json*/
console.log("Пачик готов к битве!");
/*there is not so hard commands*/
var commands = {
    "хелп": {
        process: function (msg, suffix) {
            msg.author.send([
                ":page_facing_up:  |  **Доступные команды:**",
				"```perl",
                "!хелп #Показывает доступные команды",
                "!войти #Заходит на доступный голосовой канал",
				"!стоп #Выходить из голосового канала/вырубает шансон (и не только)",
				"!радио <имя_станции> #Включает радио",
				"!список #Показывает список доступных радиостанции",
				"~~~Также забавные фукнции...~~~",
				"!ривер | ",
				"```",
				"",
				"Привет, я Пачик) Я готов к вашим услугам. Но если вы обидете меня, я вас нахуй убью :3"
            ]);
            msg.channel.send(":mailbox_with_mail:  |  **Проверьте личное сообщение!!**");
        }
    },
	"инвайт": {
		process: function (msg, suffix) {
			msg.channel.send(":tickets:  |  **Я буду только тут!");
		}
	}
};

client.on("ready", function () {
	console.log("Logged in " + client.guilds.array().length + " servers");
	client.user.setGame(cfg.prefix + "хелп | МАЙ НЕЙМ ИЗ ЧУУУВАК "); /* help */
});

client.on('message', function (msg) {
    if(msg.content.indexOf(cfg.prefix) === 0) {
		var cmdTxt = msg.content.split(" ")[0].substring(cfg.prefix.length);
		var cmd = commands[cmdTxt];
        var suffix = msg.content.substring(cmdTxt.length + cfg.prefix.length+1);
        if(cmd !== undefined) {
            cmd.process(msg, suffix);
        } else {
			cmdTxt = cmdTxt.replace('`', '');
			if (cmdTxt === ''){
				var cmdTxt = "none";
			}
            msg.channel.send(":warning:  |  **Неизвестная команда!** `" + cmdTxt + "` **Вы можете использовать** `" + cfg.prefix + "хелп" + "` **для просмотра всех функции ПАЧИМАРИКА!!!** `");
        }
    }
});

client.login(cfg.token);
