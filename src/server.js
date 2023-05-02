require("express-async-errors");

const database = require("./database/sqlite");

const AppError = require("./utils/AppError");

const uploadConfig = require("./configs/uploads")

const cors = require("cors");

const express = require("express");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

database();

app.use( (error, request, response, next ) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    return response.status(error.statusCode).json({
        status: "error",
        message: "Internal server error"
    })

});

const PORT = 3333;
app.listen(PORT);

