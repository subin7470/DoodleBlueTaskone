import React from 'react';
import {Text, TextInput} from 'react-native';
import {commonStyles} from '../styles';
import {colours} from '../theme/colors';

export const TextInputComponent = ({
  placeholder = '',
  style,
  multiline = false,
  onChangeText,
  value,
  error,
  onBlur = () => {},
  inValid,
  onFocus = () => {},
}) => {
  return (
    <>
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={colours.text_grey}
        style={[commonStyles.textinputContainer, style]}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {inValid && <Text style={commonStyles.errorText}>{error}</Text>}
    </>
  );
};
