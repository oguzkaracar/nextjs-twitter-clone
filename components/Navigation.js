import React from "react";

import NavigationButton from "./NavigationButton";
import TextTitle from "./TextTitle";
import { Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More } from "./icons";

import styles from "./navigation.module.css";

const icons = [Twitter, Home, Explore, Notification, Messages, Bookmark, Lists, Profile, More];

const Navigation = ({ flat=false, selectedKey }) => {
	return (
		<nav className={styles.nav}>
			 <NavigationButton >
				<Twitter />
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'home'}>
				<Home />
				<TextTitle>Home</TextTitle>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'explore'}>
				<Explore />
				<TextTitle>Explore</TextTitle>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'notification'} notify={17}>
				<Notification />
				<TextTitle>Notifications</TextTitle>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'messages'}>
				<Messages />
				<TextTitle>Messages</TextTitle>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'bookmark'}>
				<Bookmark />
				<TextTitle>Bookmarks</TextTitle>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'lists'}>
				<Lists />
				<TextTitle>Lists</TextTitle>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'profile'}>
				<Profile />
				<TextTitle>Profile</TextTitle>
			</NavigationButton>

			<NavigationButton selected={selectedKey === 'more'}>
				<More />
				<TextTitle>More</TextTitle>
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