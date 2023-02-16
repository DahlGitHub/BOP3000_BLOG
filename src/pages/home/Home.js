import React from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

import Description from './components/Description'
import Documents from './components/Documents'
import Blog from './components/Blog'
import Tech from './components/Tech'
import Team from './components/Team'
import { useScramble} from 'use-scramble';

const Title = () => {

  const { ref, replay} = useScramble({
    text: "Hexacore",
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 1,
    overdrive: false
  });

  return (
  <span ref={ref} onMouseOver={replay} onFocus={replay}/>
  )
}



const Frontpage = () => {
  return (
    <div className="bg-light" id="top">
      <div className="bg-svg rounded-4 mx-5">
    
      
        <div class="py-5 pb-5 container text-center">
                    <p class="text-title text-break text-light"><Title/></p>
                    <span class="text-title text-break text-light py-5">
                    <small class="text-primary small py-5">
                    <Typewriter 
                        options={{
                          strings: ['Powerful', 'Simple', 'Innovative'],
                          autoStart: true,
                          loop: true,
                          delay: 50,
                          pauseFor: 1000,
                        }}
                        />
                        </small>
                    </span>
                    <div className='py-5'>
                    <a target="_blank" href='https://hexacore.no'> 
                    <button type="button" className='btn btn-outline-light'>
                    <i class="fa-solid fa-cube"></i><span class="text-content mx-2">Hexacore.no</span>
                    </button>
                    </a>
                    </div>

        </div>
        <div class="frontsvg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F8F9FA"  fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,138.7C640,160,800,224,960,224C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
        
      </div>
      <div className="frontprototype text-center">


      </div>
    </div>
    )
}

const Home = () => {
  return (
    <>
        <Frontpage/>
        <Description />
        <Documents />
        <Tech />
        <Blog />
        <Team />
    </>
  )
}



export default Home;