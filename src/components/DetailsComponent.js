import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS} from '../constants';
import commonStyles from '../screens/commonStyles';

const DetailsComponent = ({details}) => {
  return (
    <View style={[commonStyles.detailView, commonStyles.shadow]}>
      <View style={commonStyles.entityDetails}>
        <Text style={{...FONTS.h2, color: COLORS.blue}}>
          {details.From} - {details?.To}
        </Text>
        <Text style={{...FONTS.h3, color: COLORS.blue}}>
          {details?.Journey_Duration} £{details?.Price}
        </Text>
      </View>
      <View style={commonStyles.entityDetails}>
        <Text style={{...FONTS.h3, color: COLORS.gray}}>
          Driver: {details?.Driver?.Firstname} {details?.Driver?.Lastname}
        </Text>
        <Text style={{...FONTS.h3, color: COLORS.gray}}>
          Age: {details?.Driver?.Age} years
        </Text>
      </View>
    </View>
  );
};

export default DetailsComponent;
