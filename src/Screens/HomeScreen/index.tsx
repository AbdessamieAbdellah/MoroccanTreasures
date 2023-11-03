import '@azure/core-asynciterator-polyfill';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Alert, ActivityIndicator } from 'react-native';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { DataStore } from '@aws-amplify/datastore';
import { Product } from '../../models';
import SearchBar from '../../Components/SearchBar/SearchBar';
import HeaderTab from '../../Components/HeaderTab/HeaderTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomAlert from '../../Components/CustomAlert/CustomAlert';

const HomeScreen = ({ searchValue }: { searchValue: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState("🇲🇦 Stock");
  const [searchInput, setSearchInput] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false); // Manage visibility
  
  const [showCustomAlert, setShowCustomAlert] = useState(false);
  const [alertShown, setAlertShown] = useState(false);

if(products.length < 0){
  return <ActivityIndicator/>;
}

  const filteredProducts = activeTab === "🇲🇦 Stock"
    ? products.filter(item => item.description.includes("MA"))
    : products.filter(item => item.description.includes("US"));

  // Filter products based on the search input in the title property
  const searchedProducts = filteredProducts.filter(item =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );



  useEffect(() => {
    const fetchProducts = async () => {
      const results = await DataStore.query(Product);
      setProducts(results);
    }
    fetchProducts();
    if (!alertShown) {
      setShowCustomAlert(true);
      setAlertShown(true);
    }
   
  }, [products, activeTab, alertShown]);
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <View style={styles.headerCenter}>
          <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => setShowSearchBar(!showSearchBar)} // Toggle the SearchBar visibility
        >
          <Ionicons name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      {showSearchBar && (
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      )}
      <FlatList
        data={searchedProducts}
        renderItem={({ item }) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:40}}
      />
        <CustomAlert
        visible={showCustomAlert}
        title='Shipping Notice'
        message="Please note that all products coming from Morocco may take up to 10 business days to arrive at your location. We appreciate your patience and understanding as we work to deliver high-quality products to you ❤️"
        onPrimaryButtonPress={() => setShowCustomAlert(false)}
        primaryButtonTitle="I agree"
        // animationType="slide"
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerCenter: {
    flex: 1, // Take up the available space to center HeaderTab
    alignItems: 'center',
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#ff6347',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default HomeScreen;
