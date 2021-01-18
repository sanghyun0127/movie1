import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Stack from "./navigation/Stack";
import { enableScreens } from "react-native-screens";
enableScreens();

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) =>
  fonts.map((font) => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
  /*
  [A, setA] = useState(B)
  1. state 변수인 A를 반환한다
  2. A를 B값으로 초기화한다
  3. setA 함수를 통해 A를 갱신한다
  */
  const [isReady, setIsReady] = useState(false);
  //loading 화면 ** cacheImages는 여기서 필요한 image 불러오기
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1516085216930-c93a002a8b01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      require("./assets/splash.png"),
    ]);
    //필요한 font 불러오기
    const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);
    // Promise = async + await
    return Promise.all([...images, ...fonts]);
  };
  // 다됐으면 IsReady를 ture로 바꾸고 홈화면으로 넘어가라
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
      autoHideSplash={false}
    />
  );
}
