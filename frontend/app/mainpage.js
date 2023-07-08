import React from "react";
import search from "../Search.jpg"
import axios from 'axios'
import { useEffect,useState } from "react";
import { View,Text, TextInput,TouchableOpacity,Image } from "react-native";
const MainPage =()=>{
    const [data,updateData]=useState([])
    // useEffect(()=>{
    //     axios.get('')

    // })
    return(
    <View style={{backgroundColor:"#D9EDE8", height:"100%"}}>
        <View style={{display:"flex",flexDirection:"row" , justifyContent:"center"}} >
            <TextInput style={{paddingHorizontal:16,backgroundColor:"white",marginTop:20,height:50,width:347,borderRadius:25}} placeholder='what are you looking for?' />
            <TouchableOpacity style={{height:50,marginTop:20,marginLeft:10,position:'absolute',right:50}} ><Image style={{height:"100%"}} source={search} /></TouchableOpacity>
        </View>
        <View></View>
        <View></View>
    </View>
    )
   
}
export default MainPage