import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FONTS} from '../constants';
import commonStyles from '../screens/commonStyles';

const TextButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[commonStyles.submitButton, {...customContainerStyle}]}
      onPress={onPress}>
      <Text
        style={{
          ...FONTS.h2,
          ...customLabelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
