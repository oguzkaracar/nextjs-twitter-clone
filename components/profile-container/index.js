import React from 'react'
import useSWR from 'swr'

import style from './style.module.css'

import Photo from '../photo'
import Button from '../button'
import TitleBold from '../text/TextTitle'
import fetcher from '../../lib/fetch'
import Tweet from '../tweet'
import TextBody from '../text/TextBody'
import Stack from '../stack'
import SmallText from '../text/TextSmall'
import * as Icon from '../icons'
import ExtraButton from '../button/extra'

function ProfileContainer({ name, slug, created, following, followers }) {
  const { data } = useSWR('/api/tweet', fetcher);

  return (
    <section>
      <div className={style.photo}>
        <Photo
          profile
          header
          secondSrc={
            'https://pbs.twimg.com/profile_banners/860587802622398464/1604713321/600x200'
          }
        />
      </div>
      <div className={style.button}>
        <Button>Edit profile</Button>
      </div>
      <div className={style.infoContainer}>
        <Stack column gap={0}>
          <TitleBold bold>{name}</TitleBold>
          <SmallText>@{slug}</SmallText>
          <Stack row small gap={8}>
            <Icon.Calendar />
            <SmallText>Joined {created} </SmallText>
          </Stack>
          <Stack row small>
            <Stack row small gap={3}>
              <TextBody bold>{following}</TextBody>
              <SmallText>Following</SmallText>
            </Stack>
            <Stack row gap={3} small>
              <TextBody bold>{followers}</TextBody>
              <SmallText>Followers</SmallText>
            </Stack>
          </Stack>
        </Stack>
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
      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />
      })}
    </section>
  )
}

export default ProfileContainer