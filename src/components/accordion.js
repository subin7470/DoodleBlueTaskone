import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {commonStyles} from '../styles';
import {colours} from '../theme/colors';

export const AccordionComponent = ({
  children,
  title,
  isFocus,
  onPress,
  isValid,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={
          isFocus
            ? commonStyles.isOpenaccordionContainer
            : commonStyles.accordionContainer
        }>
        <Text style={commonStyles.accordionTitle}>{title}</Text>
        <View style={commonStyles.accordionIconsRow}>
          <Icon
            size={22}
            name={isValid ? 'checkmark-circle' : 'checkmark-circle-outline'}
            type="ionicon"
            color={
              isValid
                ? colours.app_green
                : isValid == undefined
                ? colours.text_grey
                : 'red'
            }
          />
          <Icon
            size={15}
            name={isFocus ? 'caret-down' : 'caret-up'}
            type="font-awesome-5"
            color={colours.black}
          />
        </View>
      </TouchableOpacity>
      {isFocus && (
        <View style={commonStyles.accordionChildren}>{children}</View>
      )}
    </>
  );
};
