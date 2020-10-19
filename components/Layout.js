import React from "react";
import cn from "classnames";

// constant variables...
import Const from "../constants/";

import useWindowSize from "../hooks/useWindowSize";

import styles from "./layout.module.css";
import Sidebar from "./Col-Sidebar";
import Main from "./Col-Main";
import Extra from "./Col-Extra";

const Layout = ({ children}) => {
	const { DESKTOP_SIZE, TABLET_SIZE } = Const;
	const size = useWindowSize();

	return (
		<div className={cn([styles.layout])}>
			<Sidebar flat={size.width < DESKTOP_SIZE}/>
			<Main> {children}</Main>
			{size.width > TABLET_SIZE && <Extra>extra</Extra>}
		</div>
	);
};

export default Layout;
