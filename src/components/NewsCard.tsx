import React from "react"
import { Image, StyleSheet, Text } from 'react-native'
import { NewsType } from "../types/NewsType"

const NewsCard = (news: NewsType) => {
  return <>
    <Text style={styles.caption}>{news.caption}</Text>
    <Image style={styles.image}
      source={{
        uri: news.imgPath,
      }} /></>;

}

const styles = StyleSheet.create({
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  },
  image: {
    width: 'auto',
    height: 300
  },
});

export default NewsCard