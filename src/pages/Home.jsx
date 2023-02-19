import '../App.css';
import Card from '../components/GameCard';
import layout from "../style";
import { games } from '../constants';

function Home() {
  return (
    <>
    <div class="container mx-auto p-6">
  <div class="flex items-stretch -mx-4">
      {games.map((game, index) => (
        <Card key={game.id} {...game} index={index} />
      ))}
    </div>
    </div>
    </>
  );
}

export default Home;

