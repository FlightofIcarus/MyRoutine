
const {google} = require('googleapis');



// authorize().then(deleteEvent).catch(console.error);

function deleteEvent(auth) {

    const calendar = google.calendar({version: 'v3', auth});
    
    calendar.events.delete({
        key: 'AIzaSyABIEe5bSl96j8qLJw62HmPUTv6U1pbMrM',
        auth: auth,
        calendarId: 'primary',
        eventId:'9ac91tvjr31ucqnn9cup63uhcs'
    }, function (err, event) {
            console.log(event);
            err ? console.error('Eu não consegui deletar o evento desejado.' + err) :
            console.log('Evento deletado com sucesso.')
    })
};

module.exports = deleteEvent;