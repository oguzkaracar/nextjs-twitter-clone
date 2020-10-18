import React from "react";
import cn from 'classnames';

import Navigation from "./Navigation";
import ThemeButton from './ThemeButton';
import ProfileBox from './ProfileBox';

import styles from './col-sidebar.module.css'


const Sidebar = ({ flat }) => {
	return (
		<div className={cn([styles.sidebar])}>
			<Navigation flat={flat}/>
			<ThemeButton big full>Tweet</ThemeButton>
			<ProfileBox />
		</div>
	);
};

export default Sidebar;
