const bodyParser = require("body-parser");
const express = require("express");
const routes = require("./routes");
const app = express();

app.use(
	cors({origin: "*"})
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(process.env.BACKEND_PORT, () => {
	console.log(`app listening on port ${process.env.BACKEND_PORT}`);
});