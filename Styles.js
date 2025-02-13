import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },

  logo: {
    width: 90,
    height: 23,
  },
  
  h1: {
    fontSize: 20,
    fontFamily: 'Axiforma-Regular',
  },

  search: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },

  
  inputWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  input: {
    height: 40,
  },
  
  languageAndFilter: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#A9B8D4',
    borderRadius: 5,
  },

  language: {
    marginHorizontal: 10,
    fontSize: 16,
  },

  flag: {
    width: 40,
    height: 40,
    borderRadius: 10,
  }, 

  flagWrapper: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 10,
    padding: 10,
  },

  sectionHeader: {
    fontSize: 14,
    marginTop: 10,
    paddingHorizontal: 10,
    color: '#667085',
  },


  // Detail page design
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures proper spacing
    paddingVertical: 10,
  },
  headerText: {
    flex: 1,
    alignItems: 'center',
  },
  detailH1: {
    fontSize: 20,
    fontWeight: 700,
  },
  detailFlag: {
    width: '100%',
    height: 200,

  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  description: {
    marginTop: 20,
  },

  eachDescription: {
    flexDirection: 'row',
  },

  descriptionHeading: {
    fontSize: 16,
    fontWeight: 500,
  },

  descriptionParagraph: {
    fontSize: 16,
    width: '80%',
    fontWeight: 300,
    marginLeft: 10,
  },

  darkMode: {
    backgroundColor: '#101828',
  },
  
  lightMode: {
    backgroundColor: '#FFFFFF',
  },

  lightText: {
    color: '#101828',
    fontWeight: 500,
  },

  darkText: {
    color: '#F2F4F7',
    fontWeight: 500,
  },

  darkSearch: {
    backgroundColor: '#98A2B333',
  },

  lightSearch: {
    backgroundColor: '#F2F4F7',
  },


  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#98A2B3",
    padding: 4,
    borderRadius: 5,
  },

  closeView: {
    justifyContent: "center",
    alignItems: "center",
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  languageItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  languageText: {
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#667085",
    justifyContent: "center",
    alignItems: "center",
  },

  radioBgDark: {
    backgroundColor: 'white',
    height: 12,
    width: 12,
    borderRadius: 10,
  },

  radioBgLight: {
    backgroundColor: '#001637',
    height: 12,
    width: 12,
    borderRadius: 10,
  },

  dropdownHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 15,
  },

  dropdownTextDark: {
    fontSize: 16,
    color: '#D0D5DD',
  },

  dropdownTextLight: {
    fontSize: 16,
    color: '#667085',
  },

  checkboxCircle: {
    height: 18,
    width: 18,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#667085",
    justifyContent: "center",
    alignItems: "center",
  },

  checkBgDark: {
    backgroundColor: '#1C1917',
  },

  checkBgLight: {
    backgroundColor: '#FFFFFF',
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    justifyContent: "space-between",
  },

  resetBtn: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    backgroundColor: "transparent", // Correct way to make background transparent
    borderWidth: 1,
    fontSize: 16,
    fontWeight: 400,
  }, 
  
  darkBtn: {
    color: "#F2F4F7",
    borderColor: "#F2F4F7"
  },

  lightBtn: {
    color: "#1C1917",
    borderColor: "#1C1917"
  },

resultBtn: {
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 5,
    backgroundColor: "#FF6C00CC",
    fontSize: 16,
    fontWeight: 400,
    color: "#F2F4F7",
  }
});

export default styles;