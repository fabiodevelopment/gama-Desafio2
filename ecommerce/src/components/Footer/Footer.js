import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.common.white,
		backgroundColor:theme.palette.common.black
	},
	footer: {
		backgroundColor: theme.palette.common.black
	},
	footerLink: {
		color: theme.palette.common.white,
	}
}));

export default function Footer() {
	const classes = useStyles();
	return(
		<>
		<footer className={classes.footer}>
			<CssBaseline />
				<Container maxWidth="lg">
					<Grid container spacing={3}>
						<Grid item xs={12} sm={3}>
							<Paper className={classes.paper}>
								<h3>Sobre o Ecommerce</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Paper className={classes.paper}>
								<h3>Institucional</h3>
								<ul>
									<li><a href='/' className={classes.footerLink}>Quem Somos</a></li>
									<li><a href='/' className={classes.footerLink}>Saiu na Imprensa</a></li>
									<li><a href='/' className={classes.footerLink}>Trabalhe Conosco</a></li>
									<li><a href='/' className={classes.footerLink}>Nossas Lojas</a></li>
								</ul>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Paper className={classes.paper}>
								<h3>Minhas Compras</h3>
								<li><a href='/' className={classes.footerLink}>Meus Pedidos</a></li>
								<li><a href='/' className={classes.footerLink}>Meus Favoritos</a></li>
								<li><a href='/' className={classes.footerLink}>Meu Carrinho</a></li>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Paper className={classes.paper}>
							<h3>Atendimento</h3>
								<li><a href='/' className={classes.footerLink}>Segurança</a></li>
								<li><a href='/' className={classes.footerLink}>Entrega</a></li>
								<li><a href='/' className={classes.footerLink}>Pagamento</a></li>
								<li><a href='/' className={classes.footerLink}>Fale Conosco</a></li>
							</Paper>
						</Grid>
					</Grid>
			</Container>
		</footer>
		</>
	)
}