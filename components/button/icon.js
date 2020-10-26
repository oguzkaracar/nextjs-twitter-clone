import React from "react";
import cn from "classnames";

import styles from "./button.module.css";
import Button from ".";


const IconButton = ({ children, className, ...props }) => {

	return (
		<Button className={cn(styles.iconButton, className)} {...props}>
			{children}
		</Button>
	);
};

export default IconButton;
