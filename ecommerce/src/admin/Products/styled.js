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
		@media(max-width: 1100px) {
			width: 100%;
			.MuiFormControl-root {
				width: 90%;
			}
			.MuiButtonBase-root {
				width: 90%;
			}
		}
	}


`;