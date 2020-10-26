import React from "react";
import cn from "classnames";

import styles from "./photo.module.css";

import useSWR from 'swr'
import fetcher from '../../lib/fetch'

const Photo = ({
	src,
	alt,
	size = 47,
}) => {
	const { data } = useSWR('/api/tweet', fetcher)
	return (
		<div className={cn([styles.photo])} style={{ width: size, height: size }}>
			<img className={styles.img} src={data?.statuses[0].user.profile_image_url_https} alt={alt} />
		</div>
	);
};

export default Photo;
