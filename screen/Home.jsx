import React, { useState } from "react";
import { Text, TextInput, View, Pressable, Appearance } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import CountryList from "../component/countryList";
import styles from "../Styles";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "../component/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (text) => {
    setSearchValue(text);
  };

  return (
    <View 
      style={[
        styles.container,
        theme === "dark" ? styles.darkMode : styles.lightMode,
      ]}
    >
      <View style={styles.grid}>
        <Text 
          style={[
            styles.h1,
            theme === "dark" ? styles.darkText : styles.lightText
          ]}
        >Explore</Text>

        <Pressable onPress={toggleTheme}>
          {theme === "dark" ? (
            <Feather 
              name="moon" 
              size={24} 
              color="white" 
            />
          ) : (
            <Entypo 
              name="light-up" 
              size={24} 
            />
          )}
        </Pressable>
      </View>

      <View 
        style={[
          styles.search,
          theme === "dark" ? styles.darkSearch : styles.lightSearch,
        ]}
      >
        <EvilIcons 
          name="search" 
          size={24} 
          color={theme === "dark" ? "#EAECF0" : "#101828"}
        />
        <View style={styles.inputWrapper}>
        <TextInput 
          style={[
            styles.input,
            theme === "dark" ? { color: '#EAECF0' } : { color: '#101828' }
          ]} 
          placeholder="Search Country"
          placeholderTextColor={theme === "dark" ? "#EAECF0" : "#667085"}
          value={searchValue}
          onChangeText={handleSearch}
        />
        </View>
      </View>

      <View style={styles.grid}>
        <View style={styles.languageAndFilter}>
          <Fontisto 
            name="world-o" 
            size={20} 
            color={theme === "dark" ? "#D0D5DD" : "#1C1917"}
          />

          <Text 
            style={[
              styles.language,
              theme === "dark" ? styles.darkText : styles.lightText
            ]}
          >
            En
          </Text>
        </View>

        <View style={styles.languageAndFilter}>
          <Ionicons 
            name="funnel-outline" 
            size={20} 
            color={theme === "dark" ? "#D0D5DD" : "#1C1917"}
          />
          <Text 
            style={[
              styles.language,
              theme === "dark" ? styles.darkText : styles.lightText
            ]}
          >
            Filter
          </Text>
        </View>
      </View>

      <CountryList theme={theme} name={searchValue} />
    </View>
  );
}
