import React from 'react'

import style from './style.module.css'
import Photo from '../photo'
import TitleBody from '../text/TextBody'
import SmallText from '../text/TextSmall'
import Button from '../button'
import ExtraButton from '../button/extra'

function FollowPerson({ name, slug }) {
  return (
    <ExtraButton href="#" className={style.button}>
      <div className={style.person}>
        <Photo />
        <div className={style.info}>
          <TitleBody className={style.name}>{name}</TitleBody>
          <SmallText>@{slug}</SmallText>
        </div>
      </div>
      <Button className={style.followButton}>Follow</Button>
    </ExtraButton>
  )
}

export default FollowPerson