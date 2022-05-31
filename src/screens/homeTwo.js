import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeTwo = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={{ flexDirection: 'row', flex: 1 }}>
    //     <View style={styles.view1}>
    //       <Text>HomeTwo</Text>
    //     </View>
    //     <View style={styles.view2}>
    //       <Text>HomeTwo</Text>
    //     </View>
    //     <View style={styles.view3}>
    //       <Text>HomeTwo</Text>
    //     </View>
    //   </View>
    // </SafeAreaView>
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={styles.view1}>
    //     <Text>HomeTwo</Text>
    //   </View>
    //   <View style={styles.view2}>
    //     <Text>HomeTwo</Text>
    //   </View>
    //   <View style={styles.view3}>
    //     <Text>HomeTwo</Text>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <View style={styles.view1}>
        <Text>HomeTwo</Text>
      </View>
      <View style={styles.view2}>
        <Text>HomeTwo</Text>
      </View>
      <View style={styles.view3}>
        <Text>HomeTwo</Text>
      </View>
      <View style={styles.view4}>
        <Text>HomeTwo</Text>
      </View>
      <View style={styles.view5}>
        <Text>HomeTwo</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeTwo;

const styles = StyleSheet.create({
  //   view1: {
  //     flex: 1,
  //     backgroundColor: 'red',
  //   },
  //   view2: {
  //     flex: 1,
  //     backgroundColor: 'blue',
  //   },
  //   view3: {
  //     flex: 2,
  //     backgroundColor: 'green',
  //   },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  view3: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  view4: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  view5: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});
