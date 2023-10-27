const {google} = require('googleapis');

// var newEvent = {
//     'summary': 'Teste de cadastro de evento',
//     'location': 'Minha casa',
//     'description': 'Testando função de criar evento.',
//     'start': {
//       'dateTime': '2023-10-21T19:00:00-03:00',
      
//     },
//     'end': {
//       'dateTime': '2023-10-21T20:00:00-03:00',
      
//     },
//      'reminders': {
//       'useDefault': false,
//       'overrides': [
//         {'method': 'email', 'minutes': 24 * 60},
//         {'method': 'popup', 'minutes': 10},
//       ],
//     },
//   };
  
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