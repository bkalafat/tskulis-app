import React, { useState, useEffect, FC } from "react"
import { ScrollView, TouchableOpacity } from 'react-native'
import * as API from "../utils/api"
import { NewsType } from "../types/NewsType"
import NewsCard from "../components/NewsCard"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native"


const NewsList: FC = () => {
  const [newsList, setNewsList] = useState<NewsType[]>()

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  useEffect(() => {
    API.getNewsList().then(result => {
      setNewsList(result)
    })
  }, [])
  const onNewsClick = (news: NewsType) => {
    navigation.navigate("NewsDetail", news)
  }
  return (
    <ScrollView style={{ marginTop: 66 }} >
      {newsList?.map(news =>
        <TouchableOpacity key={news.id} onPress={() => onNewsClick(news)}>
          {NewsCard(news)}
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};


export default NewsList;
