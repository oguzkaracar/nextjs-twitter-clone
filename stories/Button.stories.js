import React from "react";

import Button from "../components/Button";
import NavigationButton from "../components/NavigationButton";
import Navigation from "../components/Navigation";
import TitleBold from "../components/TitleBold";
import { Home } from "../components/icons";

export default {
	title: "Buttons",
};

export const Primary = () => (
	<Button>
		Save
	</Button>
);

export const NavButton = ({ selectedKey }) => (
	<NavigationButton>
		<Home />
		<TitleBold>Home</TitleBold>
	</NavigationButton>
);

export const Nav = () => <Navigation selectedKey="home" />;
