import React, {useReducer, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CreateNewAssociatesContainer} from '../containers';
import {updateAssociatesFormList} from '../slices/associate.form.slice';
import {updateAssociateListwithForm} from '../slices/associates.slices';
import {dropDownIntialState, dropDownReducer} from '../usereducers';
import {
  addressValidationSchema,
  basicInfoValidation,
  contactInfoValidationSchema,
  locationValidation,
  notesValidationSchema,
  salesPersonValidationSchema,
} from '../validation';
export const CreateNewAssociatesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const associatesList = useSelector(state => state.associates.associatesList);
  const [focusedDropdown, setFocusedDropdown] = useState(null);
  const [dropDownState, dropDownDispatch] = useReducer(
    dropDownReducer,
    dropDownIntialState,
  );

  const [intialIsValid, setIsValid] = useState({
    basic_info: undefined,
    contact_info: undefined,
    address: undefined,
    location: undefined,
    primary_sales: undefined,
    notes: undefined,
  });
  const handleDropdown = dropdownId => {
    if (focusedDropdown === dropdownId) {
      setFocusedDropdown(null);
    } else {
      setFocusedDropdown(dropdownId);
    }
  };

  const handleInfoChange = (field, value, type) => {
    if (type === 'updateAddress') {
      onChangeValid('address', true);
    } else if (type === 'updateSalesPerson') {
      onChangeValid('primary_sales', true);
    } else if (type === 'updateNotes') {
      onChangeValid('notes', true);
    } else if (type === 'updateBasicInfo') {
      onChangeValid('basic_info', true);
    } else if (type === 'updateLocation') {
      onChangeValid('location', true);
    }

    dropDownDispatch({
      type: type,
      payload: {[field]: value ? value : null},
    });
  };

  const handleContactInfoChange = (text, index, field) => {
    onChangeValid('contact_info', true);
    dropDownDispatch({
      type: 'updateContactInfo',
      payload: {index, field, value: text},
    });
  };
  const onTapAddContact = () => {
    dropDownDispatch({type: 'addContactInfo'});
  };
  const validateBasicInfo = async (data, schema) => {
    try {
      await schema.validate(data, {abortEarly: false});
      return true;
    } catch (validationError) {
      console.log(
        `error`,
        validationError.inner.map(err => err.message),
      );
      return false;
    }
  };
  const onChangeValid = (field, value) => {
    setIsValid(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onTapSave = async () => {
    const {basicInfo, address, location, primary_sales_person, notes} =
      dropDownState;
    const isbasicInfoValid = await validateBasicInfo(
      basicInfo,
      basicInfoValidation,
    );
    onChangeValid('basic_info', isbasicInfoValid);
    const isAddressValid = await validateBasicInfo(
      address,
      addressValidationSchema,
    );
    onChangeValid('address', isAddressValid);
    const isLocationValid = await validateBasicInfo(
      location,
      locationValidation,
    );
    onChangeValid('location', isLocationValid);
    const isSalesPersonValid = await validateBasicInfo(
      primary_sales_person,
      salesPersonValidationSchema,
    );
    onChangeValid('primary_sales', isSalesPersonValid);
    const isNotesValid = await validateBasicInfo(notes, notesValidationSchema);
    onChangeValid('notes', isNotesValid);
    const isContactInfoValid = await validateBasicInfo(
      dropDownState,
      contactInfoValidationSchema,
    );
    onChangeValid('contact_info', isContactInfoValid);
    if (
      isbasicInfoValid &&
      isAddressValid &&
      isLocationValid &&
      isSalesPersonValid &&
      isNotesValid &&
      isContactInfoValid
    ) {
      dispatch(updateAssociatesFormList(dropDownState));
      if (associatesList.length > 0) {
        dispatch(updateAssociateListwithForm(dropDownState));
      }
      alert('saved');
    } else {
      alert('Please check for invalid data and fill all mandatory fields.');
    }
  };
  return (
    <CreateNewAssociatesContainer
      navigation={navigation}
      dropDownState={dropDownState}
      handleInfoChange={handleInfoChange}
      handleContactInfoChange={handleContactInfoChange}
      onTapAddContact={onTapAddContact}
      focusedDropdown={focusedDropdown}
      handleDropdown={handleDropdown}
      onTapSave={onTapSave}
      intialIsValid={intialIsValid}
    />
  );
};
