import React from "react";
import cn from "classnames";

import styles from "./col-extra.module.css";

const Extra = ({ children }) => {
	return (
		<div className={cn([styles.extra])}>
			{children}
			<div className={styles.content}>
				<div className={styles.trends}>
					<p>Deneme</p>
					<p> GS-FB</p>
					<p>Selamlar</p>
				</div>
			</div>
		</div>
	);
};

export default Extra;
