import { View,Alert,Button } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App()
{
  return (
  <View style={{flex:1,backgroundColor:"plum",padding:60}}>
    <Button title="Alert 1" onPress={()=>Alert.alert("Invalid Data")} />
    <Button title="Alert 2" onPress={()=>Alert.alert("Invalid Data","DOB is incorrect")} />
    <Button 
        title="Alert 3" 
        onPress={()=>Alert.alert("Invalid Data","DOB is incorrect",[
          {
            text:"Cancel",
            onPress:()=>console.log("Cancel Pressed"),
          },
          {
            text:"OK",
            onPress:()=>console.log("OK Pressed"),
          }
        ])} />
  </View>
  );
}