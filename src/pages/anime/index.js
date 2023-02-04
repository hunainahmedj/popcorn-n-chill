import ContentCarousel from "@/components/ContentCarousel";
import { useTopAnime } from "../../API";

export default function AnimeHome() {
  const { topAnime, isLoading, isError } = useTopAnime("gogoanime");

  return (
    <>
      <h1>Anime</h1>
      <ContentCarousel params={{ content: topAnime, isLoading, isError }} is />
    </>
  );
}

// export async function getServerSideProps({}) {
//   const url = "https://api.consumet.org/anime/gogoanime/top-airing";
//   const data = async () => {
//     try {
//       const { data } = await axios.get(url, { params: { page: 1 } });
//       return data;
//     } catch (err) {
//       throw new Error(err.message);
//     }
//   };

//   return {
//     topAnime: await data,
//   };
// }
