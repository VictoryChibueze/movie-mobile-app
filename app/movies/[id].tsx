import { fetchMoviesDetails } from "@/services/api";
import useFetch from "@/services/usefetch";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Image, StatusBar } from "react-native";
import { icons } from "@/constants/icons";
const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMoviesDetails(id as string)
  );

  return (
    <View className="flex-1 bg-[#000]">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
          <View className="flex-col items-start justify-center mt-5 px-5">
            <Text className="text-white text-xl">{movie?.title}</Text>

            <View className="flex-row items-center gap-x-1 mt-2">
              <Text className="text-gray-400 text-sm">
                {movie?.release_date?.split("-")[0]}
                {"  "}
                <Text className="text-gray text-sm ">{movie?.runtime}m</Text>
              </Text>
              <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1">
                <Image source={icons.star} className="size-4" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
