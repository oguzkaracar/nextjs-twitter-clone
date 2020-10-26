import React from "react";
import cn from "classnames";

import styles from "./col-main.module.css";

import Header from "../header";
import IconButton from "../button/icon";
import TextTitle from "../text/TextTitle";
import * as Icons from "../icons/";

import HomeMain from "../pages/Home";
import ExploreMain from "../pages/Explore";
import NotificationsMain from "../pages/Notifications";
import MessageMain from "../pages/Message";
import BookmarksMain from "../pages/Bookmark";
import ListsMain from "../pages/Lists";
import ProfileMain from "../pages/Profile";

const Main = ({ children, index, profile, explore, notification, messages, bookmarks, lists }) => {
	return (
		<div className={cn([styles.main])}>
			{index && <HomeMain />}
			{explore && <ExploreMain />}
			{notification && <NotificationsMain />}
			{messages && <MessageMain />}
			{bookmarks && <BookmarksMain />}
			{lists && <ListsMain />}
			{profile && <ProfileMain />}
			{children}
		</div>
	);
};

export default Main;
