import express from "express";
import * as path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";

import index from "./routes/index";

const app = express();

// middleware setup
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/dotma-resources"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/dist", express.static(__dirname + "/dist"));

// view engine setup
app.set("views", path.join(__dirname, "views"));

if (process.env.NODE_ENV !== "test") {
    app.use(logger("dev"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/", index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

export default app;
