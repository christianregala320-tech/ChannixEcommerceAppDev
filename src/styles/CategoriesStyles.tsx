import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({
    bodyMain: {

        flex: 1,

        backgroundColor: "#FAF7F2",

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        overflowX: 'auto'

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

    SearchSection: {
        padding: 10
    },


    SearchBox: {

        height: 50,

        flexDirection: "row",

        alignItems: "center",

        backgroundColor: "#F3F2F2",

        borderRadius: 50,

        paddingHorizontal: 15

    },


    SearchInput: {

        flex: 1,

        marginLeft: 10,

        fontSize: 15,

        borderWidth: 0

    },


    CategoriesTextHeader: {
        padding: 10
    },
    CategoriesTextBold: {
        fontSize: 22,
        fontWeight: 800,

    },

    CategoriesText: {
        fontWeight: 400,
        fontSize: 10,
        color: '#777'
    },

    CategoriesRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    CatgeoriesBox: {
        width: 135,
        height: 135,
        backgroundColor: '#FFF2E3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#fad0a1',
        
    },

    CategoriesImage: {
        width: 88,
        height: 88,
        
    },

    CategoriesTextBox: {
        fontFamily: 'PoppinsBold',
        fontSize: 11,
        fontWeight: 800,
        color: '#010101'

        
    },



    MainDashboardbtmNav: {
        padding: 28,
        backgroundColor: '#fff',
        width: '100%',
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        borderRadius: 12

    },

    MainDashboardbtmNavRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10


    },

    MainDashboardbtmNav_icons_box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    TextMainDashboardbtmNavCategories_icons_box: {
        fontSize: 14,
        fontWeight: 600,
        color: '#999999'

    },

    NavText: {
        color: '#999999',
        fontSize: 14,
        fontWeight: 600
    },

    NavTextCategories: {
        color: '#FF7A00',
        fontSize: 14,
        fontWeight: 600
    }


});


export default styles;