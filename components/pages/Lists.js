import React from 'react';

// components.
import Header from '../header';
import Title from '../titles'
import Stack from '../stack'
import TitleBold from '../text/TextTitle'
import SmallText from '../text/TextSmall'
import ThemeButton from '../theme-button'
import IconButton from '../button/icon';
import { AddLists, Back, Dots } from '../icons';

const ListsMain = () => {
  return (
    <div>
      <Header lists>
        <div>
          <IconButton>
            <Back />
          </IconButton>
          <div>
            <TitleBold>Lists</TitleBold>
            <span>@oguzhankaracar</span>
          </div>
        </div>
        <div>
          <IconButton>
            <AddLists />
          </IconButton>
          <IconButton>
            <Dots />
          </IconButton>
        </div>
      </Header>
      <Title page="Pinned" />
      <Stack gap={10} column center border>
        <SmallText>
          Nothing to see here yet — pin up to five of your favorite Lists to
          access them quickly.
        </SmallText>
      </Stack>
      <Title page="Your Lists" />
      <Stack gap={13} column center>
        <TitleBold bold>You haven’t created any Lists yet</TitleBold>
        <SmallText>When you do, it’ll show up here.</SmallText>
        <ThemeButton>Create a List</ThemeButton>
      </Stack>
    </div>
  );
};

export default ListsMain;
