import React from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import cn from 'classnames';

// *** TODO:: retweeted ve liked iconlarını al ve sayfada göster...

// components...
import Photo from "../photo";

import styles from "./tweet.module.css";
import IconButton from "../button/icon";
import {Reply, Retweet, RetweetFill, Like, Share, LikeFill }  from "../icons";

const Tweet = ({ created_at, retweet_count, favorite_count, retweeted, favorited, text, user}) => {
	return (
		<article className={styles.tweet}>
			{/* head - avatar */}
			<div className={styles.avatar}>
				<Photo src={user.profile_image_url_https} home_timeline />
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
							<Reply />
						</IconButton>
						<span></span>
					</div>

					{/* Retweet Button */}
					<div className={styles.footerButton}>
						<IconButton className={cn(styles.actionButton, styles.retweet)}>
							{retweeted ? <RetweetFill /> : <Retweet />}
						</IconButton>
						{retweet_count && <span> {retweet_count}</span>}
					</div>

					{/* Like Button */}
					<div className={styles.footerButton}>
						<IconButton className={cn(styles.actionButton, styles.like)}>
						{favorited ? <LikeFill/> : <Like/>}
						</IconButton>
						{favorite_count && <span> {favorite_count} </span>}
					</div>

					{/* Share Button */}
					<div className={styles.footerButton}>
						<IconButton className={styles.actionButton}>
							<Share />
						</IconButton>
					</div>
				</footer>
			</div>
		</article>
	);
};

export default Tweet;
