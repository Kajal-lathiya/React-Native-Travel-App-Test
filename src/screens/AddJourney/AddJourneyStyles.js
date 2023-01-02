import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  submitButton: {
    marginBottom: 20,
  },
  dropdown1BtnStyle: {
    marginTop: 5,
    width: '100%',
    borderRadius: 8,
    height: 45,
    color: COLORS.black,
  },
  dropdown1BtnTxtStyle: {color: COLORS.black, textAlign: 'left'},
  dropdown1RowStyle: {borderBottomColor: COLORS.black},
  dropdown1RowTxtStyle: {color: COLORS.black, textAlign: 'left'},
});

export default styles;
