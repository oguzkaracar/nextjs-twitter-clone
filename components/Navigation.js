import React from "react";
import {useRouter} from 'next/router';
import cn from 'classnames';

import {MENU} from '../constants';

import NavigationButton from "./NavigationButton";
import TextTitle from "./TextTitle";

import styles from "./navigation.module.css";

const Navigation = ({ flat = false}) => {

	const router = useRouter(); // router sayesinde seçilen butona selected style vericez.. 

	const showTitle = !flat; // flat değeri false geldiğinde sadece resimler ve iconlar gösterilecek..

	return (
		<nav className={styles.nav}>
			{MENU.map((menu) => {

				// next router ile pathname ile menu objesindeki path eşleşirse stil(icon) değişimi olucak..
				const selected = router.pathname === menu.path;
				
				return (
					<NavigationButton 
					key={menu.key} 
					notify={menu.notify} 
					selected={selected}
					href={menu.path}
					className={cn([styles.navButton, menu.key])}
					>
						{selected ? menu.iconSelected : menu.icon}

						{showTitle && menu.title.length > 0 && <TextTitle>{menu.title}</TextTitle>}
					</NavigationButton>
				);
			})}
		</nav>
	);
};

export default Navigation;
