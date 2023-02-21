import '../App.css';
import styles from "../style";
import { games, members } from '../constants';
import {Hero,Card,About} from '../components/Home';
import TeamCard from "../components/Home/Team";

function Home() {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div class="container mx-auto my-20 p-4 bg-Tomato rounded-[50px] ">
        <h1 className="flex flex-wrap justify-center font-semibold xl:text-[72px] ss:text-[52px] text-[32px] text-primary ss:leading-[100.8px] leading-[75px]">
          Our Products
        </h1>
        <div class="flex flex-wrap  items-stretch -mx-4 justify-center">
          {games.map((game, index) => (
            <Card key={game.id} {...game} index={index} />
          ))}
        </div>
      </div>
      <About />
      <div class={`${styles.boxWidth} `}>
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 ">
            <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                Our team
              </h2>
              <p class="font-light text-gray-500 sm:text-xl">
                We are final year students studying in IIT BHU Varanasi with an inclination towards development.
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
