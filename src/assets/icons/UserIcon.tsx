import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const UserIcon = () => {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#ffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M8 7a4 4 0 108 0 4 4 0 00-8 0M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    </Svg>
  );
};
