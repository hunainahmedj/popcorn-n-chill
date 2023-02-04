import { useAnimeInfo } from "@/API";
import { useRouter } from "next/router";

export default function Anime() {
  const router = useRouter();
  const { id } = router.query;

  // useEffect(() => {
  //   const { info, isLoading, isError } = useAnimeInfo("gogoanime", id);

  // }, [router.query])

  return (
    <>
      <video width="1280" height="720" controls>
        <source
          src="https://wwwx15.gofcdn.com/videos/hls/JTiKCJUp9-4bF_ucaak5lQ/1675498030/197704/ea8006e702ad68a125cb3b28a2bfb3fb/ep.2.1673894837.1080.m3u8"
          type="application/x-mpegURL"
        />
      </video>
    </>
  );
}
