import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D9EDE8" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* <View style={{ flex: 1, paddingTop: '10%', display: "flex", flexDirection: "column", justifyContent: "center" }}> */}
          <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",marginTop:"20%"}}>
            <Image style={{ width: "150%" }} source={require('../main.png')} />
            <TouchableOpacity style={{ backgroundColor: "#323D60", width: "70%", height: "13%", justifyContent: "center", alignItems: "center",marginTop:"10%",borderRadius:50 }}><Text style={{ color: "white" }}>Begin your food journey </Text></TouchableOpacity>
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
