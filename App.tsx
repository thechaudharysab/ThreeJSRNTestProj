import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

const App = () => {
  console.log('Constants.systemFonts: ', Constants.systemFonts);

  return (
    <View>
      <Text>Three JS Test App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
