import {StyleSheet} from 'react-native';
import {colours} from '../theme/colors';

export const commonStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colours.white,
    height: 65,
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.black,
  },
  accordionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colours.white,
    borderRadius: 2,
    padding: 17,
    paddingVertical: 15,
    // borderColor: colours.black,
    // borderWidth: 0.1,
    marginTop: 15,
    elevation: 1,
  },
  isOpenaccordionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colours.light_blue,
    borderRadius: 7.5,
    padding: 17,
    paddingVertical: 15,
    borderColor: colours.border_blue,
    borderWidth: 1,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: 15,
    elevation: 1,
  },
  accordionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colours.black,
  },
  accordionChildren: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 0.5,
    backgroundColor: colours.white,
    paddingTop: 15,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 0,
    borderTopColor: 'transparent',
    elevation: 1,
  },
  accordionIconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 40,
  },
  textinputContainer: {
    height: 40,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 7.5,
    color: colours.black,
    marginBottom: 15,
    fontSize: 14,
    fontWeight: '500',
  },
  iconButtonContainer: {
    borderColor: colours.dark_blue,
    borderWidth: 1.5,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    height: 45,
    width: '100%',
  },
  iconButtonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colours.dark_blue,
    marginLeft: 10,
  },
  dropDown: {
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: colours.white,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 7.5,
    marginBottom: 15,
  },
  dropDownIcon: {
    width: 20,
    height: 20,
  },
  dropDownRightIcon: {marginRight: 10},
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: -15,
    marginBottom: 3,
    marginLeft: 5,
  },
});
