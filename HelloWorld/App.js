import { View,Text,Image,Button,Pressable } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App()
{
  return (
  <View style={{flex:1,backgroundColor:"plum",padding:60}}>
    <Button 
     title="Press" 
     onPress={()=>alert("Button Pressed")} 
     color="midnightblue"/>
     <Pressable onPress={()=>console.log("Image Pressed")}>
       <Image source={logoImg} style={{width:300,height:300}}/>
     </Pressable>
     <Pressable onPress={()=>console.log("Text Pressed")}>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
          Aldus PageMaker including versions of Lorem Ipsum.
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.
        </Text>
        </Pressable>
  </View>
  );
}