import { StatusBar } from 'expo-status-bar';
import {  Text, View, Image} from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>pagina contatos</Text>

      <Link style={styles.btn} href={"/"}>inicio</Link>
      <StatusBar style="auto" />

      <Link style={styles.btn} href={"/sobre"}>sobre</Link>
      <StatusBar style="auto" />

      <Image style={styles.imagem}
        source={require('../../assets/lana.jpg')}
      />

    </View>
  );
}
