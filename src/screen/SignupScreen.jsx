import { Image, ImageBackground, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path, G } from 'react-native-svg';

const SignupScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const GoogleIcon = ({ size = 30 }) => (
    <Svg width={size} height={size} viewBox="0 0 512 512">
      <G scale="0.85" x="38" y="38"> {/* manually center and scale */}
        <Path fill="#4285F4" d="M502.3 254.3c0-16.9-1.5-33.3-4.3-49.1H260v92.9h136.2c-5.9 31.7-23.8 58.5-50.7 76.5v63.5h81.8c47.9-44.1 75-109.3 75-183.8z" />
        <Path fill="#34A853" d="M260 512c67.8 0 124.6-22.5 166.1-61l-81.8-63.5c-22.7 15.3-51.6 24.3-84.3 24.3-64.9 0-119.9-43.7-139.6-102.5H37.8v64.6C79.2 462.3 163.7 512 260 512z" />
        <Path fill="#FBBC04" d="M120.4 309.3c-10.3-30.7-10.3-63.9 0-94.6V150.1H37.8c-36.6 73.2-36.6 160.1 0 233.3l82.6-64.1z" />
        <Path fill="#EA4335" d="M260 203.4c35.9-.5 70.2 12.5 96.5 35.7l72.2-72.2C391.4 123 330.6 96 260 96c-96.3 0-180.8 49.7-222.2 128.2l82.6 64.1C140.1 245.5 195.1 203.4 260 203.4z" />
      </G>
    </Svg>
  );
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require("../assets/top_vector.png")} style={styles.topImage} />
      </View>

      <View>
        <Text style={styles.createAccountText}>Create Account</Text>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome style={styles.inputIcon} name={"user"} size={30} color={"#9A9A9A"} />
        <TextInput style={styles.textInput} placeholder='Username' placeholderTextColor="#9A9A9A" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome style={styles.inputIcon} name={"lock"} size={30} color={"#9A9A9A"} />
        <TextInput
          style={styles.textInput}
          placeholder='Password'
          secureTextEntry={!showPassword}
          placeholderTextColor="#9A9A9A"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={20} color="#9A9A9A" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <AntDesign style={styles.inputIcon} name={"mail"} size={25} color={"#9A9A9A"} />
        <TextInput style={styles.textInput} placeholder='E-mail' placeholderTextColor="#9A9A9A" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome style={styles.inputIcon} name={"mobile"} size={40} color={"#9A9A9A"} />
        <TextInput style={styles.textInput} placeholder='Mobile' placeholderTextColor="#9A9A9A" />
      </View>

      <View>
        <View style={styles.signInButtonContainer}>
          <Text style={styles.signIn}>Sign in</Text>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
            <AntDesign name={"arrowright"} size={24} color={"white"} />
          </LinearGradient>
        </View>
      </View>

      <View style={styles.footercontainer}>
        <Text style={styles.footerText}>Or create account using social media</Text>
        <View style={styles.socialMediaContainer}>
          <FontAwesome5 name={"facebook"} size={30} color={"blue"} style={styles.socialIcons} />
          <FontAwesome6 name={"square-x-twitter"} size={30} color={"black"} style={styles.socialIcons} />
          {/* <Ionicons name={"logo-google"} size={30} color={"blue"} style={styles.socialIcons} /> */}
          {/* <GoogleIcon size={30} style={styles.socialIcons} /> */}
          <View style={styles.socialIcons}>
            <GoogleIcon />
          </View>

        </View>
      </View>


      <View style={styles.bottomVectorContainer}>
        <ImageBackground source={require("../assets/bottom_vector.png")} style={styles.bottomVectorImage} />
      </View>
    </View>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    position: "relative"
  },
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 130
  },
  helloContainer: {
    borderWidth: 0,
  },
  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#262626"
  },
  createAccountText: {
    textAlign: "center",
    fontSize: 30,
    color: "#262626",
    marginBottom: 30,
    fontWeight: "bold"
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 40,
    marginVertical: 20,
    elevation: 10,
    alignItems: "center",
    height: 50
  },
  inputIcon: {
    marginLeft: 15,
    marginRight: 5
  },
  textInput: {
    flex: 1,
    marginLeft: 50,
    fontSize: 20
  },
  forgotPassword: {
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 15
  },
  signInButtonContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "flex-end",
    width: "90%"

  },
  signIn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "right"
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10
  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 15
  },
  bottomVectorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0
  },
  bottomVectorImage: {
    height: 300,
    width: 220
  },
  footercontainer: {
    marginTop: 25,

  },
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  // socialIcons: {
  //   backgroundColor: "white",
  //   elevation: 10,
  //   margin: 10,
  //   padding: 10,
  //   borderRadius: 50
  // },
  socialIcons: {
    backgroundColor: "white",
    elevation: 10,
    marginHorizontal: 8,
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  eyeIcon: {
    position: "absolute",
    right: 20,
    top: 13,
  }
});