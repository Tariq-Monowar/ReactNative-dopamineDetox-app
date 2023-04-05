import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';

const DetalseData = ({route}) => {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'kalpurush': require('../assets/font/kalpurush.ttf')
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return (
    <ImageBackground 
    source={require('../assets/background_image_desc.png')}
    style={styles.app_bg}
    >
    {
      fontLoaded &&
      <ScrollView>
        <Text style={[styles.chapterInsidText, { fontFamily: 'kalpurush' }]}>{route.params.desc}</Text>
      </ScrollView>
    }

    </ImageBackground>
  )
}

export default DetalseData

const styles = StyleSheet.create({
  app_bg:{
    display: 'flex',
    height: "100%",
    width: "100%",
  },
  chapterInsidText:{
    fontSize: 22,
    // lineHeight: 30,
    paddingHorizontal: 10,
    marginVertical: 20,
    fontFamily: "solimanLifi"
  }
})