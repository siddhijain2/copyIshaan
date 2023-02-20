import '../App.css';
import Card from '../components/GameCard';
import styles from "../style";
import { games } from '../constants';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
        <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div class="container mx-auto p-4  ">
  <div class="flex flex-wrap  items-stretch -mx-4 justify-center">
      {games.map((game, index) => (
        <Card key={game.id} {...game} index={index} />
      ))}
    </div>
    </div>
    </>
  );
}

export default Home;

