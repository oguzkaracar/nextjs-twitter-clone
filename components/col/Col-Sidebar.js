import React, { useContext, useState } from "react";
import cn from "classnames";

import StoreContext from "../../store";

import Navigation from "../navigation/";
import ThemeButton from "../theme-button";
import ProfileBox from "../profile/";
import TweetModal from "../tweet-modal";
import { Tweet } from "../icons";

import styles from "./col-sidebar.module.css";

const Sidebar = ({ flat }) => {

	const {showModal, setShowModal} = useContext(StoreContext);

	return (
		<div className={cn([styles.sidebar])}>
			<Navigation flat={flat} />

			<div className={styles.tweet}>
				<ThemeButton big full={!flat} onClick={() => setShowModal(true)}>
					{flat ? <Tweet /> : "Tweet"}
				</ThemeButton>
			</div>

			{/* tweet popup */}
			{showModal && <TweetModal />}

			<div className={styles.profile}>
				<ProfileBox flat={flat} />
			</div>
		</div>
	);
};

export default Sidebar;
