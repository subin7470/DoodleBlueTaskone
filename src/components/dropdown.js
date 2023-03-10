import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {commonStyles} from '../styles';
import {colours} from '../theme/colors';
export const DropDownComponent = ({
  title,
  data,
  labelField,
  valueField,
  value,
  onChange,
  error,
  onBlur = () => {},
  inValid,
  onFocus = () => {},
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <Dropdown
        autoScroll={true}
        style={commonStyles.dropDown}
        iconStyle={commonStyles.dropDownIcon}
        data={data}
        maxHeight={300}
        labelField={labelField}
        valueField={valueField}
        onFocus={() => {
          onFocus();
          setIsFocus(!isFocus);
        }}
        onBlur={() => {
          onBlur();
          setIsFocus(!isFocus);
        }}
        placeholder={title}
        value={value}
        onChange={item => {
          onChange(item);
        }}
        renderRightIcon={() => (
          <Icon
            size={15}
            style={commonStyles.dropDownRightIcon}
            name={isFocus ? 'caret-down' : 'caret-right'}
            type="font-awesome-5"
            color={colours.black}
          />
        )}
      />
      {inValid && <Text style={commonStyles.errorText}>{error}</Text>}
    </>
  );
};
