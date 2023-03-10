import {StyleSheet} from 'react-native';
import {colours} from '../theme/colors';

export const newAssociatesStyles = StyleSheet.create({
  scrollView: {
    padding: 20,
    paddingTop: 0,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputRowWidth: {
    width: '48%',
  },
  addContactButton: {
    borderColor: colours.dark_blue,
    borderWidth: 1.5,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    width: 140,
    justifyContent: 'center',
    height: 35,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  addContactButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colours.dark_blue,
    marginLeft: 10,
  },
  contactIndexText: {
    fontSize: 14,
    color: colours.black,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  notesInput: {
    height: 110,
    textAlignVertical: 'top',
  },
  bottomButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  cancelButton: {
    width: '47%',
  },
  saveButton: {
    width: '47%',
    backgroundColor: colours.dark_blue,
  },
  saveButtonTitle: {
    color: colours.white,
  },
});
