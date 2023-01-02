import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import commonStyles from '../commonStyles';
import {DetailsComponent, HeaderBar} from '../../components';

const JourneyDetails = ({navigation, route}) => {
  const [details] = useState(route.params?.list);
  return (
    <SafeAreaView style={commonStyles.container}>
      <HeaderBar
        title="Journey details"
        left
        leftOnPressed={() => navigation.goBack()}
      />
        <DetailsComponent details={details} />
    </SafeAreaView>
  );
};

export default JourneyDetails;
