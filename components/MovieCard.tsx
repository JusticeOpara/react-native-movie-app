import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface MovieItemsProps {
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  id: string;
}

const MovieCard = ({
  id,
  vote_count,
  vote_average,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
}: MovieItemsProps) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `http://via.placeholder.com/600*400/1a1a1a/ffffff.png`,
          }}
          className="w-[100%] h-52 rounded-lg"
          alt="poster image"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex flex-row justify-start items-center gap-x-1">
          <Image source={icons.star} className="size-4" alt="star-icon" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="text-xs text-light-300 font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text className="text-xs font-medium text-light-300 uppercase">
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
