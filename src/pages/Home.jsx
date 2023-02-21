import '../App.css';
import styles from "../style";
import { games } from '../constants';
import {Hero,Card,About,FeatureCard} from '../components/Home';

function Home() {
  return (
    <>
        <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div class="container mx-auto my-20 p-4 bg-AirForceBlue rounded-[50px] ">
    <h1 className="flex flex-wrap justify-center font-poppins font-semibold xl:text-[72px] ss:text-[52px] text-[32px] text-Isabelline ss:leading-[100.8px] leading-[75px]">
        Our Products
    </h1>
  <div class="flex flex-wrap  items-stretch -mx-4 justify-center">
      {games.map((game, index) => (
        <Card key={game.id} {...game} index={index} />
      ))}
    </div>
    </div>
    <About/>
    </>
  );
}

export default Home;

