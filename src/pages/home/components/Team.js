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

const TeamCard = ({name, role, image, github, linkedin, color}) => (

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
          image="https://cdn.discordapp.com/attachments/1349408288290242593/1451566624414109806/IMG_4643_1.png?ex=6946a444&is=694552c4&hm=4e46403ecd1003b6a9827ee0174b09dea5078a6b98cc230a7179625b84c0e84a&"
          linkedin=""
   
          github="https://github.com/DahlGitHub"/>

          <TeamCard 
          name={<Martin/>}
          color="text-green"
          role="Developer" 
          image="https://cdn.discordapp.com/attachments/1064270341901389865/1064920855035007087/CV_bilde.jpg?ex=69461015&is=6944be95&hm=efafc791053b66505c1bbeac6906a9e5e0d1b4a99734a28a6590e3cdbb1a9240&"
          linkedin=""
          
          github="https://github.com/Wohine"/>

          <TeamCard 
          name={<Jøran/>}
          color="text-pastelred"
          role="Developer" 
          image="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg?ex=69466112&is=69450f92&hm=c4172a1d5d8277ba5fb3e34d9f9479508a6dc39a1b54b612329e5d58c8d4af91&"
          linkedin=""
        
          github="https://github.com/Jorancj"/>

          <TeamCard 
          name={<Henrik/>}
          color="text-green"
          role="Developer" 
          image="https://cdn.discordapp.com/attachments/1062428707639275650/1066377474100957204/henrik.jpg?ex=694616aa&is=6944c52a&hm=0751b0d4380b26e262092ffb2ed485e96897bd110b9184e266f6e6c88e9379b7&"
          linkedin=""
       
          github="https://github.com/Linrik/"/>

        </div>
        
        </div>
      </div>
    );
  }

  export default Team;



