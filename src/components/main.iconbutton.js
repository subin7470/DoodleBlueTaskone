import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {commonStyles} from '../styles';

export const IconButtonComponent = ({
  title,
  ButtonIcon,
  buttonStyle,
  titleStyle,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[commonStyles.iconButtonContainer, buttonStyle]}>
      <ButtonIcon />
      <Text style={[commonStyles.iconButtonTitle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
