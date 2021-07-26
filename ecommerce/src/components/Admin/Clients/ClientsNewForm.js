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

export default function ClientsNewForm(props) {
	const classes = useStyles();
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [telefone, setTelefone] = useState('');
	let [cpf, setCpf] = useState('');
	let [cep, setCep] = useState('');
	let [endereco, setEndereco] = useState('');
	let [numero, setNumero] = useState('');
	let [complemento, setComplemento] = useState('');
	let [bairro, setBairro] = useState('');
	let [cidade, setCidade] = useState('');
	let [estado, setEstado] = useState('');


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
			localStorage.setItem('listClients', JSON.stringify({
				'Nome' 			: name,
				'Email'			: email,
				'Telefone'		: telefone,
				'cpf'			: cpf,
				'cep'			: cep,
				'endereco'		: endereco,
				'numero'		: numero,
				'complemento'	: complemento,
				'cidade'		: cidade,
				'estado'		: estado,
				
			}));
			setErro(false);
			setName('');
			setEmail('');
			setTelefone('');
			setCpf('');
			setCep('');
			setEndereco('');
			setNumero('');
			setComplemento('');
			setCidade('');
			setEstado('');
		}
	}
	return(
		<>
		<section className={classes.cadastro}>
			<CssBaseline />
			<Container maxWidth="lg">
				<form className={classes.root} noValidate autoComplete="off">
					<TextField id="name" label="Name" value={name} onChange={e => setName(e.target.value)} variant="outlined" />
					<TextField id="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" />
					<TextField id="telefone" label="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} variant="outlined" />
					<TextField id="cpf" label="cpf" value={cpf} onChange={e => setCpf(e.target.value)} variant="outlined" />
					<TextField id="cep" label="Cep" value={cep} onChange={e => setCep(e.target.value)} variant="outlined" />
					<TextField id="endereco" label="endereco" value={endereco} onChange={e => setEndereco(e.target.value)} variant="outlined" />
					<TextField id="numero" label="numero" value={numero} onChange={e => setNumero(e.target.value)} variant="outlined" />
					<TextField id="complemento" label="complemento" value={complemento} onChange={e => setComplemento(e.target.value)} variant="outlined" />
					<TextField id="bairro" label="bairro" value={bairro} onChange={e => setBairro(e.target.value)} variant="outlined" />
					<TextField id="cidade" label="cidade" value={cidade} onChange={e => setCidade(e.target.value)} variant="outlined" />
					<TextField id="estado" label="estado" value={estado} onChange={e => setEstado(e.target.value)} variant="outlined" />
					<Button onClick={handleSubmit} variant="contained" size="large" className={classes.btnCadastrar} color="primary">Cadastrar</Button>
					{ erro ? <p className={classes.error} >Ocorreu um erro. Tente novamente.</p> : ''}
					{ success ? <p className={classes.success} >E-mail Cadastrado com sucesso</p> : ''}
				</form>
			</Container>
		</section>
		</>
	)
}