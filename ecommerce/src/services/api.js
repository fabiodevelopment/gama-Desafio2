import axios from 'axios';

export const getProducts = axios.create({
	baseURL: 'https://corebiz-test.herokuapp.com/api/v1/products'
});

export const sendNewsletter = (name, email) => {

	return axios({
		method: 'post',
		url: 'https://corebiz-test.herokuapp.com/api/v1/newsletter',
		data: {
			name,
			email 
		}
	});
}

