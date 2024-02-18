const { constants } = require("../constants")


const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ titale: "validation", message: err.message, stackTrace: err.stack })

        case constants.UNAUTHORIZED:
            res.json({ titale: "unauthorized", message: err.message, stackTrace: err.stack })
   
        case constants.NOT_FOUND:
            res.json({ titale: "not found", message: err.message, stackTrace: err.stack })
          
        case constants.FORBIDDEN:
            res.json({ titale: "forbidden", message: err.message, stackTrace: err.stack })
        
        case constants.SERVER_ERROR:
            res.json({ titale: "server error", message: err.message, stackTrace: err.stack })
        default:
            console.log("No Error, All good!")
            break;
    }

}
module.exports = errorHandler