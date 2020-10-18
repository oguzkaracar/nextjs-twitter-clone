import React from "react";

import Button from "../components/Button";
import ThemeButton from "../components/ThemeButton";
import NavigationButton from "../components/NavigationButton";

import Stack from "../components/Stack";
import Navigation from "../components/Navigation";

import TextTitle from "../components/TextTitle";
import { Home } from "../components/icons";


export default {
	title: "Buttons",
};

export const Normal = () => <Button>Save</Button>;

export const Theme = () => (
	<Stack column>
		<ThemeButton>Save</ThemeButton>
		<ThemeButton full>Save Full</ThemeButton>
		<ThemeButton full big>Save Big</ThemeButton>
	</Stack>
)

export const NavButton = () => (
	<NavigationButton>
		<Home />
		<TextTitle>Home</TextTitle>
	</NavigationButton>
);

export const Nav = () => <Navigation selectedKey="home" />;
