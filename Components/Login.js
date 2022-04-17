import React from "react";
import { useState } from 'react';
import { TextInput,StyleSheet,ScrollView,Button,TouchableOpacity, Image, Text, View,  Alert} from "react-native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Login({navigation}) {
  const [user, setText1] = useState('');
  const [password, setText2] = useState('');
  const [secure, setSecure] = useState(true);
  return (
    
    <ScrollView >
      <View>
            <Icon
              style={{marginLeft:10,marginTop:10}}
              backgroundColor="#22C7A9"
              name="arrow-left" size={20} 
              onPress={() => navigation.navigate('Intro')}>
            </Icon>
          </View>
      <View style={styles.Login}>
      <View style={styles.logo}></View>
      <Text style={styles.title}>doctalks</Text>
      <Text style={styles.text}>Welcome Back</Text>
      <Text style={styles.text2}>Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit. Diam maecenas mi non sed 
      ut odio. Non, justo, sed facilisi et. </Text>

      <View style={styles.form}>
        {/* <Text style={styles.Txt619}>Forgot Password ?</Text> */}
        {/* <Text style={styles.Txt515}>doctalks</Text> */}
        <View style={styles.Group228}>
          
          <Text> {"\n"}</Text>
          <View style={styles.password}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f4uogfcxp9g-1%3A35?alt=media&token=51ea7e1d-68e1-4e97-8d73-9b58f9bfc0a8",
              }}
            />
            <TextInput
              style={styles.Txt598}
              placeholder="Username"
                autoCapitalize="none"
                placeholderTextColor={"gray"}
                autoCorrect={false}
                onChangeText={newText => setText1(newText)}
                defaultValue={user}
              
            />
        
          </View>
          
          <View style={styles.password}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f4uogfcxp9g-1%3A36?alt=media&token=cb8148f7-7826-4821-ae4f-33ef22adfaf3",
              }}
            />
            <TextInput
              style={styles.Txt598}
              placeholder="Password"
                autoCapitalize="none"
                placeholderTextColor={"gray"}
                autoCorrect={false}
                secureTextEntry={secure} 
                onChangeText={newText => setText2(newText)}
                defaultValue={password}
              
            />
            <Icon style={{marginLeft:20,marginTop:10}}
                  color="#22C7A9"
                  size={25} 
                  name={secure ? "eye" : "eye-slash"} onPress={() => setSecure(!secure)} />
            
            
          </View>
          <Text style={styles.Txt619}>Forgot Password ?</Text>
          <View>
          <TouchableOpacity style={styles.button}
            title="Press me"
            color="rgba(34,199,169,1)"
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.logintext}>Login</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Login: {
    marginTop:RFValue(20),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    
  },
  logo: {
    position: "relative",
    backgroundColor: "rgba(196,196,196,1)",
    width: 83,
    height: 77,
    borderRadius: 41.5,
  },
  form: {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    // left:6,
    none: "0px",
    width: 50,
    height: 550,
  },
  Txt619: {
    position: "relative",
    left: 210,
    fontSize: 15,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    color: "rgba(45,38,38,1)",
    // width: 138,
    // height: 23,
  },
  Txt515: {
    position: "absolute",
    left: 106,
    fontSize: 36,
    fontFamily: "Inter, sans-serif",
    fontWeight: "900",
    color: "rgba(0,0,0,1)",
    width: 229,
    height: 56,
  },
  Group228: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    none: "0px",
    width: 360,
    height: 617,
  },
  password: {
    // display: "flex",
    marginEnd:20,
    marginLeft:20,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 21,
    paddingRight: 21,
    borderRadius: 15,
    backgroundColor: "rgba(243,243,243,1)",
    shadowColor: "rgba(0,0,0,0.12)",
    elevation: 0,
    shadowOffset: { width: 0, height: 2 },
    marginBottom:20,
  },
  Vector: {
    marginTop:10,
    width: 22,
    height: 23.88,
    marginRight: 25,
  },
  back:{
   marginTop:24,
  width: 25,
  height: 17.19,
 },
  Txt598: {
    fontSize: 15,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    color: "rgba(102,97,97,1)",
    marginRight: 90,
  },
  vector: {
    right:20,
    width: 25,
    height: 17.19,
  },

  Group242: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 18,
    none: "0px",
    width: 180,
    height: 26,
  },
  Vector1: {
    width: 25,
    height: 24.88,
    marginRight: 23,
  },
  Txt372: {
    fontSize: 15,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    color: "rgba(102,97,97,1)",
  },

  Vector2: {
    position: "absolute",
    top: "20.34%",
    bottom: "30.32%",
    left: "5.9%",
    right: "85.47%",
    width: 29.25,
    height: 29.11,
  },

  text: {
    fontSize: 20,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    color: "rgba(70,68,68,1)",
    position: "relative",
    
  
  },
  text2: {
    textAlign:"center",
    fontSize: RFValue(15) ,
    fontFamily: "Poppins, sans-serif",
    color: "rgba(70,68,68,1)",
    position: "relative",
    paddingLeft: 21,
    paddingRight: 21,
  
  },
  button: {
    position:"relative",
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#22C7A9',
    borderRadius:30,
    borderWidth: 1,
    
  },
  logintext: {
    fontSize: 23,
    color:'#fff',
    textAlign:'center',
  },

  title: {
    position: "relative",
    textAlign:"center",
    fontSize: 36,
    fontFamily: "Inter, sans-serif",
    fontWeight: "900",
    width: 229,
    height: 56,
  },
})
