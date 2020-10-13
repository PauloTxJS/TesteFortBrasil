// const BusinessModel = require('../model/BusinessModel');
// const { isPast } = require('date-fns');

const FieldValidation = async (req, res, next) => {

    const { macaddress, type, name, description, when, cep } = req.body;

    if (!macaddress) {
        return res.status(400).json({ error:  'Macaddress é obrigatório'});
    }  
    if (!type) {
        return res.status(400).json({ error:  'Tipo é obrigatório'});
    }  
    if (!name) {
        return res.status(400).json({ error:  'Nome é obrigatório'});
    }  
    if (!description) {
        return res.status(400).json({ error:  'Descrição é obrigatório'});
    }  
    if (!cep) {
        return res.status(400).json({ error:  'Cep é obrigatório'});
    }  
    if (!when) {
        return res.status(400).json({ error:  'Data e hora são obrigatórios'});
    }  

     next();

}

module.exports = FieldValidation;