import { fetchMoviesDetails } from "@/services/api";
import useFetch from "@/services/usefetch";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Image, StatusBar } from "react-native";

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
          <View className=""></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
