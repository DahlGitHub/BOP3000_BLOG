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
            description="Our first bachelor meeting, listed down potential bachelor project concepts, desired frameworks, software tools, programming language etc. Made a group contract while trying to define  our project's scope." 
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Bachelor Blog" 
            date="Week 3 | Sprint 1" 
            description="Website for the bachelor blog is up and running, here you'll find weekly sprint updates and important documents regarding the bachelor project." 
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-pencil fa-stack-1x text-warning"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-warning"></i>}

            title="Sketch" 
            date="Week 4 | Sprint 1" 
            description="Bachelor Project Idea has been choosen, the team is scrambling together use cases - preparing to write the actual sketch document for our bachelor." 
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-lightbulb fa-stack-1x text-success"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-success"></i>}

            title="The Idea" 
            date="Week 5 | Sprint 2" 
            description="We started the week by delivering the sketch document for our bachelor. Which lead to us all discussing logos and a color scheme for our brand. Some of us even started looking and experimenting with technologies we want to use. We discovered that we need a simple wireframe to help us all get a vision of how the service will look." 
            author="Jøran"
            img_author="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="The beginning" 
            date="Week 6 | Sprint 2" 
            description="The team has begun to research the tech stack, with steady progress. Both the frontend and the backend team has clear goals ahead for the sprint. 
            
            We have decided to scrap the SQL database and have now set our eyes on the hosting and NOSQL database service Firebase.
            
           
            The frontend team has decided upon Next UI and Tailwind CSS as our design library. This is due to its compatibility and size when using NextJS. The login system is close to complete, and the application has been deployed."
            author="Martin"
            img_author="https://cdn.discordapp.com/attachments/1064270341901389865/1064920855035007087/CV_bilde.jpg"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-bell fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Milestone 1" 
            date="Week 7 | Sprint 2" 
            description="We’ve finished milestone 1 presentation, explaining our project and our decisions around our project. We’ve begun looking at the realtime data which is essential for communication on our site. Our domain has been set up to https://hexacore.no/ for our application. "
            author="Henrik"
            img_author="https://cdn.discordapp.com/attachments/1062428707639275650/1066377474100957204/henrik.jpg"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-pencil fa-stack-1x text-warning"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-warning"></i>}

            title="Project Description" 
            date="Week 8 | Sprint 2" 
            description="We've finished the project description, file has been uploaded to the blog. The group is continuing to work on the application."
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Core components" 
            date="Week 9 | Sprint 2" 
            description="This week we started work on implementing major functions such as a contact list, chat and general functionality to the layout. We also interviewed other students to figure out what features people want, the interviews gave us interesting viewpoints for us to reflect about."
            author="Jøran"
            img_author="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Core components" 
            date="Week 10 | Sprint 2" 
            description="For this week the team has focused on developing core components for the application. We have been working on a searchable user registry, chat and navigational solutions. These features will be improved upon during the weekend."
            author="Martin"
            img_author="https://cdn.discordapp.com/attachments/1064270341901389865/1064920855035007087/CV_bilde.jpg"
            />
        </div>
            
        </div>
    </div>
  
    

)};

export default Blog;