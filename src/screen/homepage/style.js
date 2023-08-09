const {StyleSheet} = require('react-native');
import {moderateScale, scale} from 'react-native-size-matters/extend';
import {Light} from '../../theme';

const style = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: '9%',
  },
  container: {
    marginLeft: moderateScale(19),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scale(20),
  },
  calendarIcon: {
    width: 50,
    height: 58,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 15,
  },
  calendarContainer: {
    flex: 1,
    height: scale(80),
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 8,
    height: scale(70),
    width: scale(60),
  },
  content: {
    fontSize: 17,
    color: Light.subtext,
    paddingTop: 5,
  },
  subContent: {
    fontSize: 16,
    color: Light.subtext,
    paddingBottom: 5,
  },
});

export default style;
