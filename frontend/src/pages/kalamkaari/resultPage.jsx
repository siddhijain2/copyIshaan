import {useLocation} from 'react-router-dom';


function KalamkaariResult() {
  const {state} = useLocation();
  const {res}=state||{}
    return (
      <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nostrum illo sequi beatae accusantium, provident repellat maiores nulla dolorem, sed magnam repudiandae totam officia perferendis, placeat molestias? Repudiandae, totam obcaecati?</p>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas vero incidunt esse laboriosam. Distinctio facilis culpa ea, at tempore est amet ipsa veritatis libero quasi officiis aperiam dolorum fugiat quas!</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nihil nam. Sunt ipsam mollitia nesciunt rerum quos, sed eum quis libero illo dolor consectetur. Impedit iusto illo laboriosam facere exercitationem!</p>
      {console.log(res)}
       {console.log(state)}
      <p>{res.accuracy}</p>
      <p>{res.streak}</p>
      <p>{res.best_time}</p>
      <p>{res.cur_time}</p>
      </>
    );
  }
  
  export default KalamkaariResult;