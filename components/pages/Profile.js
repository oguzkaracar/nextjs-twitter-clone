import React from "react";

import Header from "../header";
import TextTitle from "../text/TextTitle";
import IconButton from "../button/icon";
import { Back } from "../icons";

const ProfileMain = () => {
	return (
		<div>
			<Header back>
				<IconButton>
					<Back />
				</IconButton>

				<div>
					<TextTitle>Profile</TextTitle>
					<span>14 Tweets</span>
				</div>
			</Header>
			Profile Page @oguzhankaracar
		</div>
	);
};

export default ProfileMain;
