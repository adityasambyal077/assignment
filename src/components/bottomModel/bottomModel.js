
import React from "react";
import {  TouchableOpacity, Text, View } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Styles from './bottomModel.Styles.js'
import bottomModelJson from '../bottomModel/bottomModel.json'

const BottomModel = ({bottomSheet}) => {
  return (
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={700}>
        <View style={Styles.containerMain}>
        <View style={Styles.header}>
           <Entypo name='cross' size={25} color='black'  onPress={() => bottomSheet.current.close()} />
           <Text style={Styles.filter}>Filters</Text>
           <Text style={Styles.reset}>Reset</Text>
        </View>
            <Text style={Styles.starRange}>Star Range</Text>
            <View style={Styles.starRangeContainer}>
                <View style={Styles.innerWrapper}>
               <MaterialCommunityIcons name='greenhouse'color='#d4d4d4' size={26} />
               <Text style={Styles.differentRanges}>House</Text>
                </View>
                <View  style={Styles.innerWrapper}>
             <MaterialIcons name='apartment'color='#d4d4d4' size={26} />
             <Text style={Styles.differentRanges}>Apartment</Text>
                </View>
                <View style={Styles.innerWrapper}>
                <MaterialIcons name='scatter-plot'color='#d4d4d4' size={26} />
             <Text style={Styles.differentRanges}>Plot</Text>
                </View>
                <Text style={Styles.differentRanges} >All</Text>
            </View>
            <Text style={Styles.starRange}>Price Range</Text>
            <Slider
                    style={Styles.slider}
                    minimumValue={0}
                    maximumValue={50}
                    minimumTrackTintColor="#77a99c"
                    maximumTrackTintColor="grey"
                    thumbTintColor="#77a99c"
                    step={3}  
                />
           <View style={Styles.header}>
            <Text style={Styles.sliderRange}>0$</Text>
            <Text style={Styles.setRange}>250$</Text>
            <Text style={Styles.sliderRange}>2000$</Text>
           </View>
           <Text style={Styles.starRange}>Star Range</Text>
               <View style={Styles.innerContainer}>
               {bottomModelJson.starRange.map((item)=>(
               <View key={item.stars} style={{flexDirection:'row'}}>
              <AntDesign name='star'color='#feb823' size={20} />
              <Text style={Styles.stars}>{item.stars}</Text>
               </View>
                     ))}
           </View>
            <Text style={Styles.starRange}>Bed Rooms</Text>
            <View style={Styles.innerContainer}>
               {bottomModelJson.requirement.map((item)=>(
            <Text key={item.beds} style={Styles.beds}>{item.beds}</Text>
            ))}
           </View>
           <Text style={Styles.starRange}>Bathrooms</Text>
            <View style={Styles.innerContainer}>
            {bottomModelJson.requirement.map((item)=>(
            <Text key={item.beds} style={{color:'black',fontSize:15}}>{item.beds}</Text>
            ))}
           </View>
           <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>Apply Changes</Text>
           </TouchableOpacity>
            </View>
      </BottomSheet>
  );
};


export default BottomModel;;