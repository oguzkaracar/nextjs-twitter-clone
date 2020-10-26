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
					<span>11 Tweets</span>
				</div>
			</Header>
			profile-page-babaaaa
		</div>
	);
};

export default ProfileMain;
