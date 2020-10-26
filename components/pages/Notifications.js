import React from "react";

import IconButton from "../button/icon";
import Header from "../header";
import TextTitle from "../text/TextTitle";
import {Options} from '../icons'

const NotificationsMain = () => {
	return (
	<div>
		<Header>
			<TextTitle>Notifications</TextTitle>
			<IconButton>
				<Options/>
			</IconButton>
		</Header>
        <div>
			deneme-notifications
		</div>
    </div>
	);
};

export default NotificationsMain;
