const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env. BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xKH+UOVnXVeEEEL6Citk6dh0gCIldDuNnlv5/C7p7uhzlnenhKJWTtlbXW3q8gSYMcz3AD+q8gI0EJKW6XtMkw6INh4XmYAAYgSCHog8FiIByHW68wtImqjQf1QT3ntWrF58Qod6fJXBKlo1Dap4n/DO4MyIpTFLh/AJy9sGFk8vaObzZY3lN/qlM+y+QwHkfyVBnullPbsYpsrIfP4N4iwoAEia9lZxxjAqMZbmwYkO/R1/VjLYdDp1NvtRunh/QSTkcezy468YBehWzPEWVWvkxIWH2Pvk8q3sozdn085JawF4QbDKuNFKbjpVwn1tmDN369U0bOXnmjnwd+gpGBcEID2nxb9854s0vW7Ih2HWmijKm6GLtRo1U1e9k3lx23Ux11Z5hF9l3deyv1zPGXbJyZ/suS62zSznmy43Y6Cs11rs3DnnNTIh+bD8B/iNvkIyvh/9E9nQvZZpOJfqmjTjp3rop18QbQqEXbjMcr0bK3EtoL+T5cfI9+ZyfOndGY1a3o4szNHuXS4VaTp5rX8ZJ9hz2sZOF6TNDs5n7Sh7Qgf2LJncwJvrilq4aonHITOAq37ERHhk00x7rUZDIzFnVBVnEozvdUNcVmqRV+N5ta+yr2ltLQcgXjZJcHfQwFJ5tJQXyunh8vCnFjINBn7wwg2A9ySiAN0uSxxwCIyg12CaYPcQEtpK2h62XYO4XN1h4vdjBUzqGyi5p6ZFdxzXHeZblhp7fwGTAgI6mL8xyjaZDTlDQLnOfQxzno//2TAQmu6ZttbTGeZYAXkJxukyKLUog+PP04hK6bFgndNIk7aheYgH7vcxtTGiR+3qpYJJC456DEozOkOeh7MMrxnQEIl4GLWzyA88WQ3o7VBge5VU7t4W3oRX5L+Zwmb7/wsqAgF3lPrATZJ0Fh8ZMCXekJqy7P9lgBsScVMCB475j2zm8NFGEqrXm1eKH5KIREMKcNRjrCPD08THhTHhOMQJ+SAjPgBN2wyJw0xMkfcE8vp9uFIp+7yu6hXm1pZZ1CK+q9cMIX3DdHQf/1c0qNUtTi8Qd7N+bnOmBA/Ahg0L6cEwW5J7KSrPTEvvhX/qNqdYRZ9iPBtIV917y9gDCFQZSDPhgtO0KKB7pm2EpIero+MPzByB+AT48+ov4WpmvPkgqB6FwBveuldzFt76Zax41ZkWw8OXOo5Cs2LlzuJX/+FxDQB6rDC9OFiYw1h7p1nEynXWmT1oNgL+wLz3C7ZSNbmr4VQiG1zIsqLsqi1rTjjRSVmOTHSD/Xsp9fVmuzuqbq0qcBGg2e22pvWflaTO8cBH42WtqjsuGGhs86WXPoKraIaGyjRb2tvHg5uR27VLtm0XldRfFA5YTA0bfa0VhLNW/zKesuCtNaeXtvh6Q08N+b8DEEovfhGzwa5PU9WV6AH7Msga1D/+HN14z37swXiPfh+JscDSEdF6SY1ZTEiZSqRuPwSteJt4E7k1b1ASUnVVkeSbKMZHC//2RAFkHqpSQGfQATRNIAAQZEMKeDzzZ1ghjnFMYZ6LMyryiCqrA9BsTNIMs2FNKP7gaD9lvIV3D/BXzdLfL3BwAA
| '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
