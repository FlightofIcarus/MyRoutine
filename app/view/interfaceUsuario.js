const getEventId = require('../config/getEventoId.js');
const getValues = require('../config/tratarDados.js');
const menuCrud = require('./menuCRUD.js');
const readlineSync = require('readline-sync');

readlineSync.setDefaultOptions({ inputEncoding: 'utf-8', outputEncoding: 'utf-8' });

async function menu(){
    let opcao;

    console.log("Bem vindo(a) ao MyRoutine!");
    console.log("Selecione a opção desejada: \n\n 1 - Ver eventos do calendário \n 2 - Criar evento no calendário \n 3 - Atualizar evento do calendário \n 4 - Excluir evento do calendário \n 5 - Finalizar Programa\n ");

    do {
        opcao = parseInt(readlineSync.question('Digite um valor: '));

        switch(opcao) {    
            case 1:
                console.log('\n Eventos do calendário\n\n');
                await menuCrud.read();
                break;
            case 2:
                console.log('\n Criar evento');
                let newEvent = getValues();
                await menuCrud.create(newEvent);                
                break;
            case 3:
                console.log('\n Atualizar evento');
                let eventToUpdate = await getEventId();
                let updatedEventObj = getValues();
                await menuCrud.update(eventToUpdate, updatedEventObj);
                break;
            case 4:
                console.log('\n Excluir evento')
                let eventToDelete = await getEventId();                
                await menuCrud.delete(eventToDelete);
                break;
            case 5:
                console.log('\n Programa finalizado!')
                break;
            default:
                console.log('\n Valor inválido!')
                break;
        }
    
    } while (opcao !== 5) 


} 

module.exports = menu;