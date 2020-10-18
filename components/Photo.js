import React from 'react'
import cn from 'classnames';

import styles from './photo.module.css';

const Photo = ({src="https://pbs.twimg.com/profile_images/880568765670412288/oOHoZ4ME_400x400.jpg", alt}) => {
    return (
        <div className={cn([styles.photo])}>
            <img className={styles.img} src={src} alt={alt}/>
        </div>
    )
}

export default Photo;
