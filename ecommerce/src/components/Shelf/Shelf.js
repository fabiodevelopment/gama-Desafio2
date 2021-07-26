import React, { Component } from 'react';
import { getProducts } from '../../services/api';
import Slider from "react-slick";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import * as S from './styled';

class Shelf extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: [],
		}
		this.handleBuy = this.handleBuy.bind(this);
	}
	
	async componentDidMount() {
		const response = await getProducts.get('');
		// console.log(response.data);
		this.setState({ products: response.data });
	}
	formatPrice(value) {
		return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	}
	handleBuy() {
		console.log('handleBuy');
		// this.props.addItem();
	}
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
					arrows: true,
					centerMode: false,
					slidesToShow: 2
					}
				},
				{
					breakpoint: 575,
					settings: {
					arrows: false,
					dots: true,
					centerMode: false,
					slidesToShow: 2
					}
				}
			]
		};
		const {products} = this.state;
		return (
			<>
			<CssBaseline />
			<S.ShelfSlider className="shelf">
				<Container maxWidth="lg">
					<div className="container">
						<h1>Mais Vendidos</h1>
						<ul>
							{console.log(products)}
							{console.table(products)}
							<Slider {...settings}>
								{products.map(product => (
									<li className="shelf__item" key="{product.productId}">
										<a href="#shelfLink" className="shelf__item--link">
											<div className="shelf__item--image">
												<img alt={product.productName} src={product.imageUrl} />
											</div>
										</a>
										<div className="shelf__item--box">
											<a href="#shelfLink" className="shelf__item--name">
												{product.productName}
											</a>
											<div className="shelf__item--stars">
												<div className={`star${product.stars}`}></div>
											</div>
											<div className="shelf__item--price">
												por {this.formatPrice(product.price)}
											</div>
											<div className="shelf__item--price-installments">
												{console.log('product.installments', product.installments)}
												{console.log('product.installments.lenght', product.installments.lenght)}
												{ Boolean(product.installments.length) && (
													<React.Fragment>
														ou em {product.installments[0].quantity}x de {this.formatPrice(product.installments[0].value)}
													</React.Fragment>
												)}
											</div>
											<Button onClick={this.handleBuy} variant="contained" color="primary" href="#contained-buttons">COMPRAR</Button>
										</div>
										
									</li>
								))}
							</Slider>
						</ul>
					</div>
				</Container>
			</S.ShelfSlider>
			</>
		);
	}
}
export default Shelf;