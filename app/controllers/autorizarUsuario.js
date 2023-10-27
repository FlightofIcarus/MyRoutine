const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
const loadSavedCredentialsIfExist = require("./carregarCredenciaisSeExistentes");
const saveCredentials = require('./salvarCredenciais');
const path = require('path');
const process = require('process');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'];

const CREDENTIALS_PATH = path.join(process.cwd(), 'app', 'db','credentials.json');

async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
      return client;
    }
    client = await authenticate({
      scopes: SCOPES,
      keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
      await saveCredentials(client);
    }
    return client;
  }

  module.exports = authorize;