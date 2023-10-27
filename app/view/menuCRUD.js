const authorize = require('../controllers/autorizarUsuario');
const insertEvent = require('../services/criarEvento');
const listEvents = require('../services/listarEvento');
const updateEvent = require('../services/atualizarEvento');
const deleteEvent = require('../services/deleteEvento');


let menuCrud = {
    create() {authorize().then(insertEvent).catch(console.error);},
    read() {authorize().then(listEvents).catch(console.error);},
    update() {authorize().then(updateEvent).catch(console.error);},
    delete() {authorize().then(deleteEvent).catch(console.error);}
};

menuCrud.read();