var newEvent = {
    'summary': 'Teste de cadastro de evento',
    'location': 'Minha casa',
    'description': 'Testando função de criar evento.',
    'start': {
      'dateTime': '2023-10-21T19:00:00-03:00',
      
    },
    'end': {
      'dateTime': '2023-10-21T20:00:00-03:00',
      
    },
     'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
      ],
    },
  };

  let nome = prompt('Qual o nome do evento?');
  let local = prompt('Qual o local do evento?');
  let descricao = prompt('Qual a descrição do evento?');
  let diaInicio = prompt('Qual o dia de início do evento? seguindo o modelo aaaa-mm-dd');
  let horaInicio = prompt('Qual a hora do início do evento? seguindo o modelo hh:mm');
  let diaFim = prompt('Qual o dia de término do evento?');
  let horaFim = prompt('Qual o dia de término do evento?');

  newEvent(nome, local, descricao, diaInicio, horaInicio, diaFim, horaFim) {
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




//   prompt = 'navegador';
//   readline = 'node, mas é assíncrono';
//   readline synch = 'node e síncrono';