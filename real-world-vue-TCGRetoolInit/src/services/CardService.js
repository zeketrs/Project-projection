import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/SoKoySugoi/my-repo',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getCards() {
    return apiClient.get('/cards')
  },
  getCard(id) {
    return apiClient.get('/cards/' + id)
  },
}
