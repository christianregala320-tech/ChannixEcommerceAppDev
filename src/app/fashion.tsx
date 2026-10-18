
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

import {
    addDoc,
    collection,
    serverTimestamp,

} from "firebase/firestore";

import { signInAnonymously } from "firebase/auth";
import { auth, db } from "../config/firebase";

import {
    StyleSheet,
    Alert,
    Platform,
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
} from "react-native";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function fashionDashboard() {
    const [fontsLoaded] = useFonts({
    
        PoppinsRegular: Poppins_400Regular,
    
        PoppinsMedium: Poppins_500Medium,
    
        PoppinsSemiBold: Poppins_600SemiBold,
    
        PoppinsBold: Poppins_700Bold
    
      });
    
    
    
      if (!fontsLoaded) {
        return null;
      }


    return (
        <ScrollView style={styles.bodyMainAddProduct}>
             <View style={styles.headerMainDashboard}>


                <View>

                    <Text style={styles.logoText}>

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

                    <Pressable>


                    <Ionicons

                        name="cart"

                        size={30}

                        color="#FF8C00"

                    />

                    </Pressable>



                    <View style={styles.circleImageProfile}>


                    </View>


                </View>



            </View>

            <Pressable className="w-24 bg-orange-600 p-2 flex justify-center items-center mt-2 rounded-md"><Text className="font-bold text-lg text-white">Fashion</Text></Pressable>

            <View className="p-4">
                
                

            </View>
         

        </ScrollView>
    );

}

const styles = StyleSheet.create({
     bodyMainAddProduct: {
        
        flex: 1,

        backgroundColor: "#FAF7F2",

        padding: 15
    },
     headerMainDashboard: {


        flexDirection: "row",

        justifyContent: "space-between",

        alignItems: "center"


    },



    logoText: {


        fontSize: 18,


    },



    spanText: {


        fontFamily: "PoppinsBold",

        color: "#000"


    },



    spanText2: {


        fontFamily: "PoppinsBold",

        color: "#FF8C00"


    },



    headerTextGray: {


        fontFamily: "PoppinsRegular",

        fontSize: 10,

        color: "#726e6e"


    },



    headerMainDashboardRightSec: {


        flexDirection: "row",

        alignItems: "center",

        gap: 10


    },



    circleImageProfile: {


        width: 45,

        height: 45,

        borderRadius: 50,

        borderWidth: 1,

        borderColor: "#000"


    },

});

