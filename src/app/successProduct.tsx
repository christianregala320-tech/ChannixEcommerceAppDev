import React, { useState } from "react";

import {
    View,
    Text,
    Pressable,
    ScrollView,
    Image,
    Alert,
    Platform
} from "react-native";

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import styles from '../styles/successProductStyles';
import MainDashboard from "./MainDashboard";


export default function Success() {
    const [backToDashboard, setToDashboard] = useState(false);

    if(backToDashboard) {
        return <MainDashboard/>;
    }

    return (
        <ScrollView style={styles.bodyMainAddProduct} contentContainerStyle={styles.body}>
            <View className="flex justify-center items-center">
                <View className="flex justify-center items-center bg-orange-600 w-24 h-24 rounded-full">
                    <Ionicons
                        name="checkmark"
                        size={48}
                        color="white"
                    />
                </View>
                <Text className="mt-5 font-bold text-2xl">Product Added Successfully</Text>
                <Pressable onPress={() => setToDashboard(true)} className=" mt-3 group rounded-lg border-2 border-transparent bg-orange-600 px-5 py-3 hover:border-orange-600 hover:bg-transparent">
                    <Text className="font-bold text-white group-hover:text-orange-600">
                        Return to Dashboard
                    </Text>
                </Pressable>
            </View>

        </ScrollView>
    );
}