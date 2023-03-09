import { login } from "../../assets";
import LevelPage from "../../components/Kalamkaari/LevelPage";

function KalamkaariLevel() {
    return (
      <>
      <div className={`h-screen flex flex-col justify-center items-center relative mt-20`}>
      <img className=" h-[90%] z-0 " src={login} />
        <LevelPage />
      </div>
      </>
    );
  }
  
  export default KalamkaariLevel;