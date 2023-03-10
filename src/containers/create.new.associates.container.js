import {Icon} from '@rneui/themed';
import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  AccordionComponent,
  DropDownComponent,
  HeaderComponent,
  IconButtonComponent,
  MainComponent,
  TextInputComponent,
} from '../components';
import {newAssociatesStyles} from '../styles';
import {colours} from '../theme/colors';
import {
  addressValidationSchema,
  basicInfoValidation,
  contactInfoValidationSchema,
  locationValidation,
  notesValidationSchema,
  salesPersonValidationSchema,
} from '../validation';
export const CreateNewAssociatesContainer = ({
  dropDownState,
  handleInfoChange,
  handleContactInfoChange,
  onTapAddContact,
  handleDropdown,
  focusedDropdown,
  onTapSave,
  navigation,
  intialIsValid,
}) => {
  const [validateOnMount, setValidateOnMount] = useState(true);
  let selectedType = undefined;
  let selectedLocationAddress = undefined;
  let selectedCountry = undefined;
  let selectSalesPerson = undefined;
  useEffect(() => {
    setValidateOnMount(prevState => !prevState);
  }, []);
  return (
    <MainComponent>
      <HeaderComponent
        onBackButtonPress={() => navigation.pop()}
        title={'Create New Associates'}
      />
      <ScrollView style={newAssociatesStyles.scrollView}>
        {/* BASIC INFORMATION */}
        <Formik
          initialValues={dropDownState?.basicInfo}
          validationSchema={basicInfoValidation}
          validateOnMount={validateOnMount}>
          {({
            handleBlur,
            errors,
            touched,
            isValid,
            setFieldValue,
            setFieldTouched,
          }) => (
            <AccordionComponent
              isFocus={focusedDropdown === 'basicInfo'}
              onPress={() => {
                handleDropdown('basicInfo');
              }}
              isValid={
                intialIsValid?.basic_info ? isValid : intialIsValid?.basic_info
              }
              title={'Basic information'}>
              <TextInputComponent
                placeholder="Company Name *"
                onChangeText={value => {
                  handleInfoChange('companyName', value, 'updateBasicInfo');
                  setFieldValue('companyName', value);
                }}
                value={dropDownState?.basicInfo?.companyName}
                onBlur={handleBlur('companyName')}
                inValid={
                  errors.companyName && touched.companyName ? true : false
                }
                error={errors.companyName}
              />
              <TextInputComponent
                placeholder="Code"
                onChangeText={value => {
                  handleInfoChange('code', value, 'updateBasicInfo');
                  setFieldValue('code', value);
                }}
                value={dropDownState?.basicInfo?.code}
                onBlur={handleBlur('code')}
                inValid={errors.code && touched.code ? true : false}
                error={errors.code}
              />
              <DropDownComponent
                title={'Type*'}
                data={[
                  {label: 'Type 1', id: 1},
                  {label: 'Type 2', id: 2},
                  {label: 'Type 3', id: 3},
                ]}
                labelField="label"
                valueField="id"
                value={dropDownState?.basicInfo?.type}
                onChange={item => {
                  handleInfoChange('type', item, 'updateBasicInfo');
                  selectedType = item;
                  setFieldValue('type', item);
                }}
                onFocus={() => {
                  setFieldTouched('type');
                }}
                onBlur={() => {
                  handleBlur('type');
                  if (!selectedType) {
                    handleInfoChange('type', null, 'updateBasicInfo');
                  }
                }}
                inValid={errors.type && touched.type ? true : false}
                error={errors.type}
              />
              <TextInputComponent
                placeholder="Contact name"
                value={dropDownState?.basicInfo?.contact_name}
                onChangeText={value => {
                  handleInfoChange('contact_name', value, 'updateBasicInfo');
                  setFieldValue('contact_name', value);
                }}
                onBlur={handleBlur('contact_name')}
              />
              <TextInputComponent
                placeholder="Mobile"
                value={dropDownState?.basicInfo?.mobile}
                onChangeText={value => {
                  handleInfoChange('mobile', value, 'updateBasicInfo');
                  setFieldValue('mobile', value);
                }}
                onBlur={handleBlur('mobile')}
                inValid={errors.mobile && touched.mobile ? true : false}
                error={errors.mobile}
              />
              <TextInputComponent
                placeholder="Office"
                value={dropDownState?.basicInfo?.office}
                onChangeText={value => {
                  handleInfoChange('office', value, 'updateBasicInfo');
                  setFieldValue('office', value);
                }}
                onBlur={handleBlur('office')}
              />
              <TextInputComponent
                placeholder="Email"
                value={dropDownState?.basicInfo?.email}
                onChangeText={value => {
                  handleInfoChange('email', value, 'updateBasicInfo');

                  setFieldValue('email', value);
                }}
                onBlur={handleBlur('email')}
                inValid={errors.email && touched.email ? true : false}
                error={errors.email}
              />
              <TextInputComponent
                placeholder="Website"
                value={dropDownState?.basicInfo?.website}
                onChangeText={value => {
                  handleInfoChange('website', value, 'updateBasicInfo');
                  setFieldValue('website', value);
                }}
                onBlur={handleBlur('website')}
                inValid={errors.website && touched.website ? true : false}
                error={errors.website}
              />
            </AccordionComponent>
          )}
        </Formik>
        {/* CONTACT */}
        <Formik
          initialValues={dropDownState}
          validationSchema={contactInfoValidationSchema}
          validateOnMount={validateOnMount}>
          {({
            handleBlur,
            errors,
            touched,
            isValid,
            setFieldValue,
            setFieldTouched,
            values,
          }) => (
            <AccordionComponent
              isFocus={focusedDropdown === 'contact_information'}
              onPress={() => handleDropdown('contact_information')}
              isValid={
                intialIsValid?.contact_info
                  ? isValid
                  : intialIsValid?.contact_info
              }
              title={'Contact information'}>
              {dropDownState?.contact_information.map((item, index) => (
                <View key={index}>
                  <Text style={newAssociatesStyles.contactIndexText}>
                    {`Contact ${index + 1}`}
                  </Text>
                  <TextInputComponent
                    value={item.mobile}
                    placeholder="Mobile"
                    onChangeText={value => {
                      handleContactInfoChange(value, index, 'mobile');
                      setFieldValue(
                        `contact_information[${index}].mobile`,
                        value,
                      );
                    }}
                    onBlur={handleBlur(`contact_information[${index}].mobile`)}
                    inValid={
                      errors.contact_information &&
                      errors.contact_information[index]?.mobile &&
                      touched.contact_information &&
                      touched.contact_information[index]?.mobile
                        ? true
                        : false
                    }
                    error={
                      errors.contact_information &&
                      errors.contact_information[index]?.mobile
                    }
                  />
                  <TextInputComponent
                    placeholder="Email"
                    value={item.email}
                    onChangeText={value => {
                      handleContactInfoChange(value, index, 'email');
                      setFieldValue(
                        `contact_information[${index}].email`,
                        value,
                      );
                    }}
                    onBlur={handleBlur(`contact_information[${index}].email`)}
                    inValid={
                      errors.contact_information &&
                      errors.contact_information[index]?.email &&
                      touched.contact_information &&
                      touched.contact_information[index]?.email
                        ? true
                        : false
                    }
                    error={
                      errors.contact_information &&
                      errors.contact_information[index]?.email
                    }
                  />
                  <View style={newAssociatesStyles.inputRow}>
                    <TextInputComponent
                      style={newAssociatesStyles.inputRowWidth}
                      placeholder="Ext"
                      value={item.ext}
                      onChangeText={value => {
                        handleContactInfoChange(value, index, 'ext');
                        setFieldValue(
                          `contact_information[${index}].ext`,
                          value,
                        );
                      }}
                      onBlur={handleBlur(`contact_information[${index}].ext`)}
                      inValid={
                        errors.contact_information &&
                        errors.contact_information[index]?.ext &&
                        touched.contact_information &&
                        touched.contact_information[index]?.ext
                          ? true
                          : false
                      }
                      error={
                        errors.contact_information &&
                        errors.contact_information[index]?.ext
                      }
                    />
                    <TextInputComponent
                      style={newAssociatesStyles.inputRowWidth}
                      placeholder="Office"
                      value={item.office}
                      onChangeText={value => {
                        handleContactInfoChange(value, index, 'office');
                        setFieldValue(
                          `contact_information[${index}].office`,
                          value,
                        );
                      }}
                      onBlur={handleBlur(
                        `contact_information[${index}].office`,
                      )}
                      inValid={
                        errors.contact_information &&
                        errors.contact_information[index]?.office &&
                        touched.contact_information &&
                        touched.contact_information[index]?.office
                          ? true
                          : false
                      }
                      error={
                        errors.contact_information &&
                        errors.contact_information[index]?.office
                      }
                    />
                  </View>
                  <TextInputComponent
                    placeholder="Website"
                    value={item.website}
                    onChangeText={value => {
                      handleContactInfoChange(value, index, 'website');
                      setFieldValue(
                        `contact_information[${index}].website`,
                        value,
                      );
                    }}
                    onBlur={handleBlur(`contact_information[${index}].website`)}
                    inValid={
                      errors.contact_information &&
                      errors.contact_information[index]?.website &&
                      touched.contact_information &&
                      touched.contact_information[index]?.website
                        ? true
                        : false
                    }
                    error={
                      errors.contact_information &&
                      errors.contact_information[index]?.website
                    }
                  />
                </View>
              ))}
              <TouchableOpacity
                onPress={onTapAddContact}
                style={newAssociatesStyles.addContactButton}>
                <Icon
                  size={18}
                  name="plussquareo"
                  type="antdesign"
                  color={colours.dark_blue}
                />
                <Text style={newAssociatesStyles.addContactButtonText}>
                  ADD CONTACT
                </Text>
              </TouchableOpacity>
            </AccordionComponent>
          )}
        </Formik>
        {/* ADDRESS */}
        <Formik
          initialValues={dropDownState?.address}
          validationSchema={addressValidationSchema}
          validateOnMount={validateOnMount}>
          {({
            handleBlur,
            errors,
            touched,
            isValid,
            setFieldValue,
            setFieldTouched,
          }) => (
            <AccordionComponent
              isFocus={focusedDropdown === 'address'}
              onPress={() => handleDropdown('address')}
              isValid={
                intialIsValid?.address ? isValid : intialIsValid?.address
              }
              title={'Address'}>
              <TextInputComponent
                placeholder="Address"
                onChangeText={value => {
                  handleInfoChange('address', value, 'updateAddress');
                  setFieldValue('address', value);
                }}
                onBlur={handleBlur('address')}
                inValid={errors?.address && touched?.address ? true : false}
                error={errors?.address}
              />
              <TextInputComponent
                placeholder="City"
                value={dropDownState?.address?.city}
                onChangeText={value => {
                  handleInfoChange('city', value, 'updateAddress');
                  setFieldValue('city', value);
                }}
                onBlur={handleBlur('city')}
                inValid={errors?.city && touched?.city ? true : false}
                error={errors?.city}
              />
              <TextInputComponent
                placeholder="Zip"
                value={dropDownState?.address?.zip}
                onChangeText={value => {
                  handleInfoChange('zip', value, 'updateAddress');
                  setFieldValue('zip', value);
                }}
                onBlur={handleBlur('zip')}
                inValid={errors?.zip && touched?.zip ? true : false}
                error={errors?.zip}
              />
              <TextInputComponent
                placeholder="Suite/Unit"
                value={dropDownState?.address?.unit}
                onChangeText={value => {
                  handleInfoChange('unit', value, 'updateAddress');
                  setFieldValue('unit', value);
                }}
                onBlur={handleBlur('unit')}
                inValid={errors?.unit && touched?.unit ? true : false}
                error={errors?.unit}
              />
              <TextInputComponent
                placeholder="State"
                value={dropDownState?.address?.state}
                onChangeText={value => {
                  handleInfoChange('state', value, 'updateAddress');
                  setFieldValue('state', value);
                }}
                onBlur={handleBlur('state')}
                inValid={errors?.state && touched?.state ? true : false}
                error={errors?.state}
              />
              <DropDownComponent
                title={'Country'}
                data={[
                  {label: 'Test country', id: 1},
                  {label: 'Test country 1', id: 2},
                  {label: 'Test country 3', id: 3},
                ]}
                labelField="label"
                valueField="id"
                value={dropDownState?.address?.country}
                onChange={item => {
                  handleInfoChange('country', item, 'updateAddress');
                  selectedCountry = item;
                  setFieldValue('country', item);
                }}
                onFocus={() => {
                  setFieldTouched('country');
                }}
                onBlur={() => {
                  handleBlur('country');
                  if (!selectedCountry) {
                    handleInfoChange('country', null, 'updateAddress');
                  }
                }}
                inValid={errors.country && touched.country ? true : false}
                error={errors.country}
              />
            </AccordionComponent>
          )}
        </Formik>
        {/* LOCATION */}
        <Formik
          initialValues={dropDownState?.location}
          validationSchema={locationValidation}
          validateOnMount={validateOnMount}>
          {({
            handleBlur,
            errors,
            touched,
            isValid,
            setFieldValue,
            setFieldTouched,
          }) => (
            <AccordionComponent
              isFocus={focusedDropdown === 'location'}
              onPress={() => handleDropdown('location')}
              isValid={
                intialIsValid?.location ? isValid : intialIsValid?.location
              }
              title={'Location'}>
              <DropDownComponent
                title={'Address*'}
                data={[
                  {label: 'Address 0', id: 1},
                  {label: 'Address 1', id: 2},
                  {label: 'Address 3', id: 3},
                ]}
                labelField="label"
                valueField="id"
                value={dropDownState?.location?.address}
                onChange={item => {
                  handleInfoChange('address', item, 'updateLocation');
                  selectedLocationAddress = item;
                  setFieldValue('address', item);
                }}
                onFocus={() => {
                  setFieldTouched('address');
                }}
                onBlur={() => {
                  handleBlur('address');
                  if (!selectedLocationAddress) {
                    handleInfoChange('address', null, 'updateLocation');
                  }
                }}
                inValid={errors.address && touched.address ? true : false}
                error={errors.address}
              />
            </AccordionComponent>
          )}
        </Formik>
        {/* PRIMARY SALES PERSON */}
        <Formik
          initialValues={dropDownState?.primary_sales_person}
          validationSchema={salesPersonValidationSchema}
          validateOnMount={validateOnMount}>
          {({
            handleBlur,
            errors,
            touched,
            isValid,
            setFieldValue,
            setFieldTouched,
          }) => (
            <AccordionComponent
              isFocus={focusedDropdown === 'primary_sales_person'}
              onPress={() => handleDropdown('primary_sales_person')}
              isValid={
                intialIsValid?.primary_sales
                  ? isValid
                  : intialIsValid?.primary_sales
              }
              title={'Primary sales person'}>
              <DropDownComponent
                title={'Select'}
                data={[
                  {label: 'Test', id: 1},
                  {label: 'Test 1', id: 2},
                  {label: 'Test 3', id: 3},
                ]}
                labelField="label"
                valueField="id"
                value={dropDownState?.primary_sales_person?.name}
                onChange={item => {
                  handleInfoChange('name', item, 'updateSalesPerson');
                  selectSalesPerson = item;
                  setFieldValue('name', item);
                }}
                onFocus={() => {
                  setFieldTouched('name');
                }}
                onBlur={() => {
                  handleBlur('name');
                  if (!selectSalesPerson) {
                    handleInfoChange('name', null, 'updateSalesPerson');
                  }
                }}
                inValid={errors.name && touched.name ? true : false}
                error={errors.name}
              />
            </AccordionComponent>
          )}
        </Formik>
        {/* NOTES */}
        <Formik
          initialValues={dropDownState?.notes}
          validationSchema={notesValidationSchema}
          validateOnMount={validateOnMount}>
          {({handleBlur, errors, touched, isValid, setFieldValue}) => (
            <AccordionComponent
              isFocus={focusedDropdown === 'notes'}
              onPress={() => handleDropdown('notes')}
              isValid={intialIsValid?.notes ? isValid : intialIsValid?.notes}
              title={'Notes'}>
              <TextInputComponent
                multiline={true}
                style={newAssociatesStyles.notesInput}
                placeholder="Please provide notes here..."
                value={dropDownState?.notes?.message}
                onChangeText={value => {
                  handleInfoChange('message', value, 'updateNotes');
                  setFieldValue('message', value);
                }}
                onBlur={handleBlur('message')}
                inValid={errors.message && touched.message ? true : false}
                error={errors.message}
              />
            </AccordionComponent>
          )}
        </Formik>
      </ScrollView>
      <View style={newAssociatesStyles.bottomButtonRow}>
        <IconButtonComponent
          buttonStyle={newAssociatesStyles.cancelButton}
          ButtonIcon={() => (
            <Icon
              size={18}
              name="close"
              type="antdesign"
              color={colours.dark_blue}
            />
          )}
          title={'CANCEL'}
        />
        <IconButtonComponent
          buttonStyle={newAssociatesStyles.saveButton}
          titleStyle={newAssociatesStyles.saveButtonTitle}
          onPress={onTapSave}
          ButtonIcon={() => (
            <Icon
              size={22}
              name="plussquareo"
              type="antdesign"
              color={colours.white}
            />
          )}
          title={'SAVE'}
        />
      </View>
    </MainComponent>
  );
};
