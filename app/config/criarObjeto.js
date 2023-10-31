function newEvent(nome, local, descricao, diaInicio, horaInicio, diaFim, horaFim){
    novoEvento = {
        'summary': nome,
        'location': local,
        'description': descricao,
        'start': {
          'dateTime': `${diaInicio}T${horaInicio}:00-03:00`,
          
        },
        'end': {
          'dateTime': `${diaFim}T${horaFim}:00-03:00`,
          
        },
         'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10},
          ],
        },
    };

    return novoEvento;
}

module.exports = newEvent;