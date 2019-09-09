import axios, { AxiosResponse } from 'axios';
import { IMaster } from '../models/master';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    delete: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody)
}

const Masters = {
    list: (): Promise<IMaster[]> => requests.get('/masters'),
    details: (id: number) => requests.get(`/masters/${id}`),
    create: (master: IMaster) => requests.post('/masters', master),
    update: (master: IMaster) => requests.put(`/masters/${master.id}`, master),
    delete: (id: number) => requests.delete(`/masters/${id}`)
}

export default { Masters }