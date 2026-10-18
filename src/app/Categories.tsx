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

import styles from '../styles/CategoriesStyles';
import Cart from './Cart';
import MainDashboard from './MainDashboard';
import AddProducts from './addProduct';


export default function MainCategories() {

    const [cart, setCart] = useState(false);
    const [Dashboard, openDashboard] = useState(false);
    const [openAddProducts, setOpenAddProducts] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    if (cart) {
        return <Cart />;
    }
    if(Dashboard) {
        return <MainDashboard/>;
    }
    if(openAddProducts) {
        return <AddProducts/>;
    }
    return (
        <ScrollView style={styles.bodyMain}>
            {/* HEADER */}

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

                    <Pressable onPress = {() => setCart(true)}>


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




            <View style={styles.SearchSection}>


                <View style={styles.SearchBox}>


                    <Ionicons

                        name="search-outline"

                        size={22}

                        color="#777"

                    />



                    <TextInput

                        placeholder="Search products..."

                        placeholderTextColor="#777"

                        style={styles.SearchInput}

                    />


                </View>






            </View>

            <View style={styles.CategoriesTextHeader}>
                <Text style={styles.CategoriesTextBold}>Categories</Text>
                <Text style={styles.CategoriesText}>Browse by Category and find what you need</Text>
            </View>


            <View style={styles.CategoriesRow}>
                <Pressable onHoverIn={() => setHoveredCategory('fashion')} onHoverOut={() => setHoveredCategory(null)}
                    style={{
                        transform: [{ translateY: hoveredCategory === 'fashion' ? -10 : 0 }]
                    }}
                >

                    <View style={styles.CatgeoriesBox}>



                        <Image source={require('../../images/Fashion.png')} resizeMode="contain" style={styles.CategoriesImage}></Image>
                        <Text style={styles.CategoriesTextBox}>Fashion</Text>




                    </View>
                </Pressable>
                <Pressable onHoverIn={() => setHoveredCategory('electronics')} onHoverOut={() => setHoveredCategory(null)}

                    style={{
                        transform: [{ translateY: hoveredCategory === 'electronics' ? -10 : 0 }],
                    }}>



                    <View style={styles.CatgeoriesBox}>

                        <Image source={require('../../images/Electronics.png')} resizeMode="contain" style={styles.CategoriesImage}></Image>
                        <Text style={styles.CategoriesTextBox}>Electronics</Text>


                    </View>
                </Pressable>
                <Pressable onHoverIn={() => setHoveredCategory('HomeAndLiving')} onHoverOut={() => setHoveredCategory(null)}
                    style={{
                        transform: [{ translateY: hoveredCategory === 'HomeAndLiving' ? -10 : 0 }],
                    }}
                >


                    <View style={styles.CatgeoriesBox}>

                        <Image source={require('../../images/HomeLiving.png')} resizeMode="contain" style={styles.CategoriesImage}></Image>
                        <Text style={styles.CategoriesTextBox}>Home and Living</Text>

                    </View>
                </Pressable>

                <Pressable onHoverIn={() => setHoveredCategory('BeautyAndCare')} onHoverOut={() => setHoveredCategory(null)}
                    style={{
                        transform: [{ translateY: hoveredCategory === 'BeautyAndCare' ? -10 : 0 }]
                    }}

                >





                    <View style={styles.CatgeoriesBox}>

                        <Image source={require('../../images/beautyandcare.png')} resizeMode="contain" style={styles.CategoriesImage}></Image>
                        <Text style={styles.CategoriesTextBox}>Beauty and Care</Text>

                    </View>

                </Pressable>

                <Pressable onHoverIn={() => setHoveredCategory('SportsAndOutdoors')} onHoverOut={() => setHoveredCategory(null)} 
                    style={{
                        transform: [{ translateY: hoveredCategory === 'SportsAndOutdoors' ? -10 : 0}]
                    }}
                    >

                <View style={styles.CatgeoriesBox}>

                    <Image source={require('../../images/sports.png')} resizeMode="contain" style={styles.CategoriesImage}></Image>
                    <Text style={styles.CategoriesTextBox}>Sports and Outdoors</Text>

                </View>

                </Pressable>

                <Pressable onHoverIn={() => setHoveredCategory('Books')} onHoverOut={() => setHoveredCategory(null)}
                    style={{
                        transform: [{ translateY: hoveredCategory === 'Books' ? -10 : 0}]
                    }}
                    >

                <View style={styles.CatgeoriesBox}>

                    <Image source={require('../../images/booksandstationery.png')} resizeMode="contain" style={styles.CategoriesImage}></Image>
                    <Text style={styles.CategoriesTextBox}>Books & Stationery</Text>

                </View>

                </Pressable>

                <Pressable onHoverIn={() => setHoveredCategory('BabyandKids')} onHoverOut={() => setHoveredCategory(null)}
                    style={{
                        transform: [{ translateY: hoveredCategory === 'BabyandKids' ? -10 : 0}]
                    }}
                    >


                <View style={styles.CatgeoriesBox}>

                    <Image source={require('../../images/babyandkids.png')} resizeMode="contain" style={styles.CategoriesImage}></Image>
                    <Text style={styles.CategoriesTextBox}>Baby and Kids</Text>

                </View>

                </Pressable>

                <Pressable onHoverIn={() => setHoveredCategory('Pets')} onHoverOut={() => setHoveredCategory(null)}
                    style={{
                        transform: [{ translateY: hoveredCategory === 'BabyandKids' ? -10 : 0 }]
                    }}
                    >

                <View style={styles.CatgeoriesBox}>

                    <Image source={require('../../images/pets.png')} resizeMode="contain" style={styles.CategoriesImage}></Image>
                    <Text style={styles.CategoriesTextBox}>Pets</Text>

                </View>

                </Pressable>

                <Pressable onHoverIn={() => setHoveredCategory('Categories')} onHoverOut={() => setHoveredCategory(null)}
                    style={{
                        transform: [{ translateY: hoveredCategory === 'Categories' ? -10 : 0 }]
                    }}
                    >

                <View style={styles.CatgeoriesBox}>

                    <Image source={require('../../images/morecategories.png')} resizeMode="contain" style={styles.CategoriesImage}></Image>
                    <Text style={styles.CategoriesTextBox}>More Categoriess</Text>

                </View>

                </Pressable>


            </View>

            









            <View style={styles.MainDashboardbtmNav}>

                <View style={styles.MainDashboardbtmNavRow}>

                    <Pressable style={styles.MainDashboardbtmNav_icons_box} onPress = {() => openDashboard(true)}>
                        <Ionicons name="home" size={24} color="#999999" />
                        <Text style={styles.TextMainDashboardbtmNavCategories_icons_box}>Home</Text>
                    </Pressable>

                    <Pressable style={styles.MainDashboardbtmNav_icons_box}>
                        <Ionicons name="grid" size={24} color="#FF7A00" />
                        <Text style={styles.NavTextCategories}>Categories</Text>
                    </Pressable>

                    <Pressable style={styles.MainDashboardbtmNav_icons_box} onPress= {() => setOpenAddProducts(true)}>
            <Ionicons name="add" size={24} color="#999999" />
            <Text style={styles.NavText}>Add Product</Text>
          </Pressable>


                    <Pressable style={styles.MainDashboardbtmNav_icons_box}>
                        <Ionicons name="person" size={24} color="#999999" />
                        <Text style={styles.NavText}>Profile</Text>
                    </Pressable>





                </View>

            </View>
       </ScrollView>
    );
}

