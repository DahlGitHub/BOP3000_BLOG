import Typewriter from 'typewriter-effect';
import OwlCarousel from 'react-owl-carousel';

const Tech = () => {

  return (
    <div>
    <div class="bg-light py-5" id="documents">
    <div class="container py-5">
    <div class="row">
    <div class="col-md-6 col-sm-12">
      <div class="container">
          <span class="text-number text-red">02.</span>
          <p class="text-title text-break">Bachelor Project</p>
          <span class="text-sub-title text-break">Made with
          <span class="text-red">
            <Typewriter 
              options={{
                strings: ['TypeScript', 'ReactJS', 'PostgreSQL', 'JavaScript'],
                autoStart: true,
                loop: true,
                delay: 100,
                pauseFor: 2000,
              }}
            /></span>
          </span>

      </div>
    </div>

</div>
        <div class="row my-5 text-center small">
        <OwlCarousel className='owl-theme' 
        loop margin={50}
        autoHeight={false}
        autoplay={true} 
        center={false}
        mouseDrag={false}
        dots={false}
        nav={false}
        autoplaySpeed={500}
        autoplayTimeout={500}
        items={16}>

    <div class='item'>
      <img src="https://cdn.discordapp.com/attachments/1064270341901389865/1065939303089315850/icons8-adobe-xd-48.png"/>
    </div>
    <div class='item'>
      <img src="https://cdn.discordapp.com/attachments/1064270341901389865/1065939303089315850/icons8-adobe-xd-48.png"/>
    </div>

</OwlCarousel>
        </div>             
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
  <path fill="#f8f9fa" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,74.7C384,96,480,128,576,133.3C672,139,768,117,864,96C960,75,1056,53,1152,37.3C1248,21,1344,11,1392,5.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
  </div>
)};

export default Tech;