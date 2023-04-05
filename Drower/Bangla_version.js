import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Font from 'expo-font';
import bookDataList from '../Component/db/bookData'

const Home = () => {
  const navigation = useNavigation()
  const [bookData, setBookData] = useState(bookDataList)

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'solimanLifi': require('../assets/font/SolaimanLipi_22-02-2012.ttf')
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  

  return (
    <ImageBackground 
      source={require('../assets/background_image.png')}
      style={styles.app_bg}
    >
      <ScrollView>     
        <View style={styles.Container}> 
          {bookData.map((chapter)=>{
            const {title,desc,selector,id} = chapter
            return (
              <TouchableOpacity 
                key={id}
                style={styles.chapterName}
                onPress={()=>navigation.navigate("DetalseData",{
                  desc, selector
                })}
              >
                <Text style={[
                  styles.chapterText,
                  fontLoaded && { fontFamily: 'solimanLifi' }
                ]}>{selector}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  app_bg:{
    display: 'flex',
    height: "100%",
    width: "100%"
  },
  Container:{
    width: "100%",
    marginTop: 15
  },
  chapterName: {
    backgroundColor: "#427866",
    borderRadius: 10,
    margin: 10,
  },
  chapterText:{
    fontSize: 22,
    padding: 10,
    color: "#fff",
  }
})
