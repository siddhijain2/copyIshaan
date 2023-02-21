import "../App.css";
import Card from "../components/Hero/GameCard";
import TeamCard from "../components/Hero/Team";
import styles from "../style";
import { games, members } from "../constants";
import Hero from "../components/Hero/Hero";
import { FeatureCard } from "../components/Hero/FeatureCard";

function Home() {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div class="container mx-auto my-20 p-4 bg-SeaGreen saturate-70  rounded-[50px] ">
        <h1 className="flex flex-wrap justify-center font-poppins font-semibold xl:text-[72px] ss:text-[52px] text-[32px] text-Isabelline ss:leading-[100.8px] leading-[75px]">
          Our Products
        </h1>
        <div class="flex flex-wrap  items-stretch -mx-4 justify-center">
          {games.map((game, index) => (
            <Card key={game.id} {...game} index={index} />
          ))}
        </div>
      </div>
      <FeatureCard />
      <div class={`${styles.boxWidth} `}>
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 ">
            <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our team
              </h2>
              <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Explore the whole collection of open-source web components and
                elements built with the utility classes from Tailwind
              </p>
            </div>
            <div class="flex flex-wrap items-stretch -mx-4 justify-center">
            {members.map((member, index) => (
              <TeamCard key={member.id} {...member} index={index} />
            ))}
            </div>

          </div>
      </div>
    </>
  );
}

export default Home;
