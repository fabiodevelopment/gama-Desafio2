import React from 'react';
// import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Header from '../../components/Admin/Header/Header';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import ProductsNewForm from '../../components/Admin/Products/ProductsNewForm';

import * as S from './styled';

const useStyles = makeStyles((theme) => ({
	bg: {
		backgroundColor: '#FFF',
	}
}));

function ProductsNew() {
	const classes = useStyles();
	return (
		<>
		<S.DashMain>
			<div className={classes.bg}>
				<Header />
			</div>
			<main>
				<Box className="dash--Sidebar" width={1 / 5} height="100%" bgcolor="grey.300" p={1} my={0.5}>
					<Sidebar/>
				</Box>
				<Box className="dash--Content" width={4 / 5} height="100%" bgcolor="grey.100" p={1} my={0.5}>
					<h1>
						<span>Produtos</span>
					</h1>
					<ProductsNewForm />
				</Box>
			</main>
		</S.DashMain>
		</>
	)
}

export default ProductsNew;