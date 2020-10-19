import React from "react";
import cn from "classnames";

import Navigation from "./Navigation";
import ThemeButton from "./ThemeButton";
import ProfileBox from "./ProfileBox";

import styles from "./col-sidebar.module.css";

const Sidebar = ({ flat }) => {
	return (
		<div className={cn([styles.sidebar])}>
			<Navigation flat={flat}/>

			<div className={styles.tweet}>
				<ThemeButton big full={!flat}>
					{flat ? "a" : "Tweet"}
				</ThemeButton>
			</div>

			<div className={styles.profile}>
				<ProfileBox flat={flat} />
			</div>
		</div>
	);
};

export default Sidebar;
