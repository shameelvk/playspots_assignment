import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { getVenues } from '../api/venue'
import VenueCard from '../components/VenueCard'
import LikeContext, { likeContext } from '../context/Liked'

const HomeScreen = () => {
    
    const {
        likedData,
        setLikeData,addToLike
    
    
    } = useContext(likeContext)
    

    const [venuData, setVenuData] = useState([])
    useEffect(() => {
      
    const fetchData=async()=>{
        let data=await getVenues();
        console.log(data);
        setVenuData(data);

    }
    fetchData();
     
    }, [likedData])

    const handleFiltter=()=>{
        
       
    }
    
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleFiltter}><Text style={{color:"white",textAlign:"center" ,padding:10,backgroundColor:"black"}}>Filter By Distance</Text>
        </TouchableOpacity>
         <FlatList data={venuData}  renderItem={({item})=><VenueCard item={item} likedData={likedData} addToLike={addToLike}/>}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"black"
    }
})