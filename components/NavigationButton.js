import React from "react";
import cn from 'classnames';

import Button from "./Button";
import styles from "./navigation-button.module.css";

const NavigationButton = ({ href, notify, children, selected, className, ...props}) => {
	return (
		<Button className={cn([styles.navButton, selected && styles.navButtonSelected, className])}
			href={href}
			{...props} >
			
			{notify > 0 && <span className={styles.notify}> {notify} </span> }
			{children} 
		</Button>
	);
};

export default NavigationButton;
