import React from "react";

// constant variables...
import Const from "../constants/";

// components..
import Layout from "../components/Layout";
import Main from "../components/Col-Main";
import Sidebar from "../components/Col-Sidebar";
import Extra from "../components/Col-Extra";

// hooks
import useWindowSize from "../hooks/useWindowSize";

function HomePage() {
	const { DESKTOP_SIZE, TABLET_SIZE } = Const;
	const size = useWindowSize();

	return (
		<Layout>
			<Sidebar flat={size.width < DESKTOP_SIZE}/>
			<Main>{JSON.stringify(size)}</Main>
			{size.width > TABLET_SIZE && <Extra>extra</Extra>}
		</Layout>
	);
}

export default HomePage;
