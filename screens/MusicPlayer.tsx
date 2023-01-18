import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const MusicPlayer = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>MusicPlayer</Text>
      </View>
      <View>
        <Icon name="ios-person" size={30} color="#4F8EF7" />
      </View>
    </>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#8db613',
  },
});
