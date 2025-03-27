import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const SearchBar = ({
  placeholder,
  onPress,
}: {
  placeholder: string;
  onPress: () => void;
}) => {
  return (
    <View className="flex items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        resizeMode="contain"
        tintColor={"#ab8bff"}
        className="size-5"
        alt={"search"}
      />
      <TextInput
        onPress={() => {}}
        placeholder="Search"
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
      <Text className="text-white">SearchBar</Text>
    </View>
  );
};

export default SearchBar;
