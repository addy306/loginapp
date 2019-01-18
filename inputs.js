import React, { Component } from 'react'
import { Image, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
            <Image
            style={styles.logoStyle}
            source={require("./login_icon.jpg")}
              />

            <Text style={styles.loginTextStyle}> Login </Text>

             <View style = {styles.loginIconsContainer}>
                <Image
                 style={styles.loginButtonIconStyle}
                   source={require("./instagram.png")}
                />
                <Image
                 style={styles.loginButtonIconStyle}
                   source={require("./linkedin.png")}
                />
                <Image
                    style={styles.loginButtonIconStyle}
                     source={require("./facebook.png")}
                 />
                <Image
                 style={styles.loginButtonIconStyle}
                   source={require("./g_plus.png")}
                />
                <Image
                 style={styles.loginButtonIconStyle}
                   source={require("./twitter.png")}
                />
             </View>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
 loginIconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 600
   },
  loginButtonIconStyle: {

      marginTop: 25,

      height: 50,

      width: 50,

     },
   container: {
      paddingTop: 23
   },
   logoStyle: {

    marginTop: 25,

    height: 50,

    width: 50,

    alignSelf: "center"

   },
   loginTextStyle: {

    alignSelf: "center",

   fontSize: 18,

   marginTop: 10

    },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      alignSelf: "center",
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})


