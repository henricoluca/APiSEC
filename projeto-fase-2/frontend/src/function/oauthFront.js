import config from './configFront.js';

async function getAccessToken(username, password) {  // Função para gerar o token de acesso
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"
    const response = await fetch(config.authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'password', 
        client_id: config.clientId,
        client_secret: config.clientSecret,
        username: username,
        password: password
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao obter o token.');
    }

    const responseBody = await response.json();
    const token = responseBody.access_token;
    console.log(responseBody);
    
    localStorage.setItem('token', token);
    return token; // Retorna o token de acesso
  } catch (err) {
    console.error(err);
    throw new Error('Erro ao obter o token de acesso.');
  }
}


export default getAccessToken;
