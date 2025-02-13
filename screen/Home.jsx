import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import CountryList from "../component/countryList";
import styles from "../Styles";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "../component/ThemeContext";
import { useFonts } from "expo-font";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");
  const [selectedContinents, setSelectedContinents] = useState([]);
  const [ showContinent, setShowContinent] = useState(false);

  const [selectedTimeZones, setSelectedTimeZones] = useState([]);
  const [ showTimeZone, setShowTimeZone] = useState(false);

  const [fontsLoaded] = useFonts({
    'Axiforma-Regular': require('../assets/fonts/axiforma-regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Can replace with a loading spinner or screen
  }


  const handleSearch = (text) => {
    setSearchValue(text);
  };

  const handleCloseModal = () => {
    setLanguageModalVisible(false);
  };

  const toggleContinentSelection = (code) => {
    setSelectedContinents((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const toggleTimeZoneSelection = (code) => {
    setSelectedTimeZones((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const continent = [
    { name: "Africa", code: "AF" },
    { name: "Antarctica", code: "AN" },
    { name: "Asia", code: "AS" },
    { name: "Europe", code: "EU" },
    { name: "North America", code: "NA" },
    { name: "Oceania", code: "OC" },
    { name: "South America", code: "SA" },
  ];

  const timeZone = [
    { name: "GMT+1:00", code: "GMT+1:00" },
    { name: "GMT +2:00", code: "GMT +2:00" },
    { name: "GMT +3:00", code: "GMT +3:00" },
    { name: "GMT +4:00", code: "GMT +4:00" },
    { name: "GMT +5:00", code: "GMT +5:00" },
    { name: "GMT +6:00", code: "GMT +6:00" },
  ]

  const languageList = [
    { name: "English", code: "En" },
    { name: "French", code: "Fr" },
    { name: "Spanish", code: "Es" },
    { name: "German", code: "De" },
    { name: "Italian", code: "It" },
    { name: "Portuguese", code: "Pt" },
    { name: "Dutch", code: "Nl" },
    { name: "Russian", code: "Ru" },
    { name: "Japanese", code: "Ja" },
    { name: "Chinese", code: "Zh" },
    { name: "Korean", code: "Ko" },
    { name: "Arabic", code: "Ar" },
  ];

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
            theme === "dark" ? styles.darkText : styles.lightText,
          ]}
        >
          Explore
        </Text>

        <Pressable onPress={toggleTheme}>
          {theme === "dark" ? (
            <Feather name="moon" size={24} color="white" />
          ) : (
            <Entypo name="light-up" size={24} />
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
              theme === "dark" ? { color: "#EAECF0" } : { color: "#101828" },
            ]}
            placeholder="Search Country"
            placeholderTextColor={theme === "dark" ? "#EAECF0" : "#667085"}
            value={searchValue}
            onChangeText={handleSearch}
          />
        </View>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.languageAndFilter}
          onPress={() => setLanguageModalVisible(true)}
        >
          <Fontisto
            name="world-o"
            size={20}
            color={theme === "dark" ? "#D0D5DD" : "#1C1917"}
          />

          <Text
            style={[
              styles.language,
              {fontFamily: 'Axiforma-Regular'},
              theme === "dark" ? styles.darkText : styles.lightText,
            ]}
          >
            {selectedLanguage}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.languageAndFilter}
          onPress={() => setFilterVisible(true)}
        >
          <Ionicons
            name="funnel-outline"
            size={20}
            color={theme === "dark" ? "#D0D5DD" : "#1C1917"}
          />
          <Text
            style={[
              styles.language,
              {fontFamily: 'Axiforma-Regular'},
              theme === "dark" ? styles.darkText : styles.lightText,
            ]}
          >
            Filter
          </Text>
        </TouchableOpacity>
      </View>

      <CountryList theme={theme} name={searchValue} />

      {/*language modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={() => handleCloseModal()}
      >
        <View style={styles.modalOverlay}>
          <View 
            style={[
              styles.modalContainer,
              theme === "dark" ? styles.darkMode : styles.lightMode,
            ]}
          >
            <View style={styles.modalHeader}>
              <Text 
                style={[
                  styles.modalText,
                  {fontFamily: 'Axiforma-Regular'},
                  theme === "dark" ? styles.darkText : styles.lightText,
                ]}
              >
                Language
              </Text>

              <View style={styles.closeView}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setLanguageModalVisible(false)}
                >
                  <FontAwesome name="close" size={10} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            {languageList.map((language) => (
              <TouchableOpacity
                key={language.code}
                style={styles.radioContainer}
                onPress={() => {
                  setSelectedLanguage(language.code)
                  setLanguageModalVisible(false);
                }}
              >
                <Text 
                  style={[
                    {fontFamily: 'Axiforma-Regular'},
                    theme === "dark" ? styles.dropdownTextDark : styles.dropdownTextLight,
                  ]}
                >
                  {language.name}
                </Text>

                <View style={styles.radioCircle}>
                  {selectedLanguage === language.code && (
                    <View 
                      style={[
                        theme === "dark" ? styles.radioBgDark : styles.radioBgLight,
                      ]} 
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      {/* filter modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={filterVisible}
      >
        <View style={styles.modalOverlay}>
          <View 
            style={[
              styles.modalContainer,
              theme === "dark" ? styles.darkMode : styles.lightMode,
            ]}
          >
            <View style={styles.modalHeader}>
              <Text 
                style={[
                  styles.modalText,
                  {fontFamily: 'Axiforma-Regular'},
                  theme === "dark" ? styles.darkText : styles.lightText,
                ]}
              >
                Filter
              </Text>

              <View style={styles.closeView}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setFilterVisible(false)}
                >
                  <FontAwesome name="close" size={10} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.dropdownHeader}
              onPress={() => setShowContinent(!showContinent)}
            >
              <Text
                style={[
                  styles.languageText,
                  {fontFamily: 'Axiforma-Regular'},
                  theme === "dark" ? styles.darkText : styles.lightText,
                ]}
              >
                Continent
              </Text>

              <Entypo 
                name={showContinent ? 'chevron-small-up' : 'chevron-small-down'} 
                size={20} 
                color={theme === "dark" ? "#D0D5DD" : "#1C1917"}
              />
            </TouchableOpacity>

            {showContinent === true && (
              <View>
                {continent.map((item) => (
                  <TouchableOpacity
                    key={item.code}
                    style={styles.radioContainer}
                    onPress={() => toggleContinentSelection(item.code)}
                  >
                    <Text 
                      style={[
                        {fontFamily: 'Axiforma-Regular'},
                        theme === "dark" ? styles.darkText : styles.lightText,
                      ]}
                    >
                      {item.name}
                    </Text>

                    <View style={styles.checkboxCircle}>
                      {selectedContinents.includes(item.code) && (
                        <View 
                          style={[
                            theme === "dark" ? styles.checkBgLight : styles.checkBgDark,
                          ]}
                          >
                          <Feather name="check" size={15} color={theme === "dark" ? "#1C1917" : "#FFFFFF"} />
                        </View> 
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <TouchableOpacity 
              style={styles.dropdownHeader}
              onPress={() => setShowTimeZone(!showTimeZone)}
            >
              <Text
                style={[
                  styles.languageText,
                  {fontFamily: 'Axiforma-Regular'}, 
                  theme === "dark" ? styles.darkText : styles.lightText,
                ]}
              >
                Time Zone
              </Text>

              <Entypo 
                name={showTimeZone ? 'chevron-small-up' : 'chevron-small-down'} 
                size={20} 
                color={theme === "dark" ? "#D0D5DD" : "#1C1917"}
              />
            </TouchableOpacity>

            {showTimeZone === true && (
              <View>
                {timeZone.map((item) => (
                  <TouchableOpacity
                    key={item.code}
                    style={styles.radioContainer}
                    onPress={() => toggleTimeZoneSelection(item.code)}
                  >
                    <Text 
                      style={[
                        {fontFamily: 'Axiforma-Regular'},,
                        theme === "dark" ? styles.darkText : styles.lightText,
                      ]}
                    >
                      {item.name}
                    </Text>

                    <View style={styles.checkboxCircle}>
                      {selectedTimeZones.includes(item.code) && (
                        <View 
                          style={[
                            theme === "dark" ? styles.checkBgLight : styles.checkBgDark,
                          ]}
                          >
                          <Feather name="check" size={15} color={theme === "dark" ? "#1C1917" : "#FFFFFF"} />
                        </View> 
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedContinents([]);
                  setSelectedTimeZones([]);
                  setShowContinent(false);
                  setShowTimeZone(false);
                  setFilterVisible(false);
                }}
              >
                <Text 
                  style={[
                    styles.resetBtn,
                    {fontFamily: 'Axiforma-Regular'},
                    theme === "dark" 
                    ? styles.darkBtn 
                    : styles.lightBtn,
                  ]}
                >
                  Reset
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text 
                  style={[
                    styles.resultBtn,
                    {fontFamily: 'Axiforma-Regular'},
                  ]}
                >
                  Show results
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
