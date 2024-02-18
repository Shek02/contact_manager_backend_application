const mongose = require("mongoose");

const conactDb = async () => {
    try {
        const connect = await mongose.connect(process.env.CONACTION_STRING);
        console.log("database conacted", connect.connection.host," name :", connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = conactDb;