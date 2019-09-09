import axios, { AxiosResponse } from 'axios';
import { IMaster } from '../models/master';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Masters = {
    list: (): Promise<IMaster[]> => requests.get('/masters'),
    details: (id: number) => requests.get(`/masters/${id}`),
    create: (master: IMaster) => requests.post('/masters', master),
    update: (master: IMaster) => requests.put(`/masters/${master.id}`, master),
    delete: (id: number) => requests.delete(`/masters/${id}`)
}

export default { Masters }