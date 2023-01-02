import React from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import {FONTS} from '../../constants';
import commonStyles from '../commonStyles';
import {useSelector} from 'react-redux';
import {HeaderBar, JourneyComponent} from '../../components';

const Journeys = ({navigation}) => {
  const journeysList = useSelector(state => state.journey?.list);

  const onPressJourney = item => {
    navigation.navigate('JourneyDetails', {list: item});
  };
  const renderListItem = ({item}, i) => {
    const {From, To, Price, Journey_Duration} = item;
    return (
      <JourneyComponent
        key={i}
        from={From}
        to={To}
        journeyDuration={Journey_Duration}
        price={Price}
        onPressHandle={() => onPressJourney(item)}
      />
    );
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <HeaderBar
        title="Journeys List"
        right
        rightOnPressed={() => navigation.navigate('AddJourney')}
      />
      <FlatList
        style={commonStyles.marginV15}
        data={journeysList}
        showsVerticalScrollIndicator={false}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
          <View style={commonStyles.flexCenter}>
            <Text style={{...FONTS.h3}}>No Data Found</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Journeys;
