const {google} = require('googleapis');
  
 async function insertEvent(auth, newEvent) {

    const calendar = google.calendar({version: 'v3', auth});

    calendar.events.insert({
        calendarId: 'primary',
        sendUpdates: 'externalOnly',
        auth: auth,
        key: 'AIzaSyABIEe5bSl96j8qLJw62HmPUTv6U1pbMrM',
        requestBody: newEvent
    }, function (err, event) {
        console.log(event.data.id);
        err ? console.error('Eu não consegui criar o evento por causa do erro' + err) :
        console.log('Evento criado com sucesso. Veja o link: ' + event.data.htmlLink);
    })

};

module.exports = insertEvent;