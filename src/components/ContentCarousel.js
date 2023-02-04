import Image from "next/image";
import Link from "next/link";

import styles from "./contentcarousel.module.scss";

export default function ContentCarousel({ params }) {
  const { content, isLoading, isError } = params;
  if (!isLoading & !isError) {
    console.log("Loaded");
    return (
      <div className={styles.carousel}>
        {content.results.map((element) => (
          <div className={styles.carouselitem} key={element.id}>
            <Link href={`/anime/${element.id}`}>
              <Image
                alt={element.id}
                src={element.image}
                width={240}
                height={320}
              />
              <p className={styles.carouselitemlink}>{element.title}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
