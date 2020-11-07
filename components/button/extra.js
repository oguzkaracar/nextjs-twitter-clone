import React from 'react';
import cn from 'classnames';

import styles from './button.module.css';

import Button from './index';

function ExtraButton({ children, className, url }, ...props) {
  return (
    <Button href={url ? url : '#'} className={cn(styles.extraButton, className)} {...props}>
      {children}
    </Button>
  );
}

export default ExtraButton;
