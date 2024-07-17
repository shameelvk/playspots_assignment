import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import VenueCard from '../components/VenueCard'
import { likeContext } from '../context/Liked'

const LikedVinueScreen = () => {
    const [LikeedVenues, setLikeedVenues] = useState([])
    const {
        likedData,
        setLikeData,addToLike,handleDelete
    
    
    } = useContext(likeContext)
    useEffect(() => {
      
    
      
    }, [likedData])
    

  return (
    <View style={{flex:1}}>
    <Button title='Delete' onPress={handleDelete}>Delete</Button>
        {likedData&&<FlatList data={likedData} renderItem={({item})=><VenueCard item={item} addToLike={addToLike}/>}/>}
      
    </View>
  )
}

export default LikedVinueScreen

const styles = StyleSheet.create({})