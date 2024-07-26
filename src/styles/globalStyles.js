import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#4A90E2',
  secondary: '#F5A623',
  background: '#F5F5F5',
  text: '#333333',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
  },
  // Add more global styles as needed
});