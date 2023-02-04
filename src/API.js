import axios from "axios";
import useSWR from "swr";

const CONSUMET_API = "https://api.consumet.org";
const fetcher = (url) => axios.get(url).then((res) => res.data);

function useAnime(id, provider) {
  const { data, error, isLoading } = useSWR(
    `${CONSUMET_API}/anime/${provider}/${id}`,
    fetcher
  );

  return {
    anime: data,
    isLoading,
    isError: error,
  };
}

function useAnimeInfo(provider, animeId) {
  const { data, error, isLoading } = useSWR(
    `${CONSUMET_API}/anime/${provider}/info/${animeId}`,
    fetcher
  );

  if (!anime) {
    return {
      info: data,
      isLoading,
      isError: true,
    };
  }
  return {
    info: data,
    isLoading,
    isError: error,
  };
}

function useTopAnime(provider) {
  const { data, error, isLoading } = useSWR(
    `${CONSUMET_API}/anime/${provider}/top-airing`,
    fetcher
  );

  return {
    topAnime: data,
    isLoading,
    isError: error,
  };
}

export { useAnime, useTopAnime, useAnimeInfo };
