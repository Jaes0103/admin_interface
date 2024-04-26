import { StyleSheet } from 'react-native';
import React, { useState } from 'react'; // Import React and useState
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import MyMapScreen from './MyMapScreen'; // Assuming MyMapScreen is in the same directory
import { Button } from 'react-native/Libraries/Components/Button';

export default function TabOneScreen() {
  const [showMapScreen, setShowMapScreen] = useState(false); // State to manage map screen visibility

  const handleShowMap = () => {
    setShowMapScreen(true); // Set state to true to display map screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Button title="Show Map" onPress={handleShowMap} />
      {showMapScreen && <MyMapScreen />} {/* Conditionally render MyMapScreen */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
