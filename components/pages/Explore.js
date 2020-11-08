import React from 'react';

import fetcher from '../../lib/fetch';
import ExplorerTitle from '../titles/explorer';
import ExtraContainer from '../extra-container';
import Trends from '../trends';
import Title from '../titles';
import * as Icons from '../icons';

const ExploreMain = () => {
  return (
    <div>
      <ExplorerTitle />
      <ExtraContainer title="Trends for you" explore>
        <Trends />
      </ExtraContainer>
      <Title
        subHeader
        bold
        page="What’s happening"
        icon={<Icons.ArrowBottom />}
      />

      <Trends explore />
    </div>
  );
};

export default ExploreMain;
