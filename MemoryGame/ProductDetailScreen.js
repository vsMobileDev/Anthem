import React from "react";
import { FlatList, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
const ProductDetailScreen = ({ route }) => {
    return (
        <View>
            <Image
                source={{ uri: route.params.item.image }}
                style={{ width: 50, height: 50, justifyContent: 'center', resizeMode: 'contain' }}
            />
            <View>
                <Text style={{ marginLeft: 10 }}>Category: {route.params.item.category}</Text>
                <Text style={{ marginLeft: 10 }}>Price: {route.params.item.price}</Text>
                <Text style={{ marginLeft: 10 }}>Title: {route.params.item.title}</Text>
                <Text style={{ marginLeft: 10 }}>Rating Rate: {route.params.item.rating.rate}</Text>
                <TouchableOpacity style={
                        {
                            justifyContent:'center',
                            alignItems:'center',
                            width:90,height:40,
                            borderRadius:10,
                            borderWidth:1,
                            borderColor:'black',
                            marginBottom:10,
                            marginTop:10
                            }}>
                                <Text>Add to Cart</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}
export default ProductDetailScreen