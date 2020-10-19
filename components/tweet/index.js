import React from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

// components...
import Photo from "../photo";

import styles from "./tweet.module.css";
import IconButton from "../button/icon";
import * as Icon from "../icons";

const Tweet = ({ name, slug, datetime, text }) => {
	return (
		<article className={styles.tweet}>
			{/* head - avatar */}
			<div className={styles.avatar}>
				<Photo />
			</div>

			{/* body */}
			<div className={styles.body}>
				<header className={styles.header}>
					<span className={styles.name}>{name}</span> <span>@{slug}</span> •{" "}
					<span>{formatDistanceToNowStrict(datetime)}</span>
				</header>

				<div className={styles.content}>
					{text}
					<h2>deenem</h2>
				</div>

				<footer className={styles.footer}>
					<div className={styles.footerButton}>
						{/* Reply Button */}
						<IconButton className={styles.actionButton}>
							<Icon.Reply />
						</IconButton>
						<span>3</span>
					</div>

					{/* Retweet Button */}
					<div className={styles.footerButton}>
						<IconButton className={styles.actionButton}>
							<Icon.Retweet />
						</IconButton>
					</div>

					{/* Like Button */}
					<div className={styles.footerButton}>
						<IconButton className={styles.actionButton}>
							<Icon.Like />
						</IconButton>
						<span>15</span>
					</div>

					{/* Share Button */}
					<div className={styles.footerButton}>
						<IconButton className={styles.actionButton}>
							<Icon.Share />
						</IconButton>
					</div>
				</footer>
			</div>
		</article>
	);
};

export default Tweet;
