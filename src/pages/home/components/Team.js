import { useScramble} from 'use-scramble';

const Adrian = () => {

  const { ref, replay} = useScramble({
    text: "Adrian Dahl",
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 1,
    overflow: true,
    overdrive: false
  });

  return (
  <span ref={ref} onMouseOver={replay} onFocus={replay}/>
  )
}

const Martin = () => {

  const { ref, replay} = useScramble({
    text: "Martin Hodne",
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 1,
    overflow: true,
    overdrive: false
  });

  return (
  <span ref={ref} onMouseOver={replay} onFocus={replay}/>
  )
}

const Jøran = () => {

  const { ref, replay} = useScramble({
    text: "Jøran Bøsang",
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 1,
    overflow: true,
    overdrive: false
  });

  return (
  <span ref={ref} onMouseOver={replay} onFocus={replay}/>
  )
}

const Henrik = () => {

  const { ref, replay} = useScramble({
    text: "Henrik Lindam",
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 5,
    seed: 1,
    overflow: true,
    overdrive: false
  });

  return (
  <span ref={ref} onMouseOver={replay} onFocus={replay}/>
  )
}

const TeamCard = ({name, role, image, github, facebook, linkedin, color}) => (

    <div class="col-lg-3 col-sm-6 col-xs-6 grayscale hvr-float">
      <div class={color} data-aos="zoom-in-down" data-aos-duration="800">
      <div class="pb-2 bg-light rounded mx-3"><img src={image}
          alt="profil-bilde" width="150" class="img-fluid rounded-circle my-4"/>
        <h6 class="mb-0 text-sub-title text-dark">
          {name}
        </h6>
        <div>
          <span class="small text-sub-number mb-2">{role}</span>
          <div class="m-2">
          <a href={github} target="_blank"><i class="fa-brands mx-3 fa-github"></i></a>
          <a href={linkedin} target="_blank"><i class="fa-brands mx-3 fa-linkedin-in"></i></a>
          <a href={facebook} target="_blank">{<i class="fa-brands mx-3 fa-facebook-f"></i>}</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )


  
  const Team = () => {
  
    return (
      <div className="py-5" id="team">
        <div className="py-5 container">
        <div className="row m-3 text-center">
          
        <span class="text-number text-bg">04.</span>
            <p class="text-title text-break">Meet Our Team</p>
        </div>
        
        <div class="row row-col-lg-3 text-center justify-content-center mt-2">
      
          <TeamCard 
          name={<Adrian/>}
          role="Developer" 
          color="text-green"
          image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png"
          linkedin=""
          facebook=""
          github=""/>

          <TeamCard 
          name={<Martin/>}
          color="text-green"
          role="Developer" 
          image="https://cdn.discordapp.com/attachments/1064270341901389865/1064920855035007087/CV_bilde.jpg"
          linkedin=""
          facebook=""
          github=""/>

          <TeamCard 
          name={<Jøran/>}
          color="text-pastelred"
          role="Developer" 
          image="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg"
          linkedin=""
          facebook=""
          github=""/>

          <TeamCard 
          name={<Henrik/>}
          color="text-green"
          role="Developer" 
          image="https://cdn.discordapp.com/attachments/1062428707639275650/1066377474100957204/henrik.jpg"
          linkedin=""
          facebook=""
          github=""/>

        </div>
        
        </div>
      </div>
    );
  }

  export default Team;



