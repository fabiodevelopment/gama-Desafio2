import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '100ch',
		},
	},
	cadastro: {
		textAlign: 'center',
		padding: '2rem 0 5rem',
	},
	btnCadastrar: {
		width: '92ch',
		height: '54px',
	},
	// error: {
	// 	color: 'red',
	// 	display: 'block',
	// 	width: '100%',
	// },
	// success: {
	// 	color: 'green',
	// 	display: 'block',
	// 	width: '100%',
	// }

}));

export default function ProductsNewForm(props) {
	const classes = useStyles();
	let [name, setName] = useState('');
	let [shortDescription, setShortDescription] = useState('');
	let [longDescription, setLongDescription] = useState('');
	let [quantity, setQuantity] = useState('');
	let [price, setPrice] = useState('');
	let [category, setCategory] = useState('');
	let [brand, setBrand] = useState('');
	let [image, setImage] = useState('');

	let [erro, setErro] = useState(false);
	let [success, setSuccess] = useState(false);

	function handleSubmit() {
		console.log('handleSubmit')
		if(name === '' || shortDescription === ''|| longDescription === ''|| quantity ==='' || price ==='' || category ==='' || brand ==='' || image === '' ) {
			console.log('error or success');
			setErro(true);
			setSuccess(false);
		} else {
			localStorage.setItem(`listProducts-${name}`, JSON.stringify({
				'name' 		        : name,
                'shortDescription'	: shortDescription,
                'longDescription'	: longDescription,
				'quantity'			: quantity,
				'price'			    : price,
				'category'		    : category,
				'brand'		        : brand,
				'image'		        : image,
				
			}));
			setSuccess(true);
			setErro(false);
			setName('');
			setShortDescription('');
			setLongDescription('');
			setQuantity('');
			setPrice('');
			setCategory('');
			setBrand('');
			setImage('');
		}
	}
	return(
		<>
		<section className={classes.cadastro}>
			<CssBaseline />
			<Container maxWidth="lg">
				<form className={classes.root} noValidate autoComplete="off">
					{ erro ? <div className="error" >Ocorreu um erro. Tente novamente.</div> : ''}
					{ success ? <div className="success">E-mail Cadastrado com sucesso</div> : ''}
					<TextField id="name" label="Nome do produto" value={name} onChange={e => setName(e.target.value)} variant="outlined" />
					<TextField id="shortDescription" label="Descrição curta" value={shortDescription} onChange={e => setShortDescription(e.target.value)} variant="outlined" />
					<TextField id="longDescription" label="Descrição Longa" value={longDescription} onChange={e => setLongDescription(e.target.value)} variant="outlined" />
					<TextField id="quantity" label="Quantidade em estoque" value={quantity} onChange={e => setQuantity(e.target.value)} variant="outlined" />
					<TextField id="price" label="Preço de venda" value={price} onChange={e => setPrice(e.target.value)} variant="outlined" />
					<TextField id="category" label="Categoria" value={category} onChange={e => setCategory(e.target.value)} variant="outlined" />
					<TextField id="brand" label="Marca" value={brand} onChange={e => setBrand(e.target.value)} variant="outlined" />
					<TextField id="image" label="Url da imagem" value={image} onChange={e => setImage(e.target.value)} variant="outlined" />
					<Button onClick={handleSubmit} variant="contained" size="large" className={classes.btnCadastrar} color="primary">Cadastrar</Button>
				</form>
			</Container>
		</section>
		</>
	)
}