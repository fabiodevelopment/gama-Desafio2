import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header/Header';
import Shelf from '../../components/Shelf/Shelf';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import { HeroDesktop } from '../../components/Hero/Hero';

const useStyles = makeStyles((theme) => ({
	bg: {
		backgroundColor: '#FFF',
	}
}));

function Home() {
	const classes = useStyles();
	return (
		<>
			<div className={classes.bg}>
				<Header />
				<HeroDesktop />
				<Shelf />
				<Newsletter />
				<Footer />
			</div>
		</>
	)
}

export default Home;