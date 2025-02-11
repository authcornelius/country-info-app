import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from '../Styles'
import AntDesign from "react-native-vector-icons/AntDesign";
import { useGetStatesQuery } from '../redux/slices/countriesApiSlice';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../component/ThemeContext';

const Detail = ({ route }) => {
    const { theme } = useTheme();
    
    const { country } = route.params;
    const navigation = useNavigation();
    
    const { data, isLoading } = useGetStatesQuery(country.name);

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const handleGoBack = () => {
        navigation.goBack();
    };

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
                {country.name}
            </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.detailFlag}>
            <Image source={{ uri: country.href.flag }} style={styles.image} />
        </View>

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
                    {country.full_name}
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
                    {country.capital}
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
                    {country.population}
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
                    {country.phone_code}
                </Text>
            </View>

        </View>

        <View style={styles.description}>
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
                    {country.continent}
                </Text>
            </View>

            <View style={styles.eachDescription}>
                <Text 
                    style={[ 
                        styles.descriptionHeading,
                        theme === "dark" ? { color: '#F2F4F7'} : { color: '#1C1917'}
                    ]}
                >
                    President: 
                </Text>
                <Text 
                    style={[
                        styles.descriptionParagraph,
                        theme === "dark" ? { color: '#F2F4F7'} : { color: '#000000'}
                    ]}
                >
                    {country.current_president?.name}
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
                    {country.currency}
                </Text>
            </View>


            <View style={styles.eachDescription}>
                <Text 
                    style={[ 
                        styles.descriptionHeading,
                        theme === "dark" ? { color: '#F2F4F7'} : { color: '#1C1917'}
                    ]}
                >
                    All states: 
                </Text>
                <Text 
                    style={[
                        styles.descriptionParagraph,
                        theme === "dark" ? { color: '#F2F4F7'} : { color: '#000000'}
                    ]}
                >
                    {data?.data?.map((item) => item.name).join(', ')}
                </Text>
            </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default Detail