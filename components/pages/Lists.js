import React from "react";

// components.
import Header from "../header";
import TextTitle from "../text/TextTitle";
import IconButton from "../button/icon";
import { AddLists, Back, Dots } from "../icons";

const ListsMain = () => {
	return (
		<div>
			<Header lists>
				<div>
					<IconButton>
						<Back />
					</IconButton>
					<div>
						<TextTitle>Lists</TextTitle>
						<span>@oguzhankaracar</span>
					</div>
				</div>
				<div>
					<IconButton>
						<AddLists />
					</IconButton>
					<IconButton>
						<Dots />
					</IconButton>
				</div>
			</Header>
			<h2>Selamlar</h2>
		</div>
	);
};

export default ListsMain;
