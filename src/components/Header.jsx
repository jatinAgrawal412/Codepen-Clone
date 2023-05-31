import { AppBar, Toolbar, styled } from "@mui/material";
import React from "react";
import logo from "../aj logo.jpg";

const Container = styled(AppBar)`
	background: #060606;
	position: static;
	border-bottom: 1px solid #2f2f2f;
	height: 9vh;
`;

const Header = () => {
	return (
		<div>
			<Container>
				<Toolbar>
					<img src={logo} alt="logo" style={{ width: 90 }} />
				</Toolbar>
			</Container>
		</div>
	);
};

export default Header;
