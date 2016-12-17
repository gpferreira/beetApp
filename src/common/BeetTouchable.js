/**
 * Created by gustavoferreira on 12/9/16.
 */

'use strict';

import React from 'react';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

function BeetTouchableIOS(props: Object): ReactElement {
  return (
    <TouchableHighlight
      accessibilityTraits="button"
      underlayColor="#3C5EAE"
      {...props}
    />
  );
}

const BeetTouchable = Platform.OS === 'android'
  ? TouchableNativeFeedback
  : BeetTouchableIOS;

export default BeetTouchable
