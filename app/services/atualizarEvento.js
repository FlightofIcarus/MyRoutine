const {google} = require('googleapis');

function updateEvent(auth) {

    const calendar = google.calendar({version: 'v3', auth});
    
    calendar.events.update({
        key: 'AIzaSyABIEe5bSl96j8qLJw62HmPUTv6U1pbMrM',
        auth: auth,
        calendarId: 'primary',
        eventId:'09v6bnfot1bc603srpgl92on8k',
        requestBody: {
            'summary': 'Teste de atualização de evento',
            'location': 'Minha rua',
            'description': 'Testando função de update evento.',
            'start': {
              'dateTime': '2023-10-22T19:00:00-03:00',
              
            },
            'end': {
              'dateTime': '2023-10-22T20:00:00-03:00',
              
            },
             'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10},
              ],
            },
          }
    }, function (err, event) {
            console.log(event);
            err ? console.error('Eu não consegui atualizar o evento desejado.' + err) :
            console.log('Evento atualizado com sucesso.')
    })
};

module.exports = updateEvent;