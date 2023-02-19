import '../App.css';
import Card from '../components/GameCard';
import layout from "../style";
import { games } from '../constants';
import {hero} from '../assets';

function Home() {
  return (
    <>
    <img src={hero}></img>
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

