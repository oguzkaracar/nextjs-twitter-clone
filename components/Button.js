import React from "react";
import cn from 'classnames'; // bununla hem buttonun base className' i hem de props'dan gelen classname'ni merge edicez.

import styles from "./button.module.css";

const Button = ({ full=false, children, className, ...props }) => {
	return (
		<button type="button" className={cn(styles.button, full && styles.fullWidth, className)} {...props}>
			{children}
		</button>
	);
};

export default Button;
