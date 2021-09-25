var express = require('express');

var logger = require('morgan');

const cookieParser = require("cookie-parser");

const favicon = require("serve-favicon");

const path = require("path");

const session = require('express-session');
const MongoStore = require('connect-mongo');

// Middleware configuration
module.exports = (server) => {
  // In development environment the app logs
  server.use(logger("dev"));

  // To have access to `body` property in the request
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(cookieParser());

  // Handles access to the public folder
  server.use(express.static(path.join(__dirname, "..", "client", "build")));

  // Handles access to the favicon
  // app.use(favicon(path.join(__dirname, "..", "public", "images", "favicon.ico")));

  server.use(
		session({
			secret: 'Globtrotters-secret',
			resave: false,
			saveUninitialized: true,
			cookie: {
				maxAge: 24 * 60 * 60 * 1000
			},
			store: MongoStore.create({
				mongoUrl: `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
			})
		})
	);

};
