import  React from 'react';
import { ScrollView, Text, View , SafeAreaView} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Styles from './home.Styles.js';
import homejson from './home.json'

const Home = ()=>{
  
    return(
        <SafeAreaView style={Styles.container}>
             <ScrollView  showsVerticalScrollIndicator={false}>
           <View style={Styles.headerIcons}>
         <EvilIcons name='location' color={'white'} size={35} />
         <EvilIcons name='bell' color={'white'} size={35} />
           </View>
           <View style={Styles.usernameContainer}>
            <Text style={Styles.userName}>Hi,Ali</Text>
            <MaterialCommunityIcons name='hand-peace' color='#c3a137' size={25}/>
           </View>
          <Text style={Styles.header}>Find a home</Text>
          <View style={Styles.optionsContainer}>
            <View style={Styles.rentOption}>
                <Text style={Styles.rent}>Rent</Text>
                </View>
                <View style={Styles.buyOption}>
              <Text style={Styles.buy}>Buy</Text>
             </View>
          </View>
            <View style={Styles.locationContainer}>
            <View style={Styles.locationWrapper}>
          <Text style={Styles.location}>Location</Text>
          <Text style={Styles.country}>ex. Russia,Mascow</Text>
          </View>
          <View style={Styles.locationIconContainer}>
         <MaterialCommunityIcons name='dots-square'size={30} color='whitte' style={Styles.locationIcon} />
         </View>
          </View>
          <View style={Styles.recentContainer}>
            <Text style={Styles.searches}>Recent searches</Text>
            <Text style={Styles.seeAll}>see all</Text>
          </View>
          <ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false}>
          {homejson.country.map((item)=>(
              <View  key={item.title} style={Styles.timezoneContainer}>
              <View style={Styles.timezoneWrapper}>
         <MaterialCommunityIcons name='clock-time-three-outline' size={30}  color= 'white' />
         </View>
         <View style={Styles.cityTimezoneWrapper}>
          <Text style={Styles.city}>{item.title}</Text>
          <Text style={Styles.timezone}>{item.subtitle}</Text>
         </View>
           </View> 
          ))}
          </ScrollView>
        <Text style={Styles.recomendations}>Recomendations</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {homejson.cards.map((item)=>(
             <View key={item.name} style={Styles.cardsContainer}>
             <View style={Styles.cardWrapper}>
              <Text style={Styles.vip}>{item.name}</Text>
             </View>
             </View>
          ))}

       </ScrollView>
       <Text style={Styles.end}>END</Text>
        </ScrollView>
          </SafeAreaView>
         
    )
}
export default Home;
