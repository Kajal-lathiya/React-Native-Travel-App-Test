import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import styles from './AddJourneyStyles';
import commonStyles from '../commonStyles';
import {COLORS, FONTS} from '../../constants';
import {HeaderBar, TextButton} from '../../components';
import SelectDropdown from 'react-native-select-dropdown';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

import {useDispatch} from 'react-redux';
import {AddJourneyAction} from '../../redux/actions';

const AddJourney = ({navigation}) => {
  const dispatch = useDispatch();

  const [fromPlace, setFromPlace] = useState('');
  const [toplace, setToPlace] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const FromCities = [
    'London',
    'Birmingham',
    'Glasgow',
    'Liverpool',
    'Bristol',
    'Manchester',
    'Sheffield',
    'Leeds',
    'Edinburgh',
    'Leicester',
  ];

  const onClickSubmit = async () => {
    if (fromPlace === '') {
      alert('Please enter From place');
    } else if (toplace === '') {
      alert('Please enter To place');
    } else if (price === '') {
      alert('Please enter Price');
    } else if (duration === '') {
      alert('Please enter Journey Duration');
    } else if (firstName === '') {
      alert('Please enter First name');
    } else if (lastName === '') {
      alert('Please enter Last name');
    } else if (age === '') {
      alert('Please enter Age');
    } else if (fromPlace === toplace) {
      alert('Please select diffetent place');
    } else if (
      fromPlace !== '' &&
      toplace !== '' &&
      price !== '' &&
      duration !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      age !== ''
    ) {
      const data = {
        From: fromPlace,
        To: toplace,
        Price: price,
        Journey_Duration: duration,
        Driver: {Firstname: firstName, Lastname: lastName, Age: age},
      };
      handleAction(data);
    }
  };

  const handleAction = data => {
    dispatch(AddJourneyAction(data));
    setFromPlace('');
    setToPlace('');
    setPrice('');
    setAge('');
    setDuration('');
    setFirstName('');
    setLastName('');
    navigation.goBack();
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <HeaderBar
        left
        leftOnPressed={() => navigation.goBack()}
        title={'Add Journey'}
      />
      <KeyboardAwareScrollView>
        <View style={[commonStyles.flexRow, commonStyles.marginT20]}>
          <View style={commonStyles.labelView}>
            <Text style={{...FONTS.h3, color: COLORS.gray}}>From</Text>
            <SelectDropdown
              data={FromCities}
              onSelect={(selectedItem, index) => {
                setFromPlace(selectedItem);
              }}
              defaultButtonText={'From'}
              defaultValue={fromPlace}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
          <View style={[commonStyles.labelView, commonStyles.marginL10]}>
            <Text style={{...FONTS.h3, color: COLORS.gray}}>To</Text>
            <SelectDropdown
              data={FromCities}
              onSelect={(selectedItem, index) => {
                setToPlace(selectedItem);
              }}
              defaultButtonText={'To'}
              defaultValue={toplace}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
        </View>
        <View style={[commonStyles.flexRow]}>
          <View style={commonStyles.labelView}>
            <Text style={{...FONTS.h3, color: COLORS.gray}}>Price</Text>
            <TextInput
              style={[commonStyles.input, {...FONTS.body3}]}
              placeholder="Price"
              autoCapitalize="none"
              keyboardType={'numeric'}
              placeholderTextColor={COLORS.gray}
              underlineColorAndroid="transparent"
              value={price}
              onChangeText={val => setPrice(val)}
            />
          </View>
          <View style={[commonStyles.labelView, commonStyles.marginL10]}>
            <Text style={{...FONTS.h3, color: COLORS.gray}}>
              Journey Duration
            </Text>
            <TextInput
              style={[commonStyles.input, {...FONTS.body3}]}
              placeholder="Journey Duration"
              autoCapitalize="none"
              placeholderTextColor={COLORS.gray}
              underlineColorAndroid="transparent"
              value={duration}
              onChangeText={val => setDuration(val)}
            />
          </View>
        </View>
        <Text
          style={[commonStyles.marginV15, {...FONTS.h2, color: COLORS.gray}]}>
          Driver Details
        </Text>
        <View style={[commonStyles.flexRow]}>
          <View style={commonStyles.labelView}>
            <Text style={{...FONTS.h3, color: COLORS.gray}}>Frist Name</Text>
            <TextInput
              style={[commonStyles.input, {...FONTS.body3}]}
              placeholder="Frist Name"
              autoCapitalize="none"
              placeholderTextColor={COLORS.gray}
              underlineColorAndroid="transparent"
              value={firstName}
              onChangeText={val => setFirstName(val)}
            />
          </View>
          <View style={[commonStyles.labelView, commonStyles.marginL10]}>
            <Text style={{...FONTS.h3, color: COLORS.gray}}>Last Name</Text>
            <TextInput
              style={[commonStyles.input, {...FONTS.body3}]}
              placeholder="Last Name"
              autoCapitalize="none"
              placeholderTextColor={COLORS.gray}
              underlineColorAndroid="transparent"
              value={lastName}
              onChangeText={val => setLastName(val)}
            />
          </View>
        </View>
        <View style={commonStyles.labelView}>
          <Text style={{...FONTS.h3, color: COLORS.gray}}>Age</Text>
          <TextInput
            style={[commonStyles.input, {...FONTS.body3}]}
            placeholder="Age"
            autoCapitalize="none"
            placeholderTextColor={COLORS.gray}
            underlineColorAndroid="transparent"
            value={age}
            onChangeText={val => setAge(val)}
          />
        </View>
      </KeyboardAwareScrollView>
      <TextButton
        label={'Add Journey'}
        customLabelStyle={{color: COLORS.blue}}
        customContainerStyle={styles.submitButton}
        onPress={onClickSubmit}
      />
    </SafeAreaView>
  );
};

export default AddJourney;
