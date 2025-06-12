import { Image } from 'expo-image';
import { View,Text, StyleSheet } from 'react-native';



export default function Splashscreen() {
  return (
   <View style={styles.container}><Text style={styles.text}>GREEN CYCLE</Text></View>
  )}




  
const styles = StyleSheet.create({
  container: {
     color: 'white',
     backgroundColor: '#1ED760',
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
  },
  text: {
    fontWeight: 400,
    fontSize: 36,
    color: 'white',
  },
});

