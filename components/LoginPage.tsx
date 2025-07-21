// import { useState } from "react";
// import { Alert } from "react-native";

// const LoginScreen = () => {

//     const [email,setemail] = useState("");
//     const [password,setpassword] = useState("");

//     const handlelogin = async () =>{
//         if(email && password){
//             try{
//                 const response = await fetch("http://localhost:3001/Authorization",{
//                     method:'POST',
//                     headers: {
//                         "Content-Type":"application/json"
//                     },
//                     body:JSON.stringify({
//                         email: email,
//                         password: password
//                     })
//                 },);
//                 const result = await response.json();

//                 if(response.ok){
//                     Alert.alert("login successful", result.message);
//                     //later add the navigate once the backend and the database is ready to encrypt the message and send it back
//                 }else{
//                     Alert.alert("login failed", result.message)
//                 }
//             }catch(err){
//                 console.error("there was an error login in", err);
//                 Alert.alert("something went wrong");
//             }
//         }
//         else{
//             Alert.alert("please fill in the information to login")
//         }
//     }

//     return(
//         <view>
//             <input
//             type="email"
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//             placeholder="email"
//             >
//             </input>
//             <input
//             type="password"
//             value={password}
//             onChange={(e) => setpassword(e.target.value)}
//             placeholder="password"
//             >
//             </input>
//             <button
//             onClick={handlelogin}
//             >
//                 login
//             </button>
//         </view>
//     )
// };

// export default LoginScreen;

import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await fetch("http://localhost:3001/Authorization", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        });

        const result = await response.json();

        if (response.ok) {
          Alert.alert("Login successful", result.message);
        } else {
          Alert.alert("Login failed", result.message);
        }

      } catch (err) {
        console.error("Login error", err);
        Alert.alert("Error", "Something went wrong");
      }
    } else {
      Alert.alert("Please fill in both email and password");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginVertical: 10, borderRadius: 5 }
});

export default LoginScreen;
