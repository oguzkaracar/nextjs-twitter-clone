import React from "react";
import cn from "classnames";

import styles from "./style.module.css";

const Header = ({ children, className, subHeader, back, slug, lists }) => {
	return (
		<div
			className={cn(
				styles.header,
				subHeader && styles.subHeader,
				slug && styles.slug,
				back && styles.back,
				lists && styles.lists,
				className
			)}>
			{children}
		</div>
	);
};

export default Header;
