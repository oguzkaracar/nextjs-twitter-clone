import React from "react";
import cn from 'classnames';

import Button from "./Button";
import styles from "./theme-button.module.css";

const ThemeButton = ({ className, children, big=false, ...props}) => {
	return (
		<Button className={cn(styles.button, big && styles.bigButton, className)} {...props} >
			{children} 
		</Button>
	);
};

export default ThemeButton;
