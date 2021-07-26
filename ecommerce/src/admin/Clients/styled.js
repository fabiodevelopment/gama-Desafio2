import styled from "styled-components";

export const DashMain = styled.div`
	main {
		display: flex;
		height: 100%;
		align-items: stretch;
		background-color: rgb(224, 224, 224);
		@media(max-width: 1100px) {
			flex-direction: column;
		}
	}
	.dash--Sidebar {
		/* height: calc(100vh - 70px); */
		height: 100%;
		align-items: stretch;
		padding: 0;
		nav {
			max-width: 100%;
		}
		.navLink {
			color: black;
			text-decoration: none;
		}
		@media(max-width: 1100px) {
			width: 100%;
		}
	}
	.dash--Content {
		margin: 0;
		padding: 0 20px;
		min-height: calc(100vh - 70px); 
		h1 {
			border-bottom: 1px solid #ccc;
			padding-bottom: 15px;
			display: flex;
			justify-content: space-between;
		}
		.error {
			color: #fff;
			font-weight: 500;
			background-color: #f44336;
			border-radius: 4px;
			margin: 0 auto 15px;
			padding: 12px 8px;
			border: 0;
		}
		.success {
			color: #fff;
			font-weight: 500;
			background-color: #4caf50;
			border-radius: 4px;
			margin: 0 auto 15px;
			padding: 12px 8px;
			border: 0;
		}
		@media(max-width: 1100px) {
			width: 100%;
			.MuiFormControl-root {
				width: 90%;
			}
			.MuiButtonBase-root {
				width: 90%;
			}
			.success,
			.error {
				width: 90%;
			}
		}
	}

`;