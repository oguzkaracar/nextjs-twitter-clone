import React from 'react';
import useSWR from 'swr';

import Header from '../header';
import TextTitle from '../text/TextTitle';
import IconButton from '../button/icon';
import { Back } from '../icons';
import ProfileContainer from '../profile-container';

import fetcher from '../../lib/fetch';

const ProfileMain = () => {
  const { data } = useSWR('api/tweet', fetcher);

  return (
    <div>
      {data && (
        <>
          <Header back>
            <IconButton>
              <Back />
            </IconButton>
            <div>
              <TextTitle>{data[0].user.name}</TextTitle>
              <span>{data[0].user.statuses_count} Tweets</span>
            </div>
          </Header>
          <ProfileContainer />
        </>
      )}
    </div>
  );
};

export default ProfileMain;
