import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';

const BookWriter = () => {
  
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'kalpurush': require('../../assets/font/kalpurush.ttf')
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  return (
    <ImageBackground 
    source={require('../../assets/background_image_desc.png')}
    style={styles.app_bg}
    >
      {
        fontLoaded &&
        <ScrollView style={styles.book_Writer}>
          <Text style={[styles.book_Writer_name, { fontFamily: 'kalpurush' }]}>থিবো মেরিস</Text>
          <Text style={[styles.book_Writer_Desc, { fontFamily: 'kalpurush' }]}>আমার নাম থিবো মেরিস এবং আমি ফ্রান্স থেকে এসেছি কিন্তু আমি এখন অর্ধ দশকেরও বেশি সময় ধরে জাপানে বাস করছি। পড়াশুনার পর বিশ্ববিদ্যালয়ে জাপানি হয়ে, আমি ফ্রান্স ছেড়ে আন্তর্জাতিক সম্পর্কের সমন্বয়কারী হিসেবে জাপান সরকারের হয়ে কাজ শুরু করি। এখন, আমি এখানে টোকিওতে অর্থনীতির জন্য জাপানের শীর্ষস্থানীয় বিশ্ববিদ্যালয়ে আমার এমবিএ পড়ছি। আমার স্বপ্ন তাড়া করার জন্য আমাকে ফ্রান্সে আমার শহর থেকে হাজার হাজার মাইল দূরে নিয়ে গিয়েছিলাম এবং ইংরেজি এবং জাপানি উভয় ভাষাতেই দক্ষতার প্রয়োজন ছিল। আমি যখন আমার জীবনের দিকে ফিরে তাকাই, তখন আমার অনুমান করার কোন উপায় ছিল না যে আমি জাপানে থাকব, আমি এমবিএ করব বা আমি ব্যক্তিগত বিকাশের বিষয়ে একটি ওয়েবসাইট তৈরি করব! আমি বুঝতে পারি যে এটি জীবনের অনির্দেশ্যতা যা এটিকে আরও আকর্ষণীয় করে তোলে। আমি আশা করি আপনি আমার সম্পর্কে আরও শিখতে উপভোগ করবেন কারণ আমি এই ওয়েবসাইটে আপনার সাথে আমার জীবনের যাত্রা ভাগ করে নিচ্ছি। এটা আমার আশা যে আপনি আমার গল্পে অনুপ্রেরণা পাবেন কারণ আপনি আপনার নিজের লক্ষ্যগুলি অনুসরণ করবেন।</Text>
        </ScrollView>
      }
    </ImageBackground>
  )
}

export default BookWriter

const styles = StyleSheet.create({
  app_bg:{
    display: 'flex',
    height: "100%",
    width: "100%",
  },
  book_Writer_name:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
    marginBottom: 20,
    fontWeight: "bold"
  },
  book_Writer_Desc:{
    fontSize: 20,
    lineHeight: 30,
    marginHorizontal: 10,
    marginBottom: 40
  }

})