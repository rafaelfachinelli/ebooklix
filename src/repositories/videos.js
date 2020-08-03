import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const response = await responseServer.json();
        return response;
      }

      throw new Error('Não foi possível cadastrar os dados do servidor.')
    })
  ;
}

export default {
  create,
}