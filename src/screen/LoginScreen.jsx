import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);


  const handleRegister = () => {
    navigation.navigate("SignupScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require("../assets/top_vector.png")} style={styles.topImage} />
      </View>

      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello!</Text>
      </View>

      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome style={styles.inputIcon} name={"user"} size={30} color={"#9A9A9A"} />
        <TextInput style={styles.textInput} placeholder='Email' placeholderTextColor="#9A9A9A"/>
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


      <View>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <View style={styles.signInButtonContainer}>
          <Text style={styles.signIn}>Sign in</Text>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
            <AntDesign name={"arrowright"} size={24} color={"white"} />
          </LinearGradient>
        </View>
      </View>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}>Don't have an  account?<Text style={{ textDecorationLine: "underline" }}>Create</Text></Text>
      </TouchableOpacity>

      <View style={styles.bottomVectorContainer}>
        <ImageBackground source={require("../assets/bottom_vector.png")} style={styles.bottomVectorImage} />
      </View>
    </View>
  )
}

export default LoginScreen;

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
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626",
    marginBottom: 30
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
    fontSize: 20,
    color: "black"
  },
  forgotPassword: {
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 15
  },
  signInButtonContainer: {
    flexDirection: "row",
    marginTop: 100,
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
    fontSize: 15,
    marginTop: 120
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
  eyeIcon: {
    position: "absolute",
    right: 20,
    top: 13,
  }
  
});