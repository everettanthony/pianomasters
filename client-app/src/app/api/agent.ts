import axios, { AxiosResponse } from 'axios';
import { IMaster } from '../models/master';
import { history } from '../..';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(undefined, error => {
    const {status, data, config} = error.response;

    if (error.message === 'Network Error' && !error.response) {
        toast.error('Network error.');
    }
    if (status === 404) {
        history.push('/notfound');
    }
    if (status === 400 && config.method === 'get' && data.errors.hasOwnProperty('id')) {
        history.push('/notfound');
    }    
    if (status === 500) {
        toast.error('Server error - check terminal for more information.');
    }
});

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
    get: (url: string) => axios.get(url).then(sleep(300)).then(responseBody),
    // get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    delete: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody)
}

const Masters = {
    list: (): Promise<IMaster[]> => requests.get('/masters'),
    details: (id: any) => requests.get(`/masters/${id}`),
    create: (master: IMaster) => requests.post('/masters', master),
    update: (master: IMaster) => requests.put(`/masters/${master.id}`, master),
    delete: (id: any) => requests.delete(`/masters/${id}`)
}

export default { Masters }