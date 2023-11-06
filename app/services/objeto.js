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
