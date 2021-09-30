import React from "react";
import { FlatList, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
const CartScreen = ({ route }) => {
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.itemStyle} onPress={() => {
            }}>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 50, height: 50, justifyContent: 'center', resizeMode: 'contain' }}
                />
                <View>
                    <Text style={{ marginLeft: 10 }}>Category: {item.category}</Text>
                    <Text style={{ marginLeft: 10 }}>Price: {item.price}</Text>
                    <Text style={{ marginLeft: 10 }}>Title: {item.title}</Text>
                    <Text style={{ marginLeft: 10 }}>QTY: {item.qty}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
           <FlatList
                data={route.params.addToCart}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    itemStyle: {
        minHeight: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginTop: 5,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',

    }
})
export default CartScreen