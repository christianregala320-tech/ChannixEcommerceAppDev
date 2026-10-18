
import React, { useState } from "react";

import {
    addDoc,
    collection,
    serverTimestamp,

} from "firebase/firestore";

import { signInAnonymously } from "firebase/auth";
import { auth, db } from "../config/firebase";

import {
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

import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/addProductStyles";
import MainCategories from "./Categories";
import GoToImage from "./addImages";

export default function AddProducts() {
    // Navigation
    const [back, setBack] = useState(false);
    const [goToAddImages, setGoToAddImages] = useState(false);

    // Product input states
    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productDescription, setProductDiscription] = useState("");
    const [saving, setSaving] = useState(false);

    // Firebase 

    const [productID, setProductID] = useState("");



    // Load fonts
    const [fontsLoaded] = useFonts({
        PoppinsRegular: Poppins_400Regular,
        PoppinsMedium: Poppins_500Medium,
        PoppinsSemiBold: Poppins_600SemiBold,
        PoppinsBold: Poppins_700Bold,
    });

    // Price validation (allows one decimal point)
    const handlePriceChange = (text: string) => {
        const cleaned = text.replace(/[^0-9.]/g, "");

        if (/^\d*\.?\d*$/.test(cleaned)) {
            setProductPrice(cleaned);
        }
    };

    // Quantity validation (whole numbers only)
    const handleQuantityChange = (text: string) => {
        const cleaned = text.replace(/[^0-9]/g, "");
        setProductQuantity(cleaned);
    };

    if (!fontsLoaded) {
        return null;
    }

    if (back) {
        return <MainCategories />;
    }
 if (goToAddImages) {
  return <GoToImage productId={productID} />;
}

    // firebase saving configuration ecommerce project

    const saveProduct = async () => {
        if (saving) return;
        if (
            !category ||
            !productName.trim() ||
            !productPrice.trim() ||
            !productQuantity.trim() ||
            !productDescription.trim()
        ) {
            if (Platform.OS === "web") {
                window.alert("Please fill in all fields");
            } else {
                Alert.alert("Missing Fields", "Please fill in all fields");
            }
            return;
        }
        
        const price = Number(productPrice);
        const quantity = Number(productQuantity);

        // Validate numbers
        if (!Number.isFinite(price) || price <= 0) {
            Alert.alert("Invalid Price", "Enter a valid price greater than zero.");
            return;
        }

        if (!Number.isSafeInteger(quantity) || quantity < 0) {
            Alert.alert("Invalid Quantity", "Enter a valid whole number.");
            return;
        }
        


        try {

            setSaving(true);
         

            if (!auth.currentUser) {
                await signInAnonymously(auth);
            }

            const productRef = await addDoc(
                collection(db, "products"),
                {
                    productCategory: category,
                    productName: productName.trim(),
                    productPrice: price,
                    productQuantity: quantity,
                    productDescription: productDescription.trim(),
                    createdAt: serverTimestamp(),
                }
            );

            setProductID(productRef.id);
            console.log("Saved Product ID: ", productRef.id);

            if (Platform.OS === "web") {
                window.alert("Product Saved Successfully");
            } else {
                Alert.alert("Success!", "Product Saved Successfully");
            }

            setCategory("");
            setProductName("");
            setProductPrice("");
            setProductQuantity("");
            setProductDiscription("");



            setGoToAddImages(true);
        } catch (error) {
            console.error("Firebase Error:", error);

            const message = error instanceof Error
                ? error.message
                : "Failed to save product.";

            if (Platform.OS === "web") {
                window.alert(message);
            } else {
                Alert.alert("Error", message);
            }
        } finally {
            setSaving(false);
        }
    };
    return (

        <ScrollView
            style={styles.bodyMainAddProduct}
            keyboardShouldPersistTaps="handled"
        >

            {/* HEADER */}
            <View style={styles.HeaderAddProd}>

                <Pressable
                    onPress={() => setBack(true)}
                    className="bg-orange-500 p-3 rounded-full flex justify-center items-center"
                >
                    <Ionicons
                        name="chevron-back"
                        size={24}
                        color="black"
                    />

                </Pressable>


                <Text style={styles.textHeaderAddproduct}>
                    Add Product
                </Text>

            </View>

            {/* PROGRESS INDICATOR */}
            <View className="flex-row items-center justify-center p-5">

                {/* STEP 1 */}
                <View className="w-10 h-10 rounded-full bg-orange-500 items-center justify-center">
                    <Text className="text-sm text-white font-bold">
                        1
                    </Text>
                </View>

                <View className="bg-orange-100 w-24 h-2" />

                {/* STEP 2 */}
                <View className="w-10 h-10 rounded-full bg-stone-200 items-center justify-center">
                    <Text className="text-sm text-white font-bold">
                        2
                    </Text>
                </View>

                <View className="bg-orange-100 w-24 h-2" />

                {/* STEP 3 */}
                <View className="w-10 h-10 rounded-full bg-stone-200 items-center justify-center">
                    <Text className="text-sm text-white font-bold">
                        3
                    </Text>
                </View>



            </View>

            {/* PRODUCT FORM */}
            <View className="p-4">

                {/* PRODUCT CATEGORY */}
                <View className="flex-col">

                    <Text className="text-black font-bold text-lg mb-2">
                        Product Category
                    </Text>

                    <View className="border border-gray-300 rounded-xl overflow-hidden p-4">

                        <Picker
                            style={{
                                backgroundColor: "#FAF7F2",
                            }}
                            selectedValue={category}
                            onValueChange={(value) => setCategory(value)}
                        >

                            <Picker.Item
                                label="Select Category"
                                value=""
                            />

                            <Picker.Item
                                label="Fashion"
                                value="Fashion"
                            />

                            <Picker.Item
                                label="Electronics"
                                value="Electronics"
                            />

                            <Picker.Item
                                label="Home and Living"
                                value="HomeAndLiving"
                            />

                            <Picker.Item
                                label="Beauty and Care"
                                value="BeautyAndCare"
                            />

                            <Picker.Item
                                label="Sports and Outdoors"
                                value="SportsAndOutDoors"
                            />

                            <Picker.Item
                                label="Books and Stationery"
                                value="BooksAndStationery"
                            />

                            <Picker.Item
                                label="Baby and Kids"
                                value="BabyAndKids"
                            />

                            <Picker.Item
                                label="Pets"
                                value="Pets"
                            />

                            <Picker.Item
                                label="More Categories"
                                value="MoreCategories"
                            />

                        </Picker>

                    </View>

                </View>

                {/* PRODUCT NAME */}
                <View className="flex-col mt-3">

                    <Text className="text-black font-bold text-lg mb-2">
                        Product Name
                    </Text>

                    <View className="border border-gray-300 rounded-xl p-4">

                        <TextInput
                            value={productName}
                            onChangeText={setProductName}
                            placeholder="Product Name"
                            placeholderTextColor="#9CA3AF"
                            className="text-black"
                        />

                    </View>

                </View>

                {/* PRODUCT PRICE */}
                <View className="flex-col mt-3">

                    <Text className="text-black font-bold text-lg mb-2">
                        Product Price
                    </Text>

                    <View className="border border-gray-300 rounded-xl p-4">

                        <TextInput
                            value={productPrice}
                            keyboardType="decimal-pad"
                            onChangeText={handlePriceChange}
                            placeholder="Product Price"
                            placeholderTextColor="#9CA3AF"
                            className="text-black"
                        />

                    </View>

                </View>

                {/* PRODUCT QUANTITY */}
                <View className="flex-col mt-3">

                    <Text className="text-black font-bold text-lg mb-2">
                        Product Quantity
                    </Text>

                    <View className="border border-gray-300 rounded-xl p-4">

                        <TextInput
                            value={productQuantity}
                            keyboardType="number-pad"
                            onChangeText={handleQuantityChange}
                            placeholder="Product Quantity"
                            placeholderTextColor="#9CA3AF"
                            className="text-black"
                        />

                    </View>

                </View>

                <View className="flex-col mt-3">

                    <Text className="text-black font-bold text-lg mb-2">
                        Product Description
                    </Text>

                    <View className="border border-gray-300 rounded-xl p-4">

                        <TextInput
                            value={productDescription}

                            onChangeText={setProductDiscription}
                            placeholder="Product Description"
                            placeholderTextColor="#9CA3AF"
                            className="text-black"
                            numberOfLines={5}
                        />

                    </View>

                </View>

            </View>

            <View className="flex justify-center items-center">
                <Pressable onPress={saveProduct} disabled={saving} className="bg-orange-500 p-4 rounded-lg flex-row items-center justify-center gap-2">
                    <Text className="text-white font-bold">{saving ? "Saving..." : "Next"}</Text>
                    <Ionicons name="chevron-forward" size={18} color="white" />
                </Pressable>
            </View>

        </ScrollView>
    );
}
