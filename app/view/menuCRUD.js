const authorize = require('../controllers/autorizarUsuario');
const insertEvent = require('../services/criarEvento');
const listEvents = require('../services/listarEvento');
const updateEvent = require('../services/atualizarEvento');
const deleteEvent = require('../services/deleteEvento');


let menuCrud = {
    async create(newEvent) {
        try {
            let auth = await authorize();
            await insertEvent(auth, newEvent);
        } catch (error) {
            console.error(error);
        }
    },
    async read() {
        try {
            let auth = await authorize();
            await listEvents(auth);
        } catch (error) {
            console.error(error);
        }
    },
    async update(eventToUpdate, updatedEventObj) {
        try {
            let auth = await authorize();
            updateEvent(auth, eventToUpdate, updatedEventObj);
        } catch (error) {
            console.error(error);
        }        
    },
    async delete(eventToDelete) {
        try {
            let auth = await authorize();
            deleteEvent(auth, eventToDelete);
        } catch (error) {
            console.error(error);
        }        
    }
};

menuCrud.read();