const express = require('express');
const AdmController = require('./controllers/AdmController');
const QuestionsController = require('./controllers/QuestionsController');

const routes = express.Router();
routes.get('/', (req, res) => {
    return res.json({ message: `Olá ${req.query.name}` });
});
routes.get('/findId', AdmController.id);
routes.get('/listQuestions', QuestionsController.index);
routes.post('/newQuestion', QuestionsController.ask);
routes.post('/newUser', AdmController.newUser);

module.exports = routes;