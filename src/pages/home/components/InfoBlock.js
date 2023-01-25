const InfoBlock = ({link, title, description, icon, iconbg}) => (
    <div class="col-lg-3 col-md-6 mb-4 mb-md-0 hvr-bob">
      <div class="mx-5 mb-5 text-center" data-aos="fade-down" data-aos-duration="800">
        <a href={link} without rel="noopener noreferrer" target="_blank">
        <div class="bg-rotate">
        
          <span class="fa-stack fa-3x m-4">
          {iconbg}
          {icon} 
          
          </span>    
          </div>
        <span class="text-sub-title">{title}</span>
        <p class="text-content mt-3">{description}</p>
      </a>
      </div>
    </div>
  )

export default InfoBlock;