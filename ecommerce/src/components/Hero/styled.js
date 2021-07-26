import styled from "styled-components";

export const BannerHero = styled.section`

	.slick-slider {
		overflow: hidden;
		img {
			width: 100%;
		}
		@include breakpoint('mobile') {
			img {
				width: 100%;
			}
		}
		.bannerHero__item {
			position: relative;
		}
		.bannerHero__slug {
			position: absolute;
			top: 20%;
			right: 5%;
			text-align: right;
			color: white;
			
			@include breakpoint('mobile') {
				top: 10%;
				left: 10%;
			}

			h2 {
				font-size: 23px;
				@include breakpoint('mobile') {
					font-size: 18px;
				}
			}

			h3 {
				font-weight: 900;
				font-size: 35px;
				@include breakpoint('mobile') {
					font-size: 22px;
				}
			}
		}

	}
	.slick-dots {
		bottom: 20px;
		li{
			button:before {
				font-size: 12px;
				color: white;
				opacity: 1;
			}
			&.slick-active {
				button:before {
					color: #3f51b5;
				}
			}
		} 
	}
	ul {
		margin: 0;
		padding: 0;
	}
	&.mobile {
		display: none;
		@include breakpoint('mobile') {
			display: block;
		}
	}
	&.desktop {
		@include breakpoint('mobile') {
			display: none;
		}
	}
`;