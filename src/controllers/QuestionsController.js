const Adm = require('../model/Adm');

module.exports = {
    async index(req, res) {
        const { idUser } = req.body;
        const allUsers = await Adm.find();
        const allQuestions = [];

        for (j in allUsers) {
            for (i in allUsers[j].duvidas) {
                allQuestions.push(allUsers[j].duvidas[i]);
            }
        }

        if (idUser.length != 24) {
            return res.status(400).json({ erros: 'wrongId', allQuestions });
        }
        const loggedUser = await Adm.findById(idUser);
        if (loggedUser) {
            duvidasLogado = loggedUser.duvidas;
            return res.json({ duvidasLogado, allQuestions });
        } else {
            return res.status(400).json({ erros: 'invalidUser', allQuestions });
        }
    },
    async ask(req, res) {
        const { idUser, question } = req.body;

        if (idUser.length != 24) {
            return res.status(400).json({ erros: 'wrongId' });
        }

        const user = await Adm.findById(idUser);

        if (!user) {
            return res.status(400).json({ erros: 'invalidUser' });
        }

        user.duvidas.push(question);
        await user.save();
        return res.json(user.duvidas);
    }
};