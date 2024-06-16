import Navbar from "../header/Navbar";
import card from "../../utils/imgs/cardimg.png";
import './Home.css'; // CSS 파일을 추가로 import

const Home = () => {
  return (
    <div className='home'>
      <header>
        <Navbar currentMenu='Home' />
      </header>
      <div className='flex h-screen'>
        <div className='basis-1/2 h-full bg-sky'>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='flex justify-center'>
              <img src={card} alt="card" className='w-9/12'/>
            </div>
            <div className="flex flex-col items-center w-full mt-11">
              <div className="text-7xl font-semibold text-white">
                <span className="text-[#1539CB]">SOL</span>깃 하게!
              </div>
              <div className="text-7xl font-semibold text-white">
                <span className="text-[#005DF9]">SHIN</span>이 나게!
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex items-center justify-center">
          <span className="text-center">test</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
