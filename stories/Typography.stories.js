import React from "react";

import TextTitle from "../components/text/TextTitle";



export default {
	title: "Typography",
};

export const Title = () => (
	<div>
		<TextTitle>Merhaba</TextTitle>
		<TextTitle bold={false}>Merhaba</TextTitle>
	</div>
);
