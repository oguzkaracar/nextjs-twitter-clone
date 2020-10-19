import React from "react";
import { boolean } from "@storybook/addon-knobs";

import Button from "../components/button/";
import ThemeButton from "../components/theme-button";
import NavigationButton from "../components/navigation/NavButton";

import Stack from "../components/stack/";
import Navigation from "../components/navigation/";

import TextTitle from "../components/text/TextTitle";
import { Home } from "../components/icons";

export default {
	title: "Buttons",
};

export const Normal = () => <Button>Save</Button>;

export const Theme = () => (
	<Stack column>
		<ThemeButton>Save</ThemeButton>
		<ThemeButton full>Save Full</ThemeButton>
		<ThemeButton full big>
			Save Big
		</ThemeButton>
	</Stack>
);

export const NavButton = () => (
	<NavigationButton>
		<Home />
		<TextTitle>Home</TextTitle>
	</NavigationButton>
);

export const Nav = () => {
	const flat = boolean('Flat', false);
	return <Navigation flat={flat} selectedKey="home" />;
};
