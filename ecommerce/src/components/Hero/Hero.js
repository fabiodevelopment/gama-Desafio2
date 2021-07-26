import React, { Component } from 'react';
import bannerHeroDesktop from '../../images/bannerHero-desk.png';
import bannerHeroDesktop2 from '../../images/bannerHero-desk2.png';
import bannerHeroMobile from '../../images/bannerHero-mobile.png';
import Slider from "react-slick";

import * as S from './styled';

export class HeroDesktop extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<S.BannerHero className="bannerHero desktop">
				<ul>
					<Slider {...settings}>
							<li className="bannerHero__item">
								<a href="#hero1">
									<img src={bannerHeroDesktop} alt="Imagem Hero 01" />
								</a>
							</li>
							<li className="bannerHero__item">
								<a href="#hero2">
									<img src={bannerHeroDesktop2} alt="Imagem Hero 02" />
								</a>
							</li>
					</Slider>
				</ul>
			</S.BannerHero>
			
		);
	}
}
export class HeroMobile extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<section className="bannerHero mobile">
				<ul>
					<Slider {...settings}>
							<li className="bannerHero__item">
								<a href="#hero1">
									<img src={bannerHeroMobile} alt="Imagem Hero 01" />
								</a>
							</li>
							<li className="bannerHero__item">
								<a href="#hero2">
									<img src={bannerHeroMobile} alt="Imagem Hero 02" />
								</a>
							</li>
					</Slider>
				</ul>
			</section>
			
		);
	}
}

