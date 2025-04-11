import MovieCard from "@/components/movieCard";
import { images } from "@/constants/images";
import useFetch from "@/services/usefetch";
import { fetchMovies } from "@/services/api";
import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

const Search = () => {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-[#000]">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      ></Image>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
      />
      <Text>gooo</Text>
    </View>
  );
};

export default Search;
