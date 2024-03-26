import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
       <Text>pagina sobre</Text>

    <Link style={styles.btn} href={"/"}>inicio</Link>
    <StatusBar style="auto" />

    <Link style={styles.btn} href={"/contatos"}>contatos</Link>
    <StatusBar style="auto" />

    <Image style={styles.imagem}
        source={require('../../assets/lanao.jpg')}
      />

    </View>
  );
}
