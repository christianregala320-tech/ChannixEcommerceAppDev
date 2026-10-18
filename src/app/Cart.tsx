import { useState } from 'react';
import {
    Image,
    Pressable,
    Text,
    TextInput,
    View,
    ScrollView
} from "react-native";



import { Ionicons } from "@expo/vector-icons";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
} from "@expo-google-fonts/poppins";

import styles from '../styles/CartStyles';
import MainDashboard  from './MainDashboard';


export default function Cart() {
    const [fontsLoaded] = useFonts({

        PoppinsRegular: Poppins_400Regular,

        PoppinsMedium: Poppins_500Medium,

        PoppinsSemiBold: Poppins_600SemiBold,

        PoppinsBold: Poppins_700Bold

    });

    const [cart, backCart] = useState(false);

    if(cart) {
        return <MainDashboard/>;
    }



    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView style={styles.bodyMain}>
            <View style={styles.HeaderCart}>


                <Pressable style = {{
                     backgroundColor: "#FFF0DF",
                     padding: 12,
                     borderRadius: 50,
                     cursor: 'pointer'
                }} onPress = {() => backCart(true)}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={24}
                        color="black"
                    />
                </Pressable>

                <View style={styles.textHeader}>
                    <Text style={styles.HeaderCartLogoText}>Chanixx <Text style={styles.spanText}> Online Shop</Text></Text>
                    <Text style={styles.HeaderCartLogoText2}>Shop Smart, Live Better</Text>
                </View>




            </View>


            <View style={styles.CartText}>
                <Text style={styles.CartTextMain}>My Cart</Text>
                <Text style={styles.totalCart}>0 Items in your cart</Text>

            </View>


        </ScrollView>
    );



}