import {StyleSheet} from 'react-native';
import {colours} from '../theme/colors';

export const associatesStyles = StyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  listHeaderTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: colours.black,
    textAlignVertical: 'center',
  },
  listHeaderButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resetButton: {
    height: 35,
    width: 100,
    marginBottom: 0,
    marginRight: 7,
  },
  resetButtonTitle: {
    fontSize: 12,
    marginLeft: 7,
  },
  addButton: {
    height: 35,
    width: 55,
    marginBottom: 0,
  },
  addButtonTitle: {
    marginLeft: 0,
  },
  associatesListContainer: {
    backgroundColor: colours.white,
    padding: 10,
    borderRadius: 8,
    elevation: 1,
    marginBottom: 10,
  },
  associatesListContainerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listContainerAddressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  listContainerAddresscolumn1: {
    fontSize: 12,
    color: colours.black,
    borderRightColor: colours.text_grey,
    borderRightWidth: 1,
    paddingRight: 5,
    marginRight: 5,
  },
  listContainerAddresscolumn2: {
    fontSize: 12,
    color: colours.black,
  },
  associatesListContainerTitle: {
    fontSize: 14,
    color: colours.black,
    fontWeight: 'bold',
  },
  activeText: {
    backgroundColor: 'rgba(74,189,125,0.2)',
    fontSize: 12,
    color: colours.app_green,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontWeight: '600',
  },
  footerActivityIndicator: {
    margin: 15,
  },
  flatlistContainer: {paddingBottom: 110},
});
