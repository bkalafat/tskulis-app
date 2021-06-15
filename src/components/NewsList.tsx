import React, { useState, useEffect, FC } from "react"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
    <ScrollView>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  },
  logo: {
    width: "100%",
    height: 300,
  },
});

export default NewsList;