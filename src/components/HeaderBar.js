import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, icons} from '../constants';
import commonStyles from '../screens/commonStyles';

const HeaderBar = ({
  title,
  leftOnPressed,
  left,
  right,
  containerStyle,
  rightOnPressed,
}) => {
  return (
    <View style={[commonStyles.flexRow, {...containerStyle}]}>
      {left && (
        <TouchableOpacity
          style={commonStyles.backIcon}
          onPress={leftOnPressed}>
          <Image
            source={icons.left_arrow}
            resizeMode="contain"
            style={commonStyles.leftImage}
          />
        </TouchableOpacity>
      )}
      <View
        style={commonStyles.flexCenter}>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.h2,
          }}>
          {title}
        </Text>
      </View>
      <TouchableOpacity onPress={rightOnPressed}>
        {right && (
          <Image
            source={icons.plus}
            resizeMode="contain"
            style={commonStyles.image50}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
