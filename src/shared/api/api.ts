import axios, { Axios } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ITask } from 'shared/types/ITodo';

// Create a new instance of axios
export const api = axios.create({
	baseURL: 'http://localhost:3003',
});