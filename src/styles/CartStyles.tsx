import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({
    bodyMain: {

        flex: 1,

        backgroundColor: "#FAF7F2",

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        

    },

    HeaderCart: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
        gap: 10
    },

    textHeader: {
       

    },

    HeaderCartLogoText: {
        fontFamily:"PoppinsBold",
        fontSize: 18,

    color:"#000"

    },

    spanText: {
        color:"#FF8C00"
    },

    HeaderCartLogoText2: {
          fontFamily:"PoppinsRegular",

    fontSize:10,

    color:"#726e6e"

    },

    CartText: {
        paddingTop: 10
    },

    CartTextMain: {
        fontFamily: 'PoppinsBold',
        fontSize: 18,
        
    },

    totalCart: {
        fontSize: 11,
        color:"#726e6e"
    }
})

export default styles;