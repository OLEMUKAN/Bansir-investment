import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={require('../assets/user-avatar.png')}
          style={styles.avatar}
        />
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hello,</Text>
      <Text style={styles.name}>dastagir</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search your service..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Ongoing Service */}
      <TouchableOpacity style={styles.ongoingService}>
        <View>
          <Text style={styles.ongoingTitle}>Ongoing</Text>
          <Text style={styles.serviceName}>Personal Loan</Text>
          <Text style={styles.serviceProgress}>2/5 Documents Submitted</Text>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../assets/loan-icon.png')}
          style={styles.serviceIcon}
        />
      </TouchableOpacity>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryTabs}>
          <TouchableOpacity style={styles.categoryTabActive}>
            <Text style={styles.categoryTextActive}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Text style={styles.categoryText}>Loans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Text style={styles.categoryText}>Savings</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.serviceCard}>
            <Image
              source={require('../assets/business-loan-icon.png')}
              style={styles.serviceCardIcon}
            />
            <Text style={styles.serviceCardTitle}>Business Loans</Text>
            <Text style={styles.serviceCardDesc}>30 Day Terms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceCard}>
            <Image
              source={require('../assets/savings-icon.png')}
              style={styles.serviceCardIcon}
            />
            <Text style={styles.serviceCardTitle}>Savings Account</Text>
            <Text style={styles.serviceCardDesc}>High Interest</Text>
          </TouchableOpacity>
          {/* Add more service cards as needed */}
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="play-circle" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 24,
    color: '#888',
    marginTop: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ongoingService: {
    backgroundColor: '#4A90E2',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ongoingTitle: {
    color: '#fff',
    opacity: 0.8,
  },
  serviceName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  serviceProgress: {
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  continueText: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  serviceIcon: {
    width: 60,
    height: 60,
  },
  servicesSection: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#4A90E2',
  },
  categoryTabs: {
    flexDirection: 'row',
    marginTop: 15,
  },
  categoryTab: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  categoryTabActive: {
    backgroundColor: '#4A90E2',
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  categoryText: {
    color: '#888',
  },
  categoryTextActive: {
    color: '#fff',
  },
  serviceCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 20,
    marginRight: 15,
    marginTop: 15,
    width: 150,
  },
  serviceCardIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  serviceCardTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceCardDesc: {
    color: '#888',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default HomeScreen;
