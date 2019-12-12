const Adm = require('../model/Adm');
const hash = require('hash.js');

module.exports = {
    async id(req, res) {
        const { user, password } = req.body;

        const usera = await Adm.findOne(user);

        if (!usera) {
            return res.status(400).json({ erros: 'invalidUser' });
        }

        return res.json(usera._id);
    },
    async newUser(req, res) {
        const { user, password } = req.body;
        var hashPass;
        hashPass = await hash.sha512().update(password).digest('hex');

        const adm = await Adm.create({
            user: user,
            password: hashPass,
        });
        return res.json(adm._id);
    }
};