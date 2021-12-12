import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Login = () => {
    let [username, setUsername] = useState("")
    let [password, setpassword] = useState("")
    const onLogin = () =>{
        Actions.movieslist()
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.1 }} />
            <View style={{ flex: 0.9, marginTop: 40 }}>

                <View style={{ flex: 1, alignItems: "center", }}>

                    <Image
                        source={require('../../images/reactlogo.png')}
                        style={{ width: 200, height: 200 }}
                    />
                    <View style={{ marginTop: 30 }}>
                        <TextInput style={{ width: 300, height: 50, paddingLeft: 8, borderWidth: 1, borderRadius: 20, color: "darkblue", borderColor: "lightgrey" }}
                            placeholder={"User Name"}
                            placeholderTextColor={"darkblue"}
                            value={username}
                            onChangeText={(val) => setUsername(val)}
                        >
                        </TextInput>
                        <TextInput style={{ width: 300, marginTop: 20, height: 50, paddingLeft: 8, borderWidth: 1, borderRadius: 20, color: "darkblue", borderColor: "lightgrey" }}
                            placeholder={"Password"}
                            placeholderTextColor={"darkblue"}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(val) => setpassword(val)}
                        >
                        </TextInput>
                    </View>
                    <TouchableOpacity onPress={onLogin} style={{ height: 50, width: 200, justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "skyblue", borderWidth: 0, borderRadius: 20, marginTop: 40 }}>
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;