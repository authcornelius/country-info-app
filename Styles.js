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
  
  h1: {
    fontSize: 20,
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
});

export default styles;