import Image from "next/image";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
      <div className="hero flex pt-20 pb-24 gap-5">
        
        <div className="w-full md:w-2/3 lg:w-1/2 max-w-screen-sm flex flex-wrap content-center">
          <h1 className={`${styles.mainHeading} text-7xl font-bold pb-6`}>
            Find the<br />
            university that&apos;s right for you.
          </h1>
          <h2 className={`${styles.heroSubHeading} text-xl`}>
            Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem.<br />
            Voluptas atque autem totam.
          </h2>
        </div>

        <div className="hidden md:flex md:w-1/3 lg:w-1/2 justify-center items-center">
          <Image
            src="/caspar-david-friedrich--wanderer-above-the-sea-of-fog.png"
            width={384}
            height={383}
            alt="Painting titled 'Wanderer above the Sea of Fog' by Caspar David Friedrich"
          />
        </div>
      </div>
  );
}
