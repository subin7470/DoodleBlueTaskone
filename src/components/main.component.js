import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {colours} from '../theme/colors';

export const MainComponent = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: colours.light_grey,
        }}>
        {children}
      </View>
    </SafeAreaView>
  );
};
