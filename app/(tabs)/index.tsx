import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useEffect";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();
  
  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => fetchMovies({ query: '' }))

  // Header component to render at the top of FlatList
  const renderHeader = () => (
    <>
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      {moviesLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="mt-10 self-center"
        />
      ) : moviesError ? (
        <Text>Error: {moviesError?.message}</Text>
      ) : (
        <View className="mt-5">
          <SearchBar
            value=""
            onChangeText={() => {}}
            onPress={() => router.push("/search")}
            placeholder="Search for movies, series, etc."
          />
          <Text className="text-white text-lg font-bold mt-5 mb-3">Trending Movies</Text>
        </View>
      )}
    </>
  );

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"/>
      
      <FlatList
        className="mt-2 pb-32"
        data={moviesLoading || moviesError ? [] : movies}
        renderItem={({ item }) => (
          <MovieCard
            {...item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{ 
          justifyContent: "flex-start", 
          gap: 20,
          paddingRight: 5,
          marginBottom: 10
        }}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      />
    </View>
  );
}