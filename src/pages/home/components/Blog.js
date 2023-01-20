import BlogCard from "./BlogCard";

const Blog = () => {

return (
    <div className="py-4" id="blog">
        <div className="py-5 container">
        <div className="row m-5">
            
            <div class="col-md-6 col-sm-12 text-center bg-bluesvg">
                <div class="container pb-3 animate">
                 <img src="https://cdn.discordapp.com/attachments/1062428707639275650/1065781418350878781/notebook.png" width="300" class="img-fluid rounded"/>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
            <span class="text-number text-primary">03.</span>
            <p class="text-title text-break">Bachelor Blog</p>
            <span class="text-content">Weekly project reports for the bachelor, summarizes the status and progress within the given week and sprint.</span>
            </div>
        </div>
        
        <div class="row justify-content-left mt-2">
  
            <BlogCard 
            icon={<i class="fa-solid fa-lightbulb fa-stack-1x text-success"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-success"></i>}
            title="Planning" 
            date="Week 2 | Sprint 0" 
            description="Vi startet bachelorprosjektet med et møte med oppdragsgiver. Vi ble enige om hva slags teknologier vi skal bruke, samt hva som var de sentrale funksjonene å få med i applikasjonen. Websiden til prosjektet er oppe, og vil begynne å legge ut notater og diverse info der." 
            author="Martin"
            img_author="https://cdn.discordapp.com/attachments/1064270341901389865/1064920855035007087/CV_bilde.jpg"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Bachelor Blog" 
            date="Week 3 | Sprint 0" 
            description="Websiden til prosjektet er oppe, og vil begynne å legge ut notater og diverse info der." 
            author="Martin"
            img_author="https://cdn.discordapp.com/attachments/1064270341901389865/1064920855035007087/CV_bilde.jpg"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-pencil fa-stack-1x text-warning"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-warning"></i>}

            title="Sketch" 
            date="Week 3 | Sprint 0" 
            description="Websiden til prosjektet er oppe, og vil begynne å legge ut notater og diverse info der." 
            author="Jøran"
            img_author="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg"
            />

        </div>
            
        </div>
    </div>
  
    

)};

export default Blog;