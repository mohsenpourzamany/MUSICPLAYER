import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import Slider from '@react-native-community/slider';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        {/* image */}
        <View style={[styles.imageWrapper, styles.elevation]}>
          <Image
            source={require('../assets/img/img1.jpg')}
            style={styles.musicImage}
          />
        </View>
        {/* song content */}
        <Text style={[styles.songTitle, styles.songContent]}>Song Title</Text>
        <Text style={[styles.songArtist, styles.songContent]}>
          Song Artist Name
        </Text>
        {/* slider */}
        <View>
          <Slider
            style={styles.songSlider}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#ffd369"
            minimumTrackTintColor="#ffd369"
            maximumTrackTintColor="#fff"
            onSlidingComplete={() => {}}
          />
        </View>

        {/* music progress duration */}

        <View style={styles.progressDuration}>
          <Text style={styles.progressText}>00:00</Text>
          <Text style={styles.progressText}>00:00</Text>
        </View>

        {/* music control */}

        <View style={styles.musicControl}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="play-skip-back-outline" size={30} color="#ffd369" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="ios-pause-circle" size={70} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="play-skip-forward-outline" size={30} color="#ffd369" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomIconWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="heart-outline" size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="repeat" size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="share-outline" size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="ellipsis-horizontal" size={30} color="#888888" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393e46',
    borderWidth: 1,
  },
  bottomIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  imageWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  elevation: {
    elevation: 5,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  songContent: {
    textAlign: 'center',
    color: '#EEEEEE',
    marginBottom: 15,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  songArtist: {
    fontSize: 18,
    fontWeight: '300',
  },
  songSlider: {
    width: 320,
    height: 40,
    marginTop: 15,
    flexDirection: 'row',
  },
  progressDuration: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    color: '#fff',
    fontWeight: '500',
    marginTop: 15,
  },
  musicControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    margin: 15,
  },
});
