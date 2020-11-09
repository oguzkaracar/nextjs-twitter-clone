import React from "react";
import cn from "classnames";

import styles from "./profile-box.module.css";

import Photo from "../photo/";
import Button from "../button/";
import { ArrowBottom } from "../icons/";
import TextBody from "../text/TextBody";

const ProfileBox = ({ flat = false, slug = "oguzhankaracar", name = "Oğuzhan" }) => {
	return (
		<Button className={cn([styles.box])}>
			<Photo size={39} src="https://pbs.twimg.com/profile_images/1318988169853927424/AuUMLPas_400x400.jpg"/>
			{ !flat && 
				<>
					<div className={styles.body}>
						<TextBody bold> {name} </TextBody>
						<TextBody className={styles.slug}> @{slug} </TextBody>
					</div>
					<ArrowBottom className={styles.icon} />
				</>
			}
		</Button>
	);
};

export default ProfileBox;
