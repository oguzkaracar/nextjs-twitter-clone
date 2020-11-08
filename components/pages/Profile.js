import React from 'react';

import Header from '../header';
import TextTitle from '../text/TextTitle';
import IconButton from '../button/icon';
import { Back } from '../icons';
import ProfileContainer from '../profile-container';

const ProfileMain = () => {
  return (
    <div>
      <Header back>
        <IconButton>
          <Back />
        </IconButton>
        <div>
          <TextTitle>Profile</TextTitle>
          <span>14 Tweets</span>
        </div>
      </Header>
	  {/* location ve websitesi bağlantısı propsları da eklenecek!!! */}
      <ProfileContainer
        name="Oğuzhan"
        slug="oguzhankaracar"
        created="May 2017"
        following="50"
        followers="10"
      />
    </div>
  );
};

export default ProfileMain;
