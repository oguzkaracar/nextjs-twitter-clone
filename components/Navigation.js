import React from "react";

import NavigationButton from "./NavigationButton";
import TitleBold from "./TitleBold";
import { Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More } from "./icons";

import styles from "./navigation.module.css";

const icons = [Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More];

const Navigation = ({ selectedKey }) => {
	return (
		<nav className={styles.nav}>
			 <NavigationButton >
				<Twitter />
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'home'}>
				<Home />
				<TitleBold>Home</TitleBold>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'explore'}>
				<Explore />
				<TitleBold>Explore</TitleBold>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'notification'} notify={17}>
				<Notification />
				<TitleBold>Notifications</TitleBold>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'messages'}>
				<Messages />
				<TitleBold>Messages</TitleBold>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'bookmark'}>
				<Bookmark />
				<TitleBold>Bookmarks</TitleBold>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'lists'}>
				<Lists />
				<TitleBold>Lists</TitleBold>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'profile'}>
				<Profile />
				<TitleBold>Profile</TitleBold>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'more'}>
				<More />
				<TitleBold>More</TitleBold>
			</NavigationButton>
		</nav>
	);
};

export default Navigation;


// notify ekleme kısmında sorun yaşandı her navButton da notify çıkma durumuna Bakk!!!

// {icons.map((Icon) => {
				
// 	// otomatik olarak selectedKey isimlerini almak için..
// 	const names = String(Icon.name).toLowerCase().slice(3); // home, messages ..... gibi..

// 	return (
// 		<NavigationButton key={Icon.displayName} selected={selectedKey === names} >
// 			<Icon />
// 			{Icon.displayName !== "SvgTwitter" && <TitleBold> {Icon.displayName.slice(3)}</TitleBold>}
// 		</NavigationButton>
// 	);
// })}