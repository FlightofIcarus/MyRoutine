const listEvents = require('./listarEvento');
const authorize = require('./autorizarUsuario');

authorize().then(listEvents).catch(console.error);