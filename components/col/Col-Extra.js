import React from "react";
import cn from "classnames";

import styles from "./col-extra.module.css";

const Extra = ({ children }) => {
	return (
		<div className={cn([styles.extra])}>
			{children}
			<div className={styles.content}>
				<div className={styles.trends}>
					<p>Tweet gönderme bilinçli olarak devre dışı bırakılmıştır...</p>
					<p> GS-FB</p>
					<p>Selamlar</p>
					<p>Dolar 8 TL</p>
					<p>Tasarım daha sonra yapılacak</p>
				</div>
			</div>
		</div>
	);
};

export default Extra;
