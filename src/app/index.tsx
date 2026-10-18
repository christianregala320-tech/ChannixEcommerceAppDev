import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import MainDashboard from "./MainDashboard";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";









export default function Ecommerce () {
    const [openDashboard, setOpenDashboard] = useState(false);
    

  const [fontsLoaded] = useFonts({

    PoppinsRegular: Poppins_400Regular,

    PoppinsMedium: Poppins_500Medium,

    PoppinsSemiBold: Poppins_600SemiBold,

    PoppinsBold: Poppins_700Bold

  });


  if(!fontsLoaded){
    return null;
  }

   if(openDashboard) {
      return <MainDashboard/>;
    }

  return (

   
  
  <View style={styles.bodyMain}>
    <Image
    source={require("../../images/logo-chanixx.png")}
    style={styles.logoMain} 
    />

    <Pressable onPress={() => setOpenDashboard(true)} className = "bg-orange-600 pl-10 pr-10 pb-2 pt-2 mt-6 rounded-md shadow-xl ring-orange-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">

      <Text style={styles.buttonText}>
        Shop Now
      </Text>
    </Pressable>
  </View>

  );
}

const styles = StyleSheet.create({
  bodyMain: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FAF7F2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  logoMain: {
    width: 200,
    height: 200,  
  },

  buttonMain: {
    width: 200,
    height: 55,
    marginTop: 10,

    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonPressed: {
    backgroundColor: '#E67E00',

    transform: [

      {
        scale: 0.95
      }
    ]
  },

  buttonText: {
    fontFamily:"PoppinsRegular",
    fontWeight: 700,
    color: '#fff',
    fontSize: 18,
    
  }
})