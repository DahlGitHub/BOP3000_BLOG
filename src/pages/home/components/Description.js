import Typewriter from 'typewriter-effect';
import logo from '../../../assets/logo/logospacing.png';

const Description = () => {
    return (
        <div className="bg-light" id="project">
          <div className="container py-5">
            <div class="row">

              <div class="col-md-6 col-sm-12 animate text-center">
                <div class="py-5 pb-5 container">
                 <img src={logo} width="300" class="img-fluid rounded"/>
                </div>
              </div>

              <div class="col-md-6 col-sm-12">
                <div class="py-5 pb-5 container">
                    <span class="text-number text-bg">01.</span>
                    <p class="text-title text-break">Bachelor Project</p>
                    <span class="text-sub-title text-break">Made by
                    <span class="text-bg">
                      <Typewriter 
                        options={{
                          strings: ['Henrik Lindam', 'Adrian Dahl', 'Jøran Bøsang', 'Martin Hodne'],
                          autoStart: true,
                          loop: true,
                          delay: 100,
                          pauseFor: 2000,
                        }}
                      /></span>
                    </span>
                    <p class="text-content mt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <br/>
                    <p class="text-content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
         
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Description;