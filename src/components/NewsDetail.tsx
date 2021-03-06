import React from "react"
import { Image, StyleSheet, Text } from 'react-native'
import { NewsType } from "../types/NewsType"
import { WebView } from 'react-native-webview';

const NewsDetail = (props: any) => {

  const news: NewsType = props.route.params

  return <>


    <WebView
      originWhitelist={['*']}
      source={{
        html: "<div>" +
          news.content +
          "</div>"
      }}
    ><Text style={styles.caption}>{news.caption}</Text>
    <Image style={styles.image}
      source={{
        uri: news.imgPath,
      }} /></WebView>
  </>;
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

export default NewsDetail