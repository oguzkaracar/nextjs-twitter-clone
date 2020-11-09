import React from 'react'

import style from './style.module.css'
import ExtraButton from '../button/extra'
import SmallText from '../text/TextSmall'
import TitleBody from '../text/TextBody'
import { LikeFill } from '../icons'
import IconButton from '../button/icon'
import Photo from '../photo'
import Stack from '../stack'

function NotificationItem({ tweet, name }) {
  return (
    <ExtraButton href="#" className={style.button}>
      <div className={style.notificationContainer}>
        <IconButton>
          <LikeFill />
        </IconButton>
        <div className={style.personContainer}>
          <Stack column gap={5}>
            <Photo size={36} src="https://pbs.twimg.com/profile_images/1318988169853927424/AuUMLPas_400x400.jpg" />
            <TitleBody>
              <TitleBody bold>{name}</TitleBody>liked your Tweet
            </TitleBody>
          </Stack>
          <SmallText>
            <span>{tweet}</span>
          </SmallText>
        </div>
      </div>
    </ExtraButton>
  )
}

export default NotificationItem