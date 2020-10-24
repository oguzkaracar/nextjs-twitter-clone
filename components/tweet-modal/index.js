import React, { useContext, useState, useEffect, useRef } from "react";

import StoreContext from "../../store";

// components
import Photo from "../photo";
import ThemeButton from "../theme-button";
import IconButton from "../button/icon";
import { Calendar, Close, Emoji, Gif, Media, Question } from "../icons";

// styles
import styles from "./style.module.css";
import Stack from "../stack";

const TweetModal = () => {
	// modal kapatma işlemi.. close butonu ve modal dışına tıklayınca çalışcak...
	const { setShowModal } = useContext(StoreContext);

	// component based state, tweet textleri burada tutulacak..
	const [tweet, setTweet] = useState("");

	let ref = useRef(); // modal'a auto-focus yapıcağımız için ref kullandık. ESC tuşu ile kapatmak için...

	useEffect(() => {
		ref.current.focus();
		// render edildiğinde modal divi otomatik olarak focus olucak ve keydown eventi çalıştığında modal kapanacak....
	}, []);

	// tweet gönderme...
	const onSubmit = async () => {
		if (tweet) {
			try {
				const res = await fetch("/api/newTweet", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ tweet }),
				});

				if (res.status !== 200) throw "Tweet gönderilemedi";
				setTweet("");
				setShowModal(false);

			} catch (error) {
				console.log(error);
			}
			
		} else {
			// return false;
			console.log("Boş Tweet gönderme!!!");
		}
	};

	// esc ile modal kapatma...
	const handlePress = (e) => {
		if (e.keyCode === 27) {
			setShowModal(false);
		}
	};

	return (
		<div
			className={styles.overlay}
			onClick={(e) => String(e.target.className).includes("overlay") && setShowModal(false)}>
			<div className={styles.modal} tabIndex={0} onKeyDown={handlePress}>
				<div className={styles.header}>
					<IconButton onClick={() => setShowModal(false)}>
						<Close />
					</IconButton>
				</div>
				<div className={styles.avatar}>
					<Photo />
				</div>
				<div className={styles.body}>
					<div className={styles.content}>
						<textarea
							className={styles.textarea}
							name=""
							rows="6"
							placeholder="What's happening"
							ref={ref}
							value={tweet}
							onChange={(e) => setTweet(e.target.value)}></textarea>
					</div>
				</div>
				<Stack className={styles.footer} gap={10}>
					<div className={styles.icons}>
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
							<Calendar />
						</IconButton>
					</div>
					<ThemeButton className={styles.tweetBtn} onClick={onSubmit}>
						Tweet
					</ThemeButton>
				</Stack>
			</div>
		</div>
	);
};

export default TweetModal;
