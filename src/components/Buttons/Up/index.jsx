import { useState, useEffect } from 'react';
import Icon from './Icon';
import classNames from 'classnames';

import When from '../../When';
import useIsScrolled from '../../../hooks/useIsScrolled';

const Up = () => {
  const isScrolled = useIsScrolled();

  return (
    <When>
      <When.If isTrue={isScrolled}>
        <a
          className={classNames(
            'fixed bottom-8 right-16 h-14 w-14',
            'sm:inline hidden btn-up z-50'
          )}
          href='#hero'
        >
          <Icon />
        </a>
      </When.If>
    </When>
  );
};

export default Up;
