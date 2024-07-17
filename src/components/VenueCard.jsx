import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";

const VenueCard = ({item,setLikedData,likedData,addToLike}) => {
    
    console.log(item);
    const handleLike=(item)=>{
        addToLike(item);
        
    }
   
  return (
    <View style={styles.cardContainer}>
        <Image source={{uri:`https://phtest.demosoftfruit.com/${item.logo}`}} width={100} height={100}/>
      <View style={{justifyContent:"center",flex:1,padding:10}}>
      <Text style={{color:"black"}}>{item.name}</Text>
      <Text style={{color:"black"}}>{item.address}</Text>
      </View>
      <TouchableOpacity onPress={()=>handleLike(item)}>
      <AntDesign name="heart" size={20} color="red"/>
      </TouchableOpacity>
      
    </View>
  )
}

export default VenueCard

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:"row",
        padding:20
    }
})