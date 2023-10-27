const fs = require('fs').promises;
const path = require('path');

const CREDENTIALS_PATH = path.join(process.cwd(), 'app', 'db', 'credentials.json');
const TOKEN_PATH = path.join(process.cwd(), 'app', 'db', 'token.json');

async function saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
      type: 'authorized_user',
      client_id: key.client_id,
      client_secret: key.client_secret,
      refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
  }

  module.exports = saveCredentials;