import React from 'react';
import useSWR from 'swr';
import format from 'date-fns/format';

import style from './style.module.css';

import Photo from '../photo';
import Button from '../button';
import TitleBold from '../text/TextTitle';
import fetcher from '../../lib/fetch';
import Tweet from '../tweet';
import TextBody from '../text/TextBody';
import Stack from '../stack';
import SmallText from '../text/TextSmall';
import * as Icon from '../icons';
import ExtraButton from '../button/extra';

function ProfileContainer() {
  const { data } = useSWR('/api/tweet', fetcher);

  const userData = data?.[0].user;

  return (
    <section>
      {data && (
        <>
          <div className={style.photo}>
            <Photo profile header secondSrc={userData.profile_banner_url} size={140} />
          </div>
          <div className={style.button}>
            <Button>Edit profile</Button>
          </div>
          <div className={style.infoContainer}>
            <Stack column gap={0}>
              <TitleBold bold>{userData.name}</TitleBold>
              <SmallText>@{userData.screen_name}</SmallText>
              <Stack row gap={8} className={style.profileInfo}>
                {/* <div>Ankara</div>
                <div>
                  <a href="https://oguzhankaracar.com">oguzhankaracar.com</a>
                </div> */}

                <Icon.Calendar />
                <div>
                  <SmallText>
                    Joined {format(new Date(userData.created_at), 'MMMM yyyy')}
                  </SmallText>
                </div>
              </Stack>
              <Stack row small>
                <Stack row small gap={3}>
                  <TextBody bold>{userData.friends_count}</TextBody>
                  <SmallText>Following</SmallText>
                </Stack>
                <Stack row gap={3} small>
                  <TextBody bold>{userData.followers_count}</TextBody>
                  <SmallText>Followers</SmallText>
                </Stack>
              </Stack>
            </Stack>

            {/* Tabs */}

            <div className={style.buttonContainer}>
              <ExtraButton>
                <span>Tweets</span>
              </ExtraButton>
              <ExtraButton>
                <span>Tweets & Replies</span>
              </ExtraButton>
              <ExtraButton>
                <span>Media</span>
              </ExtraButton>
              <ExtraButton>
                <span>Likes</span>
              </ExtraButton>
            </div>
          </div>

          {/* Tweets from my account. */}

          {data?.map(tweet => {
            return <Tweet key={tweet.id} {...tweet} />;
          })}
        </>
      )}
    </section>
  );
}

export default ProfileContainer;
