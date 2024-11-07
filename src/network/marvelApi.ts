import axios from "axios";
import * as Crypto from "expo-crypto";

const BASE_URL = "https://gateway.marvel.com";
const privateKey = "3dd6699238f625b6f13830a7b19e5bbdd732194b";
const publicKey = "1f298547149da280d6e00233f504e325";

const marvelApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: publicKey,
  },
});

marvelApi.interceptors.request.use(async (config) => {
  const timestamp = Number(new Date());
  const signedString = timestamp + privateKey + publicKey;
  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.MD5,
    signedString,
  );

  if (config.url) {
    const queryStringParam = `&ts=${timestamp}&hash=${digest}`;
    const url = new URL(config.url, config.baseURL);
    url.search += queryStringParam;
    config.url = url.toString();
  }

  return config;
});

export { marvelApi };
