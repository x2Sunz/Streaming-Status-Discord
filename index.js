const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
    checkUpdate: false
});

const token = ""; //โทเคนคนนะไม่ใช่บอท 55
const texts = [ //ใส่ข้อความตรงนี้ !!
"FutureThailand"
];

client.on("ready", async () => {
    console.log("Doing.. ");

    var text = ": ";
    var now_text = "";
    var now = 0;
    var at = 0;

    setInterval(() => {
        if (at == texts.length) {
            text = ": "+texts[0];
            at = 0;
        }
        if (now == text.length) { 
            now = 0;
            now_text = "";
            at++;

            text = ": "+texts[at];
        }

        text = ": "+texts[at];
        now_text += text[now];

        client.settings.setCustomStatus({
            text: now_text, // String | null
            expires: null, // Date.now() + 1 * 3600 * 1000 <= 1h to ms
        });

        now++;
    }, 500)
})

client.login(token);