const {google} = require('googleapis');



async function listEvents(auth) {
  const calendar = google.calendar({version: 'v3', auth});
  const res = await calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 5,
    singleEvents: true,
    orderBy: 'startTime',
  });
  const events = res.data.items;
  if (!events || events.length === 0) {
    console.error('Nenhum evento encontrado.');
    return;
  }
  console.log('Mostrando seus próximos 05 eventos:');
  events.map((event, i) => {
    const start = event.start.dateTime || event.start.date;
    console.log(`${start} - ${event.summary} - ${event.iCalUID}`);
  });
}


module.exports = listEvents;