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
  secondSrc,
}) => {
  const { data } = useSWR('/api/tweet', fetcher);

  return (
    <div
      className={cn([styles.photo], header && styles.header)}
      style={{ width: size, height: size }}>
      {header ? (
        <img
          className={cn(styles.img, header && styles.header)}
          src="https://pbs.twimg.com/profile_banners/860587802622398464/1604713321/600x200"
          alt={alt}
        />
      ) : (
        <img
          className={cn(styles.img, header && styles.header)}
          src={data?.statuses[0].user.profile_image_url_https}
          alt={alt}
        />
      )}
      {profile && (
        <img
          className={cn(styles.img, styles.profile)}
          src={data?.statuses[0].user.profile_image_url_https}
          alt={alt}
          style={{ width: size, height: size }}
        />
      )}
    </div>
  );
};

export default Photo;
