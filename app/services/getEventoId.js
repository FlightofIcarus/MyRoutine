const {google} = require('googleapis');
const authorize = require('../controllers/autorizarUsuario');
const readlineSync = require('readline-sync');


async function getEventId(){  
    let auth = await authorize();

    const calendar = google.calendar({version: 'v3', auth});

    const res = await calendar.events.list({
      calendarId: 'primary',
      timeMin: '2023-10-27T09:00:00-03:00',
      timeMax: '2023-10-27T23:00:00-03:00',
      singleEvents: true,
      orderBy: 'startTime',
    });
    const events = res.data.items;
    if (!events || events.length === 0) {
      console.error('Nenhum evento encontrado.');
      return;
    }    
    events.map((event, i) => {
      const start = event.start.dateTime || event.start.date;
      console.log(`${i} + ${start} - ${event.summary} - ${event.iCalUID}`);
    });

    let opcao = parseInt(readlineSync.question('\n Digite o valor correspondente ao Evento desejado: \n'));    
    let aux = events[opcao].iCalUID.slice(0, 26);
    console.log(aux)
    return aux;
}

module.exports = getEventId;