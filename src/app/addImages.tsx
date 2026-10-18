
import React, { useState } from "react";
import { useRouter } from "expo-router";

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

import styles from "../styles/addImages";
import MainCategories from "./Categories";

import { File, Directory, Paths } from "expo-file-system";

import AsyncStorage from "@react-native-async-storage/async-storage";

type AddImageProps = {
  productId: string;
};

export default function AddImage({ productId }: AddImageProps) {
  const router = useRouter();
  const [back, setBack] = useState(false);

  const [savedPhotos, setSavedPhotos] = useState<string[]>([]);

  const [photos, setPhotos] = useState<
    ImagePicker.ImagePickerAsset[]
  >([]);

  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
  });

  // PICK IMAGES FROM GALLERY
  const pickImages = async () => {
    try {
      // CHECK IF MAXIMUM PHOTOS REACHED
      if (photos.length >= 5) {
        Alert.alert(
          "Limit reached",
          "Maximum of 5 photos allowed."
        );
        return;
      }

      // REQUEST PHOTO PERMISSION
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Permission Required",
          "Please allow access to your photos."
        );
        return;
      }

      // OPEN PHONE GALLERY
      const result =
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ["images"],
          allowsMultipleSelection: true,
          selectionLimit: 5 - photos.length,
          quality: 1,
        });

      // USER CANCELLED
      if (result.canceled) {
        return;
      }

      // CHECK FILE SIZE
      const validPhotos = result.assets.filter((photo) => {
        return (
          photo.fileSize !== undefined &&
          photo.fileSize <= 100 * 1024 * 1024
        );
      });

      // ALERT IF IMAGE IS TOO LARGE OR SIZE UNKNOWN
      if (validPhotos.length !== result.assets.length) {
        Alert.alert(
          "Invalid File",
          "Each photo must be 100MB or smaller, and its file size must be available."
        );
      }

      // SAVE SELECTED PHOTOS
      setPhotos((previous) =>
        [...previous, ...validPhotos].slice(0, 5)
      );

    } catch (error) {
      console.error(error);

      Alert.alert(
        "Error",
        "Unable to select photos."
      );
    }
  };


  const createImageFolder = () => {

    if (Platform.OS === "web") {
      console.log("Use Android to test local image storage");
      return null;
    }
    const folder = new Directory(
      Paths.document,
      "product-images"
    );

    folder.create({
      idempotent: true,
      intermediates: true
    });

    return folder;

  };

  const handleAddProduct = async () => {
    // Check if the user selected an image
    if (photos.length === 0) {
      Alert.alert("Missing Image", "Please select at least one image.");
      return;
    }

    try {
      const folder = createImageFolder();

      if (!folder) {
        if (Platform.OS === "web") {
          window.alert("Please use Android to save product images.");
        }
        return;
      }

      // For now, this only creates the folder.
      console.log("Folder created:", folder.uri);

      // We will add actual image saving here next.

    } catch (error) {
      console.error("Saving failed:", error);
      Alert.alert("Error", "Unable to save product images.");
    }
  };



  // REMOVE SELECTED PHOTO
  const removePhoto = (index: number) => {
    setPhotos((previous) =>
      previous.filter((_, i) => i !== index)
    );
  };

  // WAIT FOR FONTS
  if (!fontsLoaded) {
    return null;
  }

  // BACK NAVIGATION
  if (back) {
    return <MainCategories />;
  }

  return (
    <ScrollView
      style={styles.bodyMainAddImages}
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
          Add Images
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

        <View className="bg-orange-500 w-24 h-2" />

        {/* STEP 2 */}
        <View className="w-10 h-10 rounded-full bg-orange-500 items-center justify-center">
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

      {/* PRODUCT IMAGE TITLE */}
      <View className="px-4 mt-3">

        <Text className="text-xl font-bold text-black">
          Product Image
        </Text>

        <Text className="text-xs text-gray-500 mt-1">
          Add at least one clear photo of your product
        </Text>

      </View>

      {/* UPLOAD PHOTO BOX */}
      <View className="p-4">

        <Pressable
          onPress={pickImages}
          className="h-36 border border-gray-300 rounded-xl bg-[#FAFAFA] items-center justify-center"
        >
          <Ionicons
            name="images-outline"
            size={30}
            color="#737373"
          />

          <Text className="text-black font-bold mt-2">
            Tap to add photos
          </Text>

          <Text className="text-gray-500 text-xs mt-1">
            Upload up to 5 images
          </Text>

          <Text className="text-gray-500 text-xs">
            (Max 100MB each)
          </Text>

        </Pressable>

        {/* PHOTO COUNTER */}
        <Text className="text-gray-500 text-xs mt-3">
          {photos.length}/5 photos selected
        </Text>

        {/* SELECTED PHOTOS */}
        <View className="flex-row flex-wrap mt-4 gap-3">

          {photos.map((photo, index) => (

            <View
              key={`${photo.uri}-${index}`}
              className="relative"
            >

              {/* PHOTO PREVIEW */}
              <Image
                source={{ uri: photo.uri }}
                className="w-20 h-20 rounded-lg"
              />

              {/* REMOVE PHOTO BUTTON */}
              <Pressable
                onPress={() => removePhoto(index)}
                className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
              >
                <Ionicons
                  name="close"
                  size={14}
                  color="white"
                />
              </Pressable>

            </View>

          ))}

        </View>

      </View>

      <View className="flex justify-center p-3 items-center">
        <Pressable
          style={styles.AddProductbtn}
          onPress={handleAddProduct}
          className="bg-orange-600"
        >
          <Text className="text-white font-bold text-lg">
            Add Product
          </Text>
        </Pressable>
      </View>



    </ScrollView>
  );
}
