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
			msg.channel.send(
			"embed = discord.Embed(title = "Информация о {}".format(user.name), color = 0xf1c40f)
    embed.add_field(name = "ID", value = user.id, inline = True)
    embed.add_field(name = "Статус", value = user.status, inline = True)
    embed.add_field(name = "Сейчас в", value = user.game, inline = True)
    embed.add_field(name = "Наивысшая роль", value = user.top_role)
    embed.add_field(name = "Прибыл на сервер", value = user.joined_at)
    embed.set_thumbnail(url = user.avatar_url)
    embed.set_footer(text = "Rayvich © 2018", icon_url = "https://images-ext-1.discordapp.net/external/yCkXzRR5Q13S2ybfLR9Mcz_wfNOQ0O9JZoOpKzd16Cg/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/279632382582325248/4fc014b5daa59135580ff7e58f93c7e6.webp")"
			);
		}
	}
};

client.on("ready", function () {
	console.log("Logged in " + client.guilds.array().length + " servers");
	client.user.setGame(cfg.prefix + "хелп | Привет я чувак");
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
            msg.channel.send(":warning:  |  **Неизвестная команда!** `" + cmdTxt + "` **Вы можете использовать** `" + cfg.prefix + "хелп" + "` **чтобы узнать что я умею** `");
        }
    }
});

client.login(cfg.token);
