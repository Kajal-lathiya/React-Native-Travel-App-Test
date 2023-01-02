import {StyleSheet, StatusBar} from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 12,
  },
  flex1: {
    flex: 1,
  },
  shadow: {
    shadowColor: COLORS.blue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  input: {
    height: 45,
    borderWidth: 1.5,
    justifyContent: 'center',
    paddingLeft: 12,
    marginTop: 5,
    borderRadius: 10,
    borderColor: COLORS.gray,
    color: COLORS.gray,
  },
  labelView: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  marginL10: {
    marginLeft: 10,
  },
  marginT20: {
    marginTop: 20,
  },
  marginV15: {
    marginVertical: 15,
  },
  marginH10: {
    marginHorizontal: 10,
  },
  entityView: {
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 7,
    padding: 15,
    backgroundColor: COLORS.gray,
  },
  entityDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailView: {
    marginTop: 40,
    backgroundColor: COLORS.white,
    padding: 20,
    height: 100,
    width: '100%',
    borderRadius: 20,
  },
  backIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.transparentBlack,
  },
  leftImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image50: {
    width: 50,
    height: 50,
  },
  submitButton: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.blue,
    borderRadius: SIZES.radius,
  },
});

export default styles;
