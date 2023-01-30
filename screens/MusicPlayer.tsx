import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  Animated,
} from 'react-native';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';

import Icon from 'react-native-vector-icons/Ionicons';
import songs from '../model/Data';

// interface itemType : {
//   item: {
//     id: number;
//     title: string;
//     artist: string;
//     artwork: any;
//     url: string;
// }, index: number
// }

const {width} = Dimensions.get('window');

const setUpPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(songs);
  } catch (e) {
    console.log(e);
  }
};

const togglePlayBack = async (playBackState: State) => {
  const curentTrack = await TrackPlayer.getCurrentTrack();
  if (curentTrack != null) {
    if (playBackState === State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

const MusicPlayer = () => {
  const playBackState = usePlaybackState();
  const [songIndex, setSongIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setUpPlayer();
    scrollX.addListener(({value}) => {
      // console.log(value);
      const index = Math.round(value / width);
      setSongIndex(index);
      // console.log(index);
    });
  }, [scrollX]);

  const renderSongs = ({item, index}) => {
    return (
      <Animated.View style={styles.mainImageWrapper}>
        <View style={[styles.imageWrapper, styles.elevation]}>
          <Image source={item.artwork} style={styles.musicImage} />
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        {/* image */}

        <Animated.FlatList
          renderItem={renderSongs}
          data={songs}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />

        {/* song content */}
        <Text style={[styles.songTitle, styles.songContent]}>
          {songs[songIndex].title}
        </Text>
        <Text style={[styles.songArtist, styles.songContent]}>
          {songs[songIndex].artist}
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
            <Icon name="play-skip-back-outline" size={35} color="#ffd369" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => togglePlayBack(playBackState)}>
            <Icon
              name={
                playBackState === State.Playing
                  ? 'ios-play-circle'
                  : 'ios-pause-circle'
              }
              size={70}
              color="#ffd369"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="play-skip-forward-outline" size={35} color="#ffd369" />
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
  mainImageWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
