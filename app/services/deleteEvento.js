const {google} = require('googleapis');

function deleteEvent(auth, eventoId) {

    const calendar = google.calendar({version: 'v3', auth});
    
    calendar.events.delete({
        key: 'AIzaSyABIEe5bSl96j8qLJw62HmPUTv6U1pbMrM',
        auth: auth,
        calendarId: 'primary',
        eventId: eventoId
    }, function (err, evento) {
            console.log(evento);
            err ? console.error('Eu não consegui deletar o evento desejado.' + err) :
            console.log('Evento deletado com sucesso.')
    })
};

module.exports = deleteEvent;