import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const styles = StyleSheet.create({


bodyMain:{

    flex:1,

    backgroundColor:"#FAF7F2",

    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    

},



headerMainDashboard:{


    flexDirection:"row",

    justifyContent:"space-between",

    alignItems:"center"


},



logoText:{


    fontSize:18,


},



spanText:{


    fontFamily:"PoppinsBold",

    color:"#000"


},



spanText2:{


    fontFamily:"PoppinsBold",

    color:"#FF8C00"


},



headerTextGray:{


    fontFamily:"PoppinsRegular",

    fontSize:10,

    color:"#726e6e"


},



headerMainDashboardRightSec:{


    flexDirection:"row",

    alignItems:"center",

    gap:10


},



circleImageProfile:{


    width:45,

    height:45,

    borderRadius:50,

    borderWidth:1,

    borderColor:"#000"


},



/* BANNER */


banner:{


    height:350,

    width:"100%",


    borderRadius:25,


    padding:25,


    overflow:"hidden"


},

SearchSection:{
    padding:10
},


SearchBox:{

    height:50,

    flexDirection:"row",

    alignItems:"center",

    backgroundColor:"#F3F2F2",

    borderRadius:50,

    paddingHorizontal:15

},


SearchInput:{

    flex:1,

    marginLeft:10,

    fontSize:15,

    borderWidth:0

},





bannerContent:{


    width:"60%"


},



bannerTitle:{


    fontFamily:"PoppinsBold",

    fontSize:32,

    color:"#1F1F1F"


},



bannerTitleOrange:{


    fontFamily:"PoppinsBold",

    fontSize:32,

    color:"#FF8C00"


},



bannerDescription:{


    marginTop:8,

    fontFamily:"PoppinsRegular",

    fontSize:14,

    color:"#6F6F6F"


},



shopButton:{


    marginTop:15,

    width:130,

    height:40,

    backgroundColor:"#FF8C00",

    borderRadius:25,


    justifyContent:"center",

    alignItems:"center"


},



shopButtonText:{


    color:"#fff",

    fontFamily:"PoppinsSemiBold",

    fontSize:15


},

IconsRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 22,
    padding: 18,
    justifyContent: 'center'
},

shirtCircleBox: {
    width: 60,
    height: 60,
    backgroundColor: "#FEEAD8",
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
},

phoneCircleBox: {
        width: 60,
    height: 60,
    backgroundColor: "#FEE6E7",
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

},

homeCircleBox: {
        width: 60,
    height: 60,
    backgroundColor: "#E1F7EB",
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

},

moreCircleBox: {
      width: 60,
    height: 60,
    backgroundColor:  "#E5F0FC",
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'


},

IconsBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
},

TextIconsBox: {
    fontSize: 12,
    color: '#a5a5a5'
},

FeaturedProductHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

},

BoldText: {
    fontWeight: 800,
    fontSize: 20
},

BoldTextOrange: {
      fontWeight: 600,
    fontSize: 13,
    color: '#FF8C00'

},

ProductsSection: {
    padding: 4
},

ProductsSectionRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 18,
    padding: 2
},

ProductsContainer: {
    padding: 22,
    backgroundColor: '#fff',
    borderRadius: 18,
     shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    // Android shadow
    elevation: 4,

},

productImageBox: {
width: 120,
height: 120,
    
},

ImageProductImage: {
    width: '100%',
    height: '100%'
},

BackgroundImageColor: {
    backgroundColor: '#f99215',
    borderRadius: 20

    
},

productDetails: {
    marginTop: 10,
 
    gap: 3

},

productDetailsMainText: {
    fontWeight: 600,
    fontSize: 13
},

productDetailsPriceText: {
    color: '#FF8C00',
    fontWeight: '700'
},

AddToCartBtn: {
    width: 125,
    height: 32,
    backgroundColor: '#FF8C00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},

AddToCartBtnText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 700
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
    justifyContent: 'space-evenly'
     

},

MainDashboardbtmNav_icons_box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
},

TextMainDashboardbtmNav_icons_box: {
    fontSize: 14,
    fontWeight: 600,
    color: '#FF8C00'

},

NavText: {
    color: '#999999',
      fontSize: 14,
    fontWeight: 600
}


});


export default styles;