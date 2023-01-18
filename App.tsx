import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React from 'react';
import MusicPlayer from './screens/MusicPlayer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>App</Text>
      </View>
      <MusicPlayer />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09021d',
  },
  text: {
    color: '#ffffff',
  },
});
