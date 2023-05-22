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
                    <p class="text-content mt-4">
                    Our goal with the project is to develop an application that makes it easier for groups to communicate, organize, structure, and so on, their work within the group. Since there are various tools already available today, the plan is to conduct surveys of groups that use other tools to see what they like and possibly miss in other applications.
                    </p>
                    <br/>
                    <p class="text-content">The vision for the application Hexacore is a platform that utilizes various planning tools to streamline work so that groups can choose what they need for the platform themselves. We believe that students who need to work together on projects or organizations with many subgroups are the most logical end users.
                    </p>
         
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Description;