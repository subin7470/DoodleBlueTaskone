import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import {commonStyles} from '../styles';
import {colours} from '../theme/colors';
export const HeaderComponent = ({title, onBackButtonPress = () => {}}) => {
  return (
    <View style={commonStyles.headerContainer}>
      <Icon
        onPress={onBackButtonPress}
        size={20}
        name="angle-left"
        type="fontisto"
        color={colours.black}
      />
      <Text style={commonStyles.headerTitle}>{title}</Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
        }}>
        {'?'}
      </Text>
    </View>
  );
};
