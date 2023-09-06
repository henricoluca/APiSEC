import config from "./configFront";

async function getFruits(token) {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED="0"
    const response = await fetch(config.apiUrl , {
      headers:{
        Authorization: token}
    });
    
    // if (!response.ok) {
    //   throw new Error('Erro do response.');
    // }

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter as frutas');
  }
}

export default getFruits;
