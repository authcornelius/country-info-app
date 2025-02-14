import { ActivityIndicator, Dimensions, Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from '../Styles'
import AntDesign from "react-native-vector-icons/AntDesign";
import { useGetStatesQuery } from '../redux/slices/countriesApiSlice';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../component/ThemeContext';
import Animated, { 
    useAnimatedScrollHandler,
    useSharedValue,
    useAnimatedStyle
} from 'react-native-reanimated';
import { useFonts } from 'expo-font';

const Detail = ({ route }) => {
    const { width } = Dimensions.get('window');  // Get the screen width

    const { theme } = useTheme();
    
    const { country } = route.params;
    
    const navigation = useNavigation();

    
    const [fontsLoaded] = useFonts({
        'Axiforma-Regular': require('../assets/fonts/axiforma-regular.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Can replace with a loading spinner or screen
    }
    
    const { data, isLoading } = useGetStatesQuery(country?.name?.common);
    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const handleGoBack = () => {
        navigation.goBack();
    };

    const renderCarouselItem = ({ item, index }) => {
        return (
          <View style={{
            width: width - 40,
            height: 200,
            marginHorizontal: 10,
            borderRadius: 10,
            overflow: 'hidden'
          }}>
            <Image 
              source={{ uri: item.image }}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover'
              }}
            />
            <View style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              right: 20,
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: 10,
              borderRadius: 8
            }}>
              <Text style={{ color: 'white', fontSize: 16 }}>{item.title}</Text>
            </View>
          </View>
        );
    };

    const name = country?.name?.common || '';
    const flag = country?.flags?.png || '';
    const coatOfArms = country?.coatOfArms?.png || '';
    const capital = country?.capital || [];
    const region = country?.region || '';
    const population = country?.population || 'not available';
    const area = country?.area || 'not available';
    const currencies = country?.currencies 
  ? Object.values(country.currencies)[0]?.name || 'not available' 
  : 'not available';

  const imageData = [
        {
            id: '1',
            image: flag,
            title: `Flag of ${name}`
        },
        {
            id: '2',
            image: coatOfArms,
            title: `Coat of Arms of ${name}`
        }
    ];

  return (
    <View 
        style={[
        styles.container,
        theme === "dark" ? styles.darkMode : styles.lightMode,
        ]}
    >
        <View style={styles.header}>
            <AntDesign 
                name="arrowleft" 
                size={24} 
                onPress={handleGoBack}
                color={theme === "dark" ? "white" : "black"}
            />

            <View style={styles.headerText}>
                <Text 
                    style={[
                        styles.detailH1,
                        theme === "dark" ? { color: '#EAECF0'} : { color: '#1C1917'}
                    ]}
                >
                    {name}
                </Text>
            </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20, }}>

            <Animated.FlatList
                data={imageData}
                renderItem={renderCarouselItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToInterval={width - 20}
                decelerationRate="fast"
                bounces={false}
                style={{ marginVertical: 10 }}
            />

            <View style={styles.description}>
                <View style={styles.eachDescription}>
                    <Text 
                        style={[ 
                            styles.descriptionHeading,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#1C1917'}
                        ]}
                    >
                        Name: 
                    </Text>

                    <Text 
                        style={[
                            styles.descriptionParagraph,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#000000'}
                        ]}
                    >
                        {name}
                    </Text>
                </View>

                <View style={styles.eachDescription}>
                    <Text 
                        style={[ 
                            styles.descriptionHeading,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#1C1917'}
                        ]}
                    >
                        Capital city: 
                    </Text>
                    <Text 
                        style={[
                            styles.descriptionParagraph,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#000000'}
                        ]}
                    >
                        {capital}
                    </Text>
                </View>

                <View style={styles.eachDescription}>
                    <Text 
                        style={[ 
                            styles.descriptionHeading,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#1C1917'}
                        ]}
                    >
                        Population: 
                    </Text>
                    <Text 
                        style={[
                            styles.descriptionParagraph,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#000000'}
                        ]}
                    >
                        {population}
                    </Text>
                </View>


                <View style={styles.eachDescription}>
                    <Text 
                        style={[ 
                            styles.descriptionHeading,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#1C1917'}
                        ]}
                    >
                        Country code: 
                    </Text>
                    <Text 
                        style={[
                            styles.descriptionParagraph,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#000000'}
                        ]}
                    >
                        {area}
                    </Text>
                </View>

            </View>

                <View style={styles.eachDescription}>
                    <Text 
                        style={[ 
                            styles.descriptionHeading,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#1C1917'}
                        ]}
                    >
                        Continent: 
                    </Text>
                    <Text 
                        style={[
                            styles.descriptionParagraph,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#000000'}
                        ]}
                    >
                        {region}
                    </Text>
                </View>
                
                <View style={styles.eachDescription}>
                    <Text 
                        style={[ 
                            styles.descriptionHeading,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#1C1917'}
                        ]}
                    >
                        Currency: 
                    </Text>
                    <Text 
                        style={[
                            styles.descriptionParagraph,
                            theme === "dark" ? { color: '#F2F4F7'} : { color: '#000000'}
                        ]}
                    >
                        {currencies}
                    </Text>

                </View>
        </ScrollView>
    </View>
  )
}

export default Detail