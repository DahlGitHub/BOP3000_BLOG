import React from 'react'
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

  return (
    <>
 <footer class=" text-lg-start text-dark bg-light">

<div class="container text-md-start pt-3">
 
  <div class="row mt-3">
  
    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
      <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png" width="100"/>
    </div>

    <div class="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4 small">

      <h6 class="pb-4 text-sub-title small">Project</h6>
      <p>
      <i class="fa-solid fa-cube fa-sm me-2"></i><HashLink smooth to="" class="text-dark text-decoration-none hvr-underline-reveal text-content">Deployment</HashLink>
      </p>
      <p>
      <i class="fa-brands fa-github fa-sm me-2"></i><HashLink href="" target="_blank" class="text-dark text-decoration-none hvr-underline-reveal text-content">GitHub Repository</HashLink>
      </p>

    </div>
   
    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 small">

      <h6 class="pb-4 text-sub-title small">Documentation</h6>

      <p>
      <i class="fa-regular fa-folder-open fa-sm me-2"></i><HashLink smooth to="/#documents" class="text-dark text-decoration-none hvr-underline-reveal text-content">Documents</HashLink>
      </p>
      <p>
      <i class="fa-solid fa-pencil fa-sm me-2"></i><HashLink smooth to="/#blog" class=" text-dark text-decoration-none hvr-underline-reveal text-content">Blog Status</HashLink>
      </p>

    </div>

    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 small">

      <h6 class="pb-4 text-sub-title small">Address</h6>

      <p><i class="fa-solid fa-location-dot fa-sm me-2"></i><a href="https://www.google.com/maps/place/Gullbringvegen+36,+3800+B%C3%B8,+Norge/@59.408752,9.0598326,17z/data=!3m1!4b1!4m5!3m4!1s0x46474937aa317627:0x31bd8465aebe863c!8m2!3d59.408752!4d9.0598326" target="_blank" class="text-decoration-none hvr-underline-reveal text-dark text-content">Gullbringvegen 36, 3800 Bø, Norge</a></p>
    </div>

  </div>
</div>

<div class="container pb-3">
  <hr/>
  
    <div class="small text-dark">
      <span class="row col d-flex justify-content-between my-2">
          <small class="text-sub-title col-lg-6 col-md-12">
              <img src="https://www.usn.no/getfile.php/13520469-1525427372/usn.no/om_USN/Logo%20og%20grafiske%20elementer/USN_logotype.png" alt="" height="40" className="d-i"/>
              University of South-Eastern Norway
          </small>
          <small class="text-sub-title col-lg-6 col-md-12 text-end">Copyright @ 2023 Bachelor</small>
        </span>
    </div>

</div>

</footer>
    </>
  );
}

export default Footer
