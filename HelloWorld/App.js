import { View,StyleSheet,Text,ScrollView,SafeAreaView,StatusBar } from 'react-native';
import Box from './components/Box';
import pokemonList from './data.json';

export default function App () 
{
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}> 
      {pokemonList.map(pokemon => {
          return (
            
            <View key={pokemon.id} style={styles.card}>
               <Text style={styles.cardText}>{pokemon.type}</Text>
               <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
            
          )
        })}
      </ScrollView>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    paddingTop:StatusBar.currentHeight,
  },
  scrollView :{
    paddingHorizontal:16,
  },
  card:{
    backgroundColor:"white",
    padding:16,
    borderRadius:8,
    borderWidth:1,
    marginBottom:16
  },
  cardText:{
    fontSize:30,
  }
});