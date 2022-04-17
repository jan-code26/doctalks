import React from "react";
import { StyleSheet,TouchableOpacity, Text, View,ScrollView} from "react-native"
import {  RFValue } from "react-native-responsive-fontsize";
const Intro=({navigation}) =>{
  return (
    <View style={styles.Login}>
      <View style={styles.logo}></View>
      <Text style={styles.title}>doctalks</Text>
        <View style={styles.form}>
                <View style={styles.Group228}>
                    <TouchableOpacity style={styles.button1}
                        title="Press me"
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.nexttext1}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}
                        title="Press me"
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.nexttext2}>Login</Text>
                    </TouchableOpacity>
                
                </View>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  Login: {
    marginTop:RFValue(200),
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
    width: 174,
    height: 174,
    borderRadius: 100,
  },
  form: {
    marginTop:RFValue(78),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    // left:6,
    none: "0px",
    width: 50,
    height: 550,
  },

  Group228: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    none: "0px",
    width: 360,
    height: 617,
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
  button1: {
      width: RFValue(165),
      height: RFValue(68),
    position:"relative",
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    backgroundColor:'#22C7A9',
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
    
    
  },
  button2: {
    width: RFValue(165),
    height: RFValue(68),
  position:"relative",
  marginTop:10,
  paddingTop:15,
  paddingBottom:15,
  backgroundColor:'#DADADA',
  borderTopRightRadius:15,
  borderBottomRightRadius:15,
  
    
  },
  nexttext1: {
    fontSize: 23,
    color:'#000000',
    textAlign:'center',
  },
  nexttext2: {
    fontSize: 23,
    color:'#000000',
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
});
export default Intro;