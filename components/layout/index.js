import React from "react";
import cn from "classnames";

// constant variables...
import Const from "../../constants";

// hooks
import useWindowSize from "../../hooks/useWindowSize";

// components
import Sidebar from "../col/Col-Sidebar";
import Main from "../col/Col-Main";
import Extra from "../col/Col-Extra";

// styles
import styles from "./layout.module.css";

const Layout = ({ children, explore, messages, profile, index, notification, bookmarks, lists }) => {
	const { DESKTOP_SIZE, TABLET_SIZE } = Const;
	const size = useWindowSize();

	return (
		<div className={cn([styles.layout])}>
			<Sidebar flat={size.width < DESKTOP_SIZE} />
			<Main
				index={index}
				explore={explore}
				notification={notification}
				messages={messages}
				bookmarks={bookmarks}
				lists={lists}
				profile={profile}>
				{children}
			</Main>
			{size.width > TABLET_SIZE && <Extra explore={explore} messages={messages} profile={profile} >Trends and Search</Extra>}
		</div>
	);
};

export default Layout;
