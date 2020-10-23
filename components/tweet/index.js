import React from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

// TODO:: retweeted ve liked iconlarını al ve sayfada göster...

// components...
import Photo from "../photo";

import styles from "./tweet.module.css";
import IconButton from "../button/icon";
import * as Icon from "../icons";

const Tweet = ({ created_at, retweet_count, favorite_count, retweeted, favorited, text, user }) => {
	return (
		<article className={styles.tweet}>
			{/* head - avatar */}
			<div className={styles.avatar}>
				<Photo src={user.profile_image_url_https} />
			</div>

			{/* body */}
			<div className={styles.body}>
				<header className={styles.header}>
					<span className={styles.name}>{user.name}</span> <span>@{user.screen_name}</span> •{" "}
					<span>{formatDistanceToNowStrict(new Date(created_at))}</span>
				</header>

				<div className={styles.content}>{text}</div>

				<footer className={styles.footer}>
					<div className={styles.footerButton}>
						{/* Reply Button */}
						<IconButton className={styles.actionButton}>
							<Icon.Reply />
						</IconButton>
						<span></span>
					</div>

					{/* Retweet Button */}
					<div className={styles.footerButton}>
						<IconButton className={styles.actionButton}>
							{/* {retweeted ? <Icon.RetweetFill /> : <Icon.Retweet />} */}
							<Icon.Retweet/>
						</IconButton>
						{retweet_count && <span> {retweet_count}</span>}
					</div>

					{/* Like Button */}
					<div className={styles.footerButton}>
						<IconButton className={styles.actionButton}>
							{favorited ? <Icon.LikeFill /> : <Icon.Like />}
						</IconButton>
						{favorite_count && <span> {favorite_count} </span>}
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
