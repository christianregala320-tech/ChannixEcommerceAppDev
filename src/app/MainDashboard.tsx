import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView
} from "react-native";
import React, { useState } from 'react';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";


import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";


import styles from "../styles/MainDashboardStyles";
import Categories from './Categories';
import Index from './index';
import AddProducts from "./addProduct";



export default function MainDashboard() {
  const [openCategories, setOpenCategories] = useState(false);
  const [backHome, setHome] = useState(false);
  const [openAddProduct, setOpenAddProduct] = useState(false);



  const [fontsLoaded] = useFonts({

    PoppinsRegular: Poppins_400Regular,

    PoppinsMedium: Poppins_500Medium,

    PoppinsSemiBold: Poppins_600SemiBold,

    PoppinsBold: Poppins_700Bold

  });



  if (!fontsLoaded) {
    return null;
  }

  if(openCategories) {
    return <Categories/>;
  }
  if(backHome) {
    return <Index/>;
  }
  if(openAddProduct) {
    return <AddProducts/>;
  }



  return (

    <ScrollView style={styles.bodyMain}>


      {/* HEADER */}

      <View style={styles.headerMainDashboard}>


        <View>

          <Text style={styles.logoText}>
            
                <Pressable style = {{
                     backgroundColor: "#FFF0DF",
                     padding: 12,
                     borderRadius: 50,
                     cursor: 'pointer',
                     marginRight: 10
                }} onPress={() => setHome(true)}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={24}
                        color="black"
                    />
                </Pressable>

            <Text style={styles.spanText}>
              Chanixx
            </Text>


            <Text style={styles.spanText2}>
              {" "}Online Shop
            </Text>

          </Text>


          <Text style={styles.headerTextGray}>
            Shop Smart, Live Better
          </Text>


        </View>




        <View style={styles.headerMainDashboardRightSec}>


          <Ionicons

            name="cart"

            size={30}

            color="#FF8C00"

          />



          <View style={styles.circleImageProfile}>


          </View>


        </View>



      </View>



      {/* SEARCH BAR */}


      <View style={styles.SearchSection}>


        <View style={styles.SearchBox}>


          <Ionicons

            name="search-outline"

            size={22}

            color="#777"

          />



          <TextInput

            placeholder="Search products..."

            placeholderTextColor="#777"

            style={styles.SearchInput}

          />


        </View>


      </View>





      {/* PROMO BANNER */}


      <LinearGradient


        colors={[

          "#FFF1E0",

          "#FFE8CC",

          "#FFD9B0"

        ]}


        start={{
          x: 0,
          y: 0
        }}


        end={{
          x: 1,
          y: 1
        }}


        style={styles.banner}



      >


        <View style={styles.bannerContent}>


          <Text style={styles.bannerTitle}>

            Find Your 

          </Text>


          <Text style={styles.bannerTitleOrange}>

            Favorites

          </Text>



          <Text style={styles.bannerDescription}>

            Quality products at{"\n"}

            affordable prices.

          </Text>



          <View style={styles.shopButton}>


            <Text style={styles.shopButtonText}>

              Shop Now

            </Text>


          </View>


        </View>



      </LinearGradient>

      <View style={styles.IconsRow}>

        <View style={styles.IconsBox}>
          <View style={styles.shirtCircleBox}>
            <Ionicons name="shirt" size={24} color="#FD7E02" />
          </View>
          <Text style={styles.TextIconsBox}>Fashion</Text>
        </View>

        <View style={styles.IconsBox}>

          <View style={styles.phoneCircleBox}>
            <Ionicons name="phone-portrait-outline" size={24} color="#FF6B7A" />
          </View>
          <Text style={styles.TextIconsBox}>Electronics</Text>

        </View>

        <View style={styles.IconsBox}>



          <View style={styles.homeCircleBox}>
            <Ionicons name="home" size={24} color="#199662" />
          </View>
          <Text style={styles.TextIconsBox}>Home</Text>

        </View>

        <View style={styles.IconsBox}>

          <View style={styles.moreCircleBox}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#1F84FB" />
          </View>
          <Text style={styles.TextIconsBox}>More</Text>

        </View>





      </View>

      <View style={styles.FeaturedProductHeader} >
        <Text style={styles.BoldText}>Featured Products</Text>
        <Text style={styles.BoldTextOrange}>See All <Ionicons name="chevron-forward" size={16} color="#FF7A00" /></Text>
      </View>


      <View style={styles.ProductsSection}>
        <View style={styles.ProductsSectionRow}>

       


          <View style={styles.ProductsContainer}>

            <View style={styles.BackgroundImageColor}>
              <View style={styles.productImageBox}>
                <Image source={require("../../images/Watch.png")} resizeMode="contain" style={styles.ImageProductImage}>
                </Image>
              </View>
            </View>


            


            <View style={styles.productDetails}>
              <Text style={styles.productDetailsMainText}>Mini Android Watch</Text>
              <Text style={styles.productDetailsPriceText}>₱789</Text>
              <Pressable style={styles.AddToCartBtn}><Text style={styles.AddToCartBtnText}>Add to Cart</Text></Pressable>
            </View>
          </View>

             <View style={styles.ProductsContainer}>

            <View style={styles.BackgroundImageColor}>
              <View style={styles.productImageBox}>
                <Image source={require("../../images/Airpods.png")} resizeMode="contain" style={styles.ImageProductImage}>
                </Image>
              </View>
            </View>


            <View style={styles.productDetails}>
              <Text style={styles.productDetailsMainText}>Wireless Earbuds</Text>
              <Text style={styles.productDetailsPriceText}>₱789</Text>
              <Pressable style={styles.AddToCartBtn}><Text style={styles.AddToCartBtnText}>Add to Cart</Text></Pressable>
            </View>
          </View>
        </View>

        





      </View>

      

      <View style={styles.MainDashboardbtmNav}>

        <View style={styles.MainDashboardbtmNavRow}>

          <Pressable style={styles.MainDashboardbtmNav_icons_box}>
            <Ionicons name="home" size={24} color="#FF7A00" />
            <Text style={styles.TextMainDashboardbtmNav_icons_box}>Home</Text>
          </Pressable>

          <Pressable style={styles.MainDashboardbtmNav_icons_box} onPress={() => setOpenCategories(true)}>
             <Ionicons name="grid" size={24} color="#999999" />
            <Text style={styles.NavText}>Categories</Text>
          </Pressable>

          <Pressable style={styles.MainDashboardbtmNav_icons_box} onPress={() => setOpenAddProduct(true)}>
            <Ionicons name="add" size={24} color="#999999" />
            <Text style={styles.NavText}>Add Product</Text>
          </Pressable>


          <Pressable style={styles.MainDashboardbtmNav_icons_box}>
             <Ionicons name="person" size={24} color="#999999" />
            <Text style={styles.NavText}>Profile</Text>
          </Pressable>





        </View>

      </View>
    </ScrollView>

















  )
}