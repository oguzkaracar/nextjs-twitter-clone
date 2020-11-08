import React from "react";
import cn from "classnames"; // bununla hem buttonun base className' i hem de props'dan gelen classname'ni merge edicez.
import Link from "next/link";

import styles from "./button.module.css";

const LinkButton = ({ href, children, ...props }) => {
	return (
		<Link href={href}>
			<a {...props}>{children}</a>
		</Link>
	);
};

const BaseButton = ({children, ...props }) => {
	return (
		<button type="button" {...props}>
			{children}
		</button>
	);
};

const Button = ({ full = false, children, className, ...props }) => {

	// gelen proplarda href var ise Link button olarak döndür... değilse normal button olarak döndür.
	const Component = props.href ? LinkButton : BaseButton;

	return (
		<Component className={cn(styles.button, full && styles.fullWidth, className)} {...props}>
			{children}
		</Component>
	);
};

export default Button;
