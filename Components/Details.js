import React from "react";
import { useState } from 'react';
import { TextInput,StyleSheet,ScrollView,Button,TouchableOpacity, Image, Text, View,  Alert} from "react-native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Details({navigation}) {
  const [username, setText1] = useState('');
  const [workdetails, setText2] = useState('');
  const [information, setText3] = useState('');
  return (
    
    <ScrollView >
      <View>
            <Icon
              style={{marginLeft:10,marginTop:10}}
              backgroundColor="#22C7A9"
              name="arrow-left" size={20} 
              onPress={() => navigation.navigate('Signup')}>
            </Icon>
          </View>
      <View style={styles.Login}>
      <Text style={styles.title}>doctalks</Text>
      <View style={styles.logo}></View>
      <View style={styles.form}>
        <View style={styles.Group228}>
          
          <Text> {"\n"}</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.Txt598}
              placeholder="username"
                autoCapitalize="none"
                placeholderTextColor={"gray"}
                autoCorrect={false}
                onChangeText={newText => setText1(newText)}
                defaultValue={username} 
            />
            </View>
            <View style={styles.input}>
            <TextInput
              style={styles.Txt598}
              placeholder="specialization"
                autoCapitalize="none"
                placeholderTextColor={"gray"}
                autoCorrect={false}
                onChangeText={newText => setText2(newText)}
                defaultValue={workdetails} 
            />
            </View>
            <View style={styles.input}>
            <TextInput
              style={styles.Txt598}
              placeholder="information"
                autoCapitalize="none"
                placeholderTextColor={"gray"}
                autoCorrect={false}
                onChangeText={newText => setText3(newText)}
                defaultValue={information}
                multiline={true}
            />
          </View>
          
          
          <View>
          <TouchableOpacity style={styles.button}
            title="Press me"
            color="rgba(34,199,169,1)"
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.signuptext}>Signup</Text>
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
  input: {
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
    textAlignVertical: "top",
    fontSize: 15,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    color: "rgba(102,97,97,1)",
    marginRight: 90,
    width:250,
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
  signuptext: {
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
