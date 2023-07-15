import axios from 'axios';

export const galapagosApi = axios.create({
  baseURL: 'https://639c781616d1763ab14ae929.mockapi.io/test/front-end',
});
