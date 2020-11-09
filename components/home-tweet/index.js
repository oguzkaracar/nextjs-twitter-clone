import React, { useState } from "react";

import styles from "./style.module.css";

import Photo from "../photo";
import ThemeButton from "../theme-button";
import IconButton from "../button/icon";
import { Media, Gif, Question, Emoji, Date } from "../icons";

function HomeTweet() {
	const [tweet, tweetSet] = useState("");

	const onSubmit = async () => {
		try {
			const response = await fetch("/api/newTweet", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({  }), // burası sonra devam edicek.
			});
			if (response.status !== 200) throw "Tweet can not be send.";
			tweetSet("");
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className={styles.modal}>
			<div className={styles.avatar}>
				<Photo src="https://pbs.twimg.com/profile_images/1318988169853927424/AuUMLPas_400x400.jpg"/>
			</div>
			<div className={styles.body}>
				<textarea
					className={styles.textarea}
					name=""
					rows="2"
					placeholder="What's happening?"
					value={tweet}
					onChange={(e) => tweetSet(e.target.value)}></textarea>
				<div className={styles.footer}>
					<div className={styles.buttonContainer}>
						<IconButton>
							<Media />
						</IconButton>
						<IconButton>
							<Gif />
						</IconButton>

						<IconButton>
							<Question />
						</IconButton>

						<IconButton>
							<Emoji />
						</IconButton>

						<IconButton>
							<Date />
						</IconButton>
					</div>
					<ThemeButton className={styles.submitButton} onClick={onSubmit}>
						Tweet(geçici olarak devre dışı)
					</ThemeButton>
				</div>
			</div>
		</div>
	);
}

export default HomeTweet;
