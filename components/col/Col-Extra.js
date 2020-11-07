import cn from 'classnames';

import ProfileExtra from '../extra-col/profile';
import MessagesExtra from '../extra-col/messages';
import MainExtra from '../extra-col/main';
import ExploreExtra from '../extra-col/explore';

import styles from './col-extra.module.css';

function Extra({ explore, messages, profile }) {
  return (
    <div className={cn(styles.extra, messages && styles.messages)}>
      {!messages && !explore && !profile && <MainExtra />}
      {explore && <ExploreExtra />}
      {messages && <MessagesExtra />}
      {profile && <ProfileExtra />}
    </div>
  );
}

export default Extra;
