import React from 'react';
import cn from 'classnames';

import styles from './photo.module.css';

import useSWR from 'swr';
import fetcher from '../../lib/fetch';

const Photo = ({
  alt,
  size = 47,
  header = false,
  profile = false,
  home_timeline = false,
  src,
  secondSrc,
}) => {
  const { data } = useSWR('/api/tweet', fetcher);
  return (
    <div
      className={cn([styles.photo], header && styles.header)}
      style={{ width: size, height: size }}>
      {header ? ( // profile banner fotoğrafı..
        <img
          className={cn(styles.img, header && styles.header)}
          src={secondSrc}
          alt={alt}
        />
      ) : (
        <img
          className={cn(styles.img)}
          src={
            home_timeline ? src : data && data[0].user.profile_image_url_https
          }
          alt={alt}
        />
      )}
      {profile && ( // profil sayfasındaki Photo' component propsları
        <img
          className={cn(styles.img, styles.profile)}
          src={data && data[0].user.profile_image_url_https}
          alt={alt}
          style={{ width: size, height: size }}
        />
      )}
    </div>
  );
};

export default Photo;
