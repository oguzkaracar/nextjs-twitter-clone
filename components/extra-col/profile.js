import React from 'react'

import SearchBox from '../search-box'
import ExtraContainer from '../extra-container'
import TrendItem from '../trends'
import FollowPerson from '../follow-person'
import Trends from '../trends'

function ProfileExtra() {
  return (
    <div>
      <SearchBox />
      <ExtraContainer title="You might like">
        <FollowPerson name="Oğuzhan" slug="oguzhankaracar" />
        <FollowPerson name="Oğuzhan" slug="oguzhankaracar" />
        <FollowPerson name="Oğuzhan" slug="oguzhankaracar" />
      </ExtraContainer>
      <ExtraContainer title="Trends for you" options>
       <Trends/>
      </ExtraContainer>
    </div>
  )
}

export default ProfileExtra