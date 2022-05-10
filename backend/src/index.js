const express = require('express');

// const formController = require('./controllers/form.controller');
const dateController = require('./controllers/date.controller')
const emailController = require('./controllers/email.controller')
const numberController = require('./controllers/number.controller')
const textController = require('./controllers/text.controller')
const passwordController = require('./controllers/password.controller')

const app = express();

app.use(express.json());

// app.use("/form", formController);
app.use("/date", dateController);
app.use("/email", emailController);
app.use("/number", numberController);
app.use("/text", textController);
app.use("/password", passwordController);


module.exports = app;