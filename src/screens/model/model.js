import React, { useRef } from "react";
import { SafeAreaView, TouchableOpacity, Text, View } from "react-native";
import BottomModel from "../../components/bottomModel/bottomModel";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './model.Styles.js'

const Model = () => {
  
  const bottomSheet = useRef();

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
    <MaterialCommunityIcons name="hamburger" size={35} />
     <MaterialCommunityIcons name="qrcode" size={35} />
        </View>
        <Text style={styles.realState}>Real Estate</Text>
        <BottomModel bottomSheet={bottomSheet} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => bottomSheet.current.show()}
      >
        <Text style={styles.text}>Open modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};



export default Model;