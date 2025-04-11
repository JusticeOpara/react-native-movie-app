import { bg } from "@/assets/images";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import { useState } from "react";

export default function Index() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: searchQuery,
    })
  );
  return (
    <View className="flex-1 bg-primary ">
      <Image source={bg} className="absolute w-full z-0" alt="background" />
      <ScrollView
        className="flex px-5"
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"
          alt="logo"
        />
        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color={"#000FF"}
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text> Errors: {moviesError.message} </Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />

            <>
              <Text className="text-white text-lg font-bold mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => (
                  <>
                    <MovieCard {...item} key={item} />
                  </>
                )}
                keyExtractor={({ item }) => item?.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "center",
                  gap: 20,
                  padding: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              ></FlatList>
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
