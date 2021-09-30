import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import axios from "axios";
const Anthem = ({ navigation }) => {
    const [data, setData] = useState([])
    const [addToCart, setAddToCart] = useState([])
    const [addToCart1, setAddToCart1] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setData(res.data)
        })
    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.itemStyle} onPress={() => {
                navigation.navigate('ProductDetailScreen', { item: item })
            }}>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 50, height: 50, justifyContent: 'center', resizeMode: 'contain' }}
                />
                <View>
                    <Text style={{ marginLeft: 10 }}>Category: {item.category}</Text>
                    <Text style={{ marginLeft: 10 }}>Price: {item.price}</Text>
                    <Text style={{ marginLeft: 10 }}>Title: {item.title}</Text>
                    <Text style={{ marginLeft: 10 }}>Rating Rate: {item.rating.rate}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={
                            {
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 90, height: 40,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'black',
                                marginBottom: 10,
                                marginTop: 10
                            }}
                            onPress={() => {
                                var count = 0
                                var obj = {}
                                if (addToCart.length < 1) {
                                    count++
                                    obj.category = item.category
                                    obj.price = item.price
                                    obj.image = item.image
                                    obj.title = item.title
                                    obj.qty = count
                                    setAddToCart([...addToCart, obj])
                                    setAddToCart1([...addToCart1,item])
                                }
                                else {
                                    let count = addToCart1.reduce((acc, cur) => cur.id === item.id ? ++acc : acc, 0);
                                    if (addToCart1.includes(item)) {
                                        addToCart[index].qty = count+1
                                        addToCart1[index].qty = count+1
                                    }
                                    else{
                                        obj.category = item.category
                                        obj.price = item.price
                                        obj.image = item.image
                                        obj.title = item.title
                                        obj.qty = count+1
                                        setAddToCart([...addToCart, obj])
                                    }
                                    setAddToCart1([...addToCart1, item])
                                }

                            }}
                        >
                            <Text>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={
                            {
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 90, height: 40,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: 'black',
                                marginBottom: 10,
                                marginTop: 10
                            }}
                            onPress={() => navigation.navigate('CartScreen', { addToCart: addToCart })}
                        >
                            <Text>Cart Screen</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
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
export default Anthem