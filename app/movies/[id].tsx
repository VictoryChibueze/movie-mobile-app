import { fetchMoviesDetails } from "@/services/api";
import useFetch from "@/services/usefetch";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Image, StatusBar,TouchableOpacity } from "react-native";
import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";
interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}
const MovieInfo = ({ label, value }: MovieInfoProps) => {
  return (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-white font-normal text-sm">{label}</Text>
      <Text className="text-white font-bold text-sm mt-2">
        {value || "N/A"}
      </Text>
    </View>
  );
};
const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const router = useRouter()

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

            <View className="flex-col items-start gap-x-1 mt-2">
              <Text className="text-gray-400 text-sm">
                {movie?.release_date?.split("-")[0]}
                {"  "}
                <Text className="text-gray text-sm ">{movie?.runtime}m</Text>
              </Text>
              <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1">
                <Image source={icons.star} className="size-4" />
                <Text className="text-white font-bold text-sm">
                  {Math.round(movie?.vote_average ?? 0)}/10
                </Text>
                <Text className="text-light text-sm">
                  ({movie?.vote_count}votes)
                </Text>
              </View>
              <MovieInfo label="Overview" value={movie?.overview} />
              <MovieInfo label="Genres" value={movie?.genres?.map((g)=>g.name).join(" - ")|| 'N/A'} />
                <View className="flex flex-row justify-between w-1/2">
                <MovieInfo label ="Budget" value={`$${movie?.budget/1_000_000} Miliions`}/>
                <MovieInfo label="Revenue" value = {`$${Math.round(movie?.revenue)/1_000_000}`}/>
                </View>
                <MovieInfo label="Production Companies" value = {movie?.production_companies.map((c)=>c.name).join(" - ")|| "N/A"}/>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress ={router.back}className="absolute bottom-5 left-0 right-0 mx-5 bg-purple-500 rounded-lg py-3.5 flex flex-row items-center justify-center z-50"> 
        <Image source={icons.arrow} className = "mr-1 mt-0.5 rotate-180" tintColor="#fff"/>
        <Text className="text-white font-semibold">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
