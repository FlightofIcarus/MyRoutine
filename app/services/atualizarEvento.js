const {google} = require('googleapis');

function updateEvent(auth, eventoId, updatedEvent) {

    const calendar = google.calendar({version: 'v3', auth});
    
    calendar.events.update({
        key: 'AIzaSyABIEe5bSl96j8qLJw62HmPUTv6U1pbMrM',
        auth: auth,
        calendarId: 'primary',
        eventId: eventoId,
        requestBody: updatedEvent
    }, function (err, event) {
            console.log(event);
            err ? console.error('Eu não consegui atualizar o evento desejado.' + err) :
            console.log('Evento atualizado com sucesso.')
    })
};

module.exports = updateEvent;