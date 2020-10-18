import React from "react";
import cn from "classnames";

import styles from "./text-title.module.css";

const TextBody = ({ bold = false, className, children, ...props }) => {
	return (
		<p className={cn([bold && styles.bold, className])} {...props}>
			{" "}
			{children}{" "}
		</p>
	);
};

export default TextBody;
