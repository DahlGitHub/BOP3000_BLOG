const BlogCard = ({icon, iconbg, title, date, description, author, img_author}) => (

   
    <div class="row col-lg-4 col-md-6 mb-4 mb-md-0">
      <div class="card h-100 border-0 hvr-grow">
        
        <div class="card-body my-3" data-aos="fade-down" data-aos-duration="800">
        <div class="d-flex justify-content-between p-2 bg-light rounded">
          <h5 class="card-title text-sub-title m-1">{title}</h5>
          <span class="fa-stack fa-1x">
            {iconbg}
          {icon}
          
          </span>
          </div>
          <p class="card-text text-content small">
            
            <p class="mx-3 mt-2 text-overflow">
            {description}
            </p>
          </p>
        
        <div> 
            <div class="d-flex justify-content-between mx-2">
            <small class="text-muted text-content small">
                <img src={img_author} class="img-fluid me-3 rounded-circle text-muted" width="25" alt="Author"/>
                {author}</small>
            <small class="text-muted text-content text-end">{date}</small>
            </div>
        </div>
       
        </div>
      </div>
    </div>

    )

export default BlogCard;

