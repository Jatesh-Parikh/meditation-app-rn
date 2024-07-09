import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-center text-white text-3xl font-bold">
                Simple Meditation
              </Text>
              <Text className="text-center text-gray-100 text-regular text-lg mt-3">
                Simplifying Meditation for everyone
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => console.log("tap")}
                title="Get Started"
              ></CustomButton>
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
