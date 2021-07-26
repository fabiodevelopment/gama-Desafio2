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
			width: '25ch',
		},
	},
	newsletter: {
		backgroundColor: '#f3f3f3',
		textAlign: 'center',
		padding: '2rem 0 5rem',
	},
	btnCadastrar: {
		height: '54px',
	},
	error: {
		color: 'red',
		display: 'block',
		width: '100%',
	},
	success: {
		color: 'green',
		display: 'block',
		width: '100%',
	}

}));

export default function Newsletter(props) {
	const classes = useStyles();
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [erro, setErro] = useState(false);
	let [success, setSuccess] = useState(false);

	function handleSubmit() {
		console.log('handleSubmit')
		console.log(name);
		console.log(email);
		if(name === '' || email ==='') {
			setErro(true);
			setSuccess(false);
		} else {
			localStorage.setItem('listMail', JSON.stringify({
				'Nome': name,
				'Email': email
			}));
			setErro(false);
			setName('');
			setEmail('');
			setSuccess(true);
		}
	}
	return(
		<>
		<section className={classes.newsletter}>
			<CssBaseline />
			<Container maxWidth="lg">
				<h2>Cadastre-se para receber ofertas e promoções</h2>
				<p>Cadastre o seu melhor endereço de e-mail, e seja o primeiro a receber nossas ofertas da Black Friday</p>
				<form className={classes.root} noValidate autoComplete="off">
					<TextField id="name" label="Name" value={name} onChange={e => setName(e.target.value)} variant="outlined" />
					<TextField id="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" />
					<Button onClick={handleSubmit} variant="contained" size="large" className={classes.btnCadastrar} color="primary">Cadastrar</Button>
					{ erro ? <p className={classes.error} >Ocorreu um erro. Tente novamente.</p> : ''}
					{ success ? <p className={classes.success} >E-mail Cadastrado com sucesso</p> : ''}
				</form>
			</Container>
		</section>
		</>
	)
}