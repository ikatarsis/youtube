import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '4d0dbc3ccdmsh78a14f4b5f3f12cp196bbejsnc8a33b76fad1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}

export const fetchFromAPI = async url => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
