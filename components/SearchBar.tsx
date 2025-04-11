import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const SearchBar = ({
  placeholder,
  onPress,
  value,
  onChangeText,
}: {
  placeholder: string;
  onPress?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}) => {
  return (
    <View className="flex-row flex items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        resizeMode="contain"
        tintColor={"#ab8bff"}
        className="size-5"
        alt={"search"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
     
    </View>
  );
};

export default SearchBar;
