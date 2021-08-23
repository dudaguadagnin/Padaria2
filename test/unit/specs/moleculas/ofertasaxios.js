import axios from 'axios'
export function getOfertas () {
  return axios.get('https://projetovue2-default-rtdb.firebaseio.com/ofertas.json?print=pretty')
    .then(response => {
      return response.data
    })
}
