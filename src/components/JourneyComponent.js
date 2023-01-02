import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../constants';
import commonStyles from '../screens/commonStyles';

const JourneyComponent = ({
  key,
  from,
  to,
  journeyDuration,
  price,
  onPressHandle,
}) => {
  return (
    <TouchableOpacity
      key={key}
      onPress={onPressHandle}
      style={[commonStyles.entityView, commonStyles.shadow]}>
      <Text style={{...FONTS.h2, color: COLORS.blue}}>
        {from} - {to}
      </Text>
      <View style={commonStyles.entityDetails}>
        <Text style={{...FONTS.h3, color: COLORS.white}}>
          {journeyDuration}
        </Text>
        <Text style={{...FONTS.h4, color: COLORS.blue}}>£{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JourneyComponent;
