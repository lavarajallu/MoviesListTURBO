import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Welcome = () => {
    onstarted =()=>{
        Actions.login()
    }
  return (
    <View style={{flex:1}}>
    <View style={{flex:0.1}}/>
          <View style={{flex:0.8,}}>

      <View style={{flex:1,justifyContent:"space-around",alignItems:"center"}}>
        
        <Image
                                         source={require('../../images/reactlogo.png')}

          style={{ width: 200, height: 200 }}
        />
     
      <Text style={{fontSize:20,color:"darkblue",fontWeight:"bold"}}>WELCOME</Text>
    
      <TouchableOpacity onPress={onstarted} style={{height:50,width:200,justifyContent:"center",alignItems:"center",alignSelf:"center",backgroundColor:"skyblue",borderWidth:0,borderRadius:20,}}>
      <Text style={{fontSize:18,fontWeight:"600",color:"white"}}>GETTING START</Text>
      </TouchableOpacity>
       </View>
       </View>
         <View style={{flex:0.1}}/>
    </View>
  );
}

export default Welcome;