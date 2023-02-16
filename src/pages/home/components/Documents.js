import InfoBlock from "./InfoBlock";
import Sketch from "../../../assets/pdf/Sketch.pdf";
import Description from "../../../assets/pdf/Description.pdf"
import Presentation from "../../../assets/pdf/Presentation.pdf"

const Documents = () => {

  return (
    <div class="bg-light">
    <div class="bg-beigesvg" id="documents">
    <div class="container py-5">
        <div class="row mt-5">
        <div class="text-center">
        <span class="text-number text-red">02.</span>
            <span class="text-title">Documents</span>
            </div>
        </div>
        <div class="row my-5">

        <InfoBlock
            link={Sketch}
            title="Sketch.docx"
            description="Small sketch for the Hexacore project."
            icon={<i class="fa-solid fa-file-word fa-stack-1x bg-fix block w-100 mb-4 text-primary"></i>}
            iconbg={<i class="fa-solid fa-square fa-stack-2x opacity-25 text-primary"></i>}/>

        <InfoBlock
            link={Description} 
            title="Description.docx"
            description="The beginning of the Hexacore project."
            icon={<i class="fa-solid fa-file-word fa-stack-1x bg-fix block w-100 mb-4 text-primary"></i>}
            iconbg={<i class="fa-solid fa-square fa-stack-2x opacity-25 text-primary"></i>}/>

        <InfoBlock title="Agreement.docx"
            description="Coming soon"
                        icon={<i class="fa-solid fa-file-word fa-stack-1x bg-fix block w-100 mb-4 text-dark"></i>}
            iconbg={<i class="fa-solid fa-square fa-stack-2x opacity-25 text-dark"></i>}/>

        <InfoBlock title="Report.docx"
            description="Coming soon"
            icon={<i class="fa-solid fa-file-word fa-stack-1x bg-fix block w-100 mb-4 text-dark"></i>}
            iconbg={<i class="fa-solid fa-square fa-stack-2x opacity-25 text-dark"></i>}/>
        
        <InfoBlock 
            link={Presentation}
            title="Presentation 1.pptx"
            description="Milestone 1 is complete, with a small presentation of our project."
            icon={<i class="fa-solid fa-file-powerpoint fa-stack-1x bg-fix block w-100 mb-4 text-red"></i>}
            iconbg={<i class="fa-solid fa-square fa-stack-2x opacity-25 text-red"></i>}/>

        <InfoBlock title="Presentation 2.pptx"
            description="Coming soon"
            icon={<i class="fa-solid fa-file-powerpoint fa-stack-1x bg-fix block w-100 mb-4 text-dark"></i>}
            iconbg={<i class="fa-solid fa-square fa-stack-2x opacity-25 text-dark"></i>}/>

        <InfoBlock title="Presentation 3.pptx"
            description="Coming soon"
            icon={<i class="fa-solid fa-file-powerpoint fa-stack-1x bg-fix block w-100 mb-4 text-dark"></i>}
            iconbg={<i class="fa-solid fa-square fa-stack-2x opacity-25 text-dark"></i>}/>
            
        <InfoBlock title="GitHub"
            description="Coming soon"
            icon={<i class="fa-brands fa-github fa-stack-1x bg-fix block w-100 mb-4"></i>}
            iconbg={<i class="fa-solid fa-square fa-stack-2x opacity-25 text-dark"></i>}/>           
        </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
<path fill="#F9F2ED" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,261.3C384,245,480,171,576,149.3C672,128,768,160,864,176C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
  </div>
)}

export default Documents;