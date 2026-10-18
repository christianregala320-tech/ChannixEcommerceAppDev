
import React, { useState } from "react";

import {
  View,
  Text,
  Pressable,
  Alert,
  Platform,
} from "react-native";

import {
  addDoc,
  collection,
} from "firebase/firestore";

import {
  signInAnonymously,
} from "firebase/auth";

import { auth, db } from "../config/firebase";

export default function FirebaseTest() {

  // Loading state
  const [loading, setLoading] = useState(false);

  // Show messages on Android and Web
  const showMessage = (title: string, message: string) => {
    if (Platform.OS === "web") {
      window.alert(`${title}\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  // Save test product to Firebase
  const saveTestProduct = async () => {
    if (loading) return;

    try {
      setLoading(true);

      // STEP 1: LOGIN ANONYMOUSLY
      const userCredential = await signInAnonymously(auth);

      console.log(
        "Signed in user:",
        userCredential.user.uid
      );

      // STEP 2: SAVE PRODUCT
      const document = await addDoc(
        collection(db, "products"),
        {
          productName: "Samsung Galaxy",
          productCategory: "Electronics",
          productPrice: 15000,
          productQuantity: 5,
          productDescription: "Test product from React Native",
        }
      );

      // STEP 3: SUCCESS
      console.log("Saved Product ID:", document.id);

      

      showMessage(
        "Success!",
        "Product saved successfully!"
      );

    } catch (error) {
      console.error("Firebase error:", error);

      showMessage(
        "Error",
        error instanceof Error
          ? error.message
          : "Unable to save product."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center p-5 bg-white">

      <Text className="text-2xl font-bold mb-5">
        Firebase Test
      </Text>

      <Pressable
        onPress={saveTestProduct}
        disabled={loading}
        className="bg-orange-500 p-4 rounded-xl items-center"
      >
        <Text className="text-white font-bold">
          {loading ? "Saving..." : "Save Test Product"}
        </Text>
      </Pressable>

    </View>
  );
}
