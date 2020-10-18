import React from 'react'
import cn from 'classnames';

import styles from './profile-box.module.css';

import Photo from './Photo';
import Button from './Button';
import {ArrowBottom} from './icons/';
import TextBody from './TextBody';



const ProfileBox = ({slug='ozzykara', name="Oğuzhan"}) => {
    return (
        <Button className={styles.box}>
            <Photo/>
            <div className={styles.body}>
                <TextBody bold> {name} </TextBody>
                <TextBody className={styles.slug}> @{slug} </TextBody>
            </div>
            <ArrowBottom className={styles.icon}/>
        </Button>
    )
}

export default ProfileBox
