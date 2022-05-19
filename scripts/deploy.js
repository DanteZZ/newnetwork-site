const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
const path = require("path");

console.log("\x1b[36m","[ Загрузка файлов на сервер... ]","\x1b[0m")

var config = {
    user: "u1545841",
    // Password optional, prompted if none given
    password: "9clMu2oQO74NzXkh",
    host: "31.31.196.215",
    port: 21,
    localRoot: path.join(__dirname,"../build"),
    remoteRoot: "/www/new-network.ru/",
    include: ["*", "**/*", ".htaccess"],
    deleteRemote: true,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("\x1b[32m",res,"\n \x1b[32m","[           Загрузка завершена          ]","\x1b[0m"))
    .catch(err => console.log("\x1b[31m",err,"\x1b[0m"));