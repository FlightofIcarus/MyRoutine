const newEvent = require('./criarObjeto.js');
const readlineSync = require('readline-sync');

readlineSync.setDefaultOptions({ inputEncoding: 'utf-8', outputEncoding: 'utf-8' });

function getValues(){
    let nome = isStringValid(readlineSync.question('\n Qual o nome do evento?'), 'nome');
    let local = isStringValid(readlineSync.question('\n Qual o local do evento?'), 'local');
    let descricao = isStringValid(readlineSync.question('\n Qual a descrição do evento?'), 'descricao');
    let diaInicio = isStringValid(readlineSync.question('\n Qual o dia de início do evento? (aaaa-mm-dd)'), 'data');
    let horaInicio = isStringValid(readlineSync.question('\n Qual a hora do início do evento? (hh:mm)'), 'hora');
    let diaFim = isStringValid(readlineSync.question('\n Qual o dia de término do evento? (aaaa-mm-dd)'), 'data');
    let horaFim = isStringValid(readlineSync.question('\n Qual o dia de término do evento? (hh:mm)'), 'hora');
    
    let eventObj = newEvent(nome, local, descricao, diaInicio, horaInicio, diaFim, horaFim);

    return eventObj;
}

function isStringValid(str, campoTexto){    
    if (str === null || str === undefined || str.trim() === '') {
        throw new Error(`${campoTexto} não pode estar vazio.`);        
    } else if(campoTexto === 'data'){
        isDateValid(str);
    } else if(campoTexto === 'hora'){
        isTimeValid(str);
    }
    
    return str;    
}

function isDateValid(dataString){
    const dataRegex = /^\d{4}-\d{2}-\d{2}$/;

    if(!dataRegex.test(dataString)) {
        throw new Error('O formato da data deve ser aaaa-mm-dd.');
    }
}
  
function isTimeValid(horaString){
    const horaRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    if(!horaRegex.test(horaString)) {
        throw new Error('O formato da hora deve ser hh:mm.');
    }
}

module.exports = getValues;