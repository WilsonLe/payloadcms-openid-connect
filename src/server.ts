import express from "express";
import session from "express-session";
import payload from "payload";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
	res.redirect("/admin");
});

app.use(
	session({
		secret: process.env.PAYLOAD_SECRET,
		resave: false,
		saveUninitialized: false
	})
);
app.get("/auth/exchange-code-for-token", (req, res) => {
	res.json({ foo: "bar" });
});

const start = async () => {
	// Initialize Payload
	await payload.init({
		secret: process.env.PAYLOAD_SECRET,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
		}
	});

	await payload.authenticate(req,res,next)

	// Add your own express routes here

	app.listen(3000);
};

start();
