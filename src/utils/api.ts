import { getEnvironmentUrl } from "./helper"
import { NewsType } from "../types/NewsType"

export const getNewsList = (): Promise<NewsType[]> => {
  const envUrl = getEnvironmentUrl()
  return fetch(envUrl + "news/get").then(res => res.json(), error => console.log(error))
}