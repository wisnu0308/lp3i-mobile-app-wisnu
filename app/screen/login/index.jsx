import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import { MyButton } from "../../components";
import { ICGoogle, ICFacebook} from '../../../assets';
import {navigation } from "@react-navigation/native"

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [pass, onChangePassword] = React.useState("");
  const username = 'zakywisnu';
  const passwordd = 321;

  const onSubmitLogin = () => {
    try {

    if (email == username && pass == passwordd) {
      navigation.navigate("Home");
    } else {
      alert('email or Password is Wrong')
    }
  } catch (err) {
    Alert.alert("Error", err.message, [
      {
        text: "OK",
        onPress:() => {
          console.log("ERR");
        },
      },
    ]);
  }
  };

  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 400 }}>
          <ImageBackground
            source={require("../../../assets/images/Subtract.png")}
            resizeMode="cover"
            style={{ width: windowWidth, height: 400 }}
          >
            <View style={style.brandStyle}>
              <Image source={require("../../../assets/images/Brand.png")} />
            </View>

            <Text style={style.textLoginStyle}>Login</Text>
          </ImageBackground>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}>Email</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder="type username or email"
            placeholderTextColor="#c7c7c7"
            value={email}
          />

          <Text style={[style.textLabel, { marginTop: 20 }]}>Password</Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangePassword}
            placeholder="type your password"
            placeholderTextColor="#c7c7c7"
            value={pass}
          />

          <Button onPress={onSubmitLogin} color="green" title="Login" />
        </View>      
          <Text style={style.textContinueStyle}>Or Continue With</Text>
        <View style= {style.btnContainer}>
        <MyButton
        Text= "Google"
        imgUrl= {ICGoogle} />
        <MyButton
        Text= "Facebook"
        imgUrl= {ICFacebook}
        style= {{ marginLeft: 30}}
        />
        </View>
        <View style={style.textAccount}>
          <Text>Don't Have Account?</Text>
          <Text style={{fontWeight:'bold'}}>Create Now!!!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLoginStyle: {
    fontSize: 32,
    marginTop: 150,
    fontWeight: "bold",
    textAlign: "center",
  },
  brandStyle: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 20,

  },
  textContinueStyle: {
    textAlign: "center",
    padding: 8
  },
  textAccount: {
    alignItems: "center",
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  }

});
