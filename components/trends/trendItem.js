import React from 'react';

import style from './style.module.css';
import ExtraButton from '../button/extra';
import SmallText from '../text/TextSmall';
import TitleBody from '../text/TextBody';
import { ArrowBottom } from '../icons';
import IconButton from '../button/icon';

// butonlar arasında validateDOMNesting hatası veriyor.ona bak....

function TrendItem({ category, hashtag, number, url }) {
  return (
    <ExtraButton url={url} className={style.button}>
      <div className={style.textContainer}>
        <SmallText>
          <span>{category}</span>
          <span>·</span>
          <span>Trending</span>
        </SmallText>
        <TitleBody bold>{hashtag}</TitleBody>
        <SmallText>
          {number && (
            <span>
              {number > 10000
                ? `${(number / 1000).toFixed(1)}K Tweets`
                : 'Tweets'}{' '}
            </span>
          )}
        </SmallText>
      </div>
      <IconButton className={style.icon}>
        <ArrowBottom />
      </IconButton>
    </ExtraButton>
  );
}

export default TrendItem;
