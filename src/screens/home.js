import {
  View,
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
// import React, { useState } from 'react';
// import Text from '../components/text/text';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import PlanetHeader from '../components/planet-header';
// import { colors } from '../themes/colors';
// import { spacing } from '../themes/spacing';

export const Button = ({ title }) => {
  return (
    <Pressable
      style={{
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 40,
        borderRadius: 4,
      }}
      onPress={() => {
        alert('pressed');
      }}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </Pressable>
  );
};

export default function Home() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ height: 60, backgroundColor: 'blue' }}>
          <Text>This is a test</Text>
        </View>
        <View style={{ height: 60, backgroundColor: 'red' }}>
          <Text>This is a test</Text>
        </View>

        <View style={styles.imageView}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={{ height: 150, width: 150 }}
            resizeMode="contain"
          />
        </View>
        <Button title="button" />
        <Button title="second button" />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     // flex: 1,
  //     height: 60,
  //     width: 60,
  //     backgroundColor: colors.red,
  //   },
  //   items: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //     padding: spacing[4],
  //   },
  //   itemName: {
  //     textTransform: 'uppercase',
  //     marginLeft: spacing[4],
  //   },
  //   circle: {
  //     width: 30,
  //     height: 30,
  //     borderRadius: 15,
  //   },
  //   list: {
  //     padding: spacing[4],
  //   },
  //   separator: {
  //     borderBottomColor: colors.white,
  //     borderWidth: 0.5,
  //   },
  //   searchInput: {
  //     padding: spacing[4],
  //     color: colors.white,
  //     borderBottomColor: colors.white,
  //     borderBottomWidth: 1,
  //     margin: spacing[5],
  //   },
  imageView: {
    marginTop: 50,
    marginLeft: 40,
  },
});
