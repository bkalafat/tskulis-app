import React, { useState, useEffect, FC } from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as API from "../utils/api"
import { NewsType } from "../types/NewsType"


const NewsList: FC = () => {
  const [newsList, setNewsList] = useState<NewsType[]>()

  useEffect(() => {
    API.getNewsList().then(result => {
      setNewsList(result)
    })
  }, [])
  const onNewsClick = (news: NewsType) => {
    console.log("detay açılır " + news.caption)
  }
  return (
    <ScrollView >
      {newsList?.map(news =>
        <TouchableOpacity key={news.id} style={styles.container} onPress={() => onNewsClick(news)}>
          <Text style={styles.greeting} >{news.caption}</Text>
          <Image style={styles.logo}
            source={{
              uri: news.imgPath,
            }}
          />
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  },
  logo: {
    width:'auto',
    height:300

  },
});

export default NewsList;