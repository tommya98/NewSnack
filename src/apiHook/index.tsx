import { useState, useEffect } from "react";
import store from "../localStorage";

export interface NewsResponse {
  id: number;
  title: string;
  content: string;
  comment: string;
  originalURL: string;
  date: string;
  user: number;
  imgURL: string;
}

export interface PublicNewsResponse {
  id: number;
  title: string;
  content: string;
  comment: string;
  originalURL: string;
  date: string;
  interest: string;
  imgURL: string;
  liked_user: number[];
  disliked_user: number[];
}

export interface UserInfoRespnose {
  id: number;
  username: string;
  nickname: string;
  birthYear: number;
  kakaoIsLinked: boolean;
  emailIsLinked: boolean;
  kakaoAddress: string;
  emailAddress: string;
  frequency: number;
  receptTime: string;
}

const usePrivateFeed = () => {
  const [news, setNews] = useState<NewsResponse[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/feed/private/list", {
      headers: {
        Authorization: `Bearer ${store.get("access_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);
  return news;
};

const usePublicFeed = (interests: string) => {
  const [news, setNews] = useState<PublicNewsResponse[]>();
  useEffect(() => {
    fetch(`http://localhost:8000/api/feed/public/list?interest=${interests}`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);
  console.log(news);
  return news;
};

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoRespnose>();
  useEffect(() => {
    fetch("http://localhost:8000/api/user/dj-rest-auth/user/", {
      headers: {
        Authorization: `Bearer ${store.get("access_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, []);
  return userInfo;
};

export { usePrivateFeed, useUserInfo, usePublicFeed };
