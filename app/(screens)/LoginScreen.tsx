import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
    // Add login logic here
  };

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center px-6">
      <Text className="text-3xl font-extrabold text-brand mb-6">Welcome Back</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#9CA3AF" // cool-gray
        value={email}
        onChangeText={setEmail}
        className="w-full bg-white px-4 py-3 mb-4 border border-gray-300 rounded-lg"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-full bg-white px-4 py-3 mb-6 border border-gray-300 rounded-lg"
      />
      <TouchableOpacity
        onPress={handleLogin}
        className="w-full bg-brand py-3 items-center rounded-lg active:bg-brand-dark"
      >
        <Text className="text-white font-bold text-lg">Login</Text>
      </TouchableOpacity>
      <View className="absolute bottom-8">
        <Text className="text-gray-500">Don't have an account? Sign up here.</Text>
      </View>
    </View>
  );
}