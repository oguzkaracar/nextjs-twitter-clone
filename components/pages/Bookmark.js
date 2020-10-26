import React from "react";

import Header from "../header";
import TextTitle from "../text/TextTitle";

const BookmarkMain = () => {
	return (
		<div>
			<Header slug>
				<div>
					<TextTitle>Bookmarks</TextTitle>
					<span>@oguzhankaracar</span>
				</div>
			</Header>
			<div style={{ padding: 30, display: "flex", flexDirection: "column", alignItems: "center" }}>
				<h3>You haven’t added any Tweets to your Bookmarks yet</h3>
				<p>When you do, they’ll show up here.</p>
			</div>
		</div>
	);
};

export default BookmarkMain;
