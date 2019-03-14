import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-burger-builder-ms.firebaseio.com/',
});

export default instance;