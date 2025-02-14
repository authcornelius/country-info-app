import { View, Text, Image, SectionList, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../Styles';
import { useGetCountriesQuery, useGetCountryByNameQuery, useGetCountryByRegionQuery, } from '../redux/slices/countriesApiSlice';
import { useNavigation } from '@react-navigation/native';

const groupCountriesByLetter = (countries) => {
    if (!countries || !Array.isArray(countries)) {
        return [];
    }

    const groupedData = {};

    countries.forEach((country) => {
        const firstLetter = country?.name?.common.charAt(0)?.toUpperCase();
        if (!groupedData[firstLetter]) {
            groupedData[firstLetter] = [];
        }
        groupedData[firstLetter].push(country);
    });

    return Object.keys(groupedData).sort().map((letter) => ({
        title: letter,
        data: groupedData[letter],
    }));
};

const CountryList = ({ theme, name, region }) => {
    const navigation = useNavigation();
    
    let queryHook;
    
    if (name) {
        queryHook = useGetCountryByNameQuery(name);
    } else if (region?.[0]) {
        queryHook = useGetCountryByRegionQuery(region);
    } else {
        queryHook = useGetCountriesQuery();
    }
    
    const { data, isLoading } = queryHook;

    if (isLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    // Handle both single object and array responses
    const countriesArray = Array.isArray(data) ? data : [data];
    const sections = groupCountriesByLetter(countriesArray);

    return (
        <SectionList
            sections={sections}
            style={{ marginTop: 20 }}
            keyExtractor={(item, index) => item.iso3 ? item.iso3 : `key-${index}`}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionHeader}>{title}</Text>
            )}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Detail', { country: item })}
                >
                    <View style={styles.flagWrapper}>
                        <Image source={{ uri: item?.flags.png }} style={styles.flag} />
                        <View style={{ marginLeft: 10 }}>
                            <Text 
                                style={[
                                    { fontWeight: 'bold', fontFamily: 'Axiforma-Regular', fontSize: 14 },
                                    theme === 'dark' ? { color: '#F2F4F7' } : { color: '#1C1917' },
                                ]}
                            >
                                {item?.name?.common}
                            </Text>

                            <Text 
                                style={[
                                    {color: '#667085', fontFamily: 'Axiforma-Regular',},
                                    theme === 'dark' ? { color: '#98A2B3' } : { color: '#667085' },
                                ]}
                            >
                                {item?.capital?.[0]}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default CountryList;
