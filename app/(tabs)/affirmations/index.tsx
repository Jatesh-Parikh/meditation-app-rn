import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";
import { StatusBar } from "expo-status-bar";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false} className="my-12">
          <Text className="text-zinc-50 text-2xl font-bold">
            Change your beliefs with powerful affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default Affirmations;
