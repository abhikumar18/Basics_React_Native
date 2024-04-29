import { View,Text,Image,ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App()
{
  return (
  <View style={{flex:1,backgroundColor:"plum",padding:60}}>
     {/* <Image source={logoImg} style={{width:300,height:300}}/>
     <Image source={{uri:'https://picsum.photos/id/237/200/300'}} style={{width:300,height:300}}/> */}
     <ImageBackground source={logoImg} style={{flex:1}}>
      <Text>Hello Abhishek</Text>
     </ImageBackground>
  </View>
  );
}