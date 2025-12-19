import BlogCard from "./BlogCard";

const Blog = () => {

return (
    <div className="py-4" id="blog">
        <div className="py-5 container">
        <div className="row m-5">
            
            <div class="col-md-6 col-sm-12 text-center bg-bluesvg">
                <div class="container pb-3 animate">
                 <img src="https://cdn.discordapp.com/attachments/1349408288290242593/1451568572810661928/penpng.png?ex=6946a614&is=69455494&hm=8c9531e625f29c3dc1cee8f8df6e12e38fe20953c788c45637306d9b75ed7c4a&" width="300" class="img-fluid rounded"/>
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
            title="Ch. 1 | Bachelor Project Preparation" 
            date="Week 2 | Sprint 0" 
            description="During our first bachelor meeting, we brainstormed potential project concepts, discussed desired frameworks, software tools, and programming languages. We also created a group contract to define the project's scope."
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/1349408288290242593/1451566624414109806/IMG_4643_1.png?ex=6946a444&is=694552c4&hm=4e46403ecd1003b6a9827ee0174b09dea5078a6b98cc230a7179625b84c0e84a&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Ch. 1.1 | Bachelor Blog" 
            date="Week 3 | Sprint 1" 
            description="Our bachelor blog website is now up and running. Here, you'll find weekly sprint updates and access to important documents related to the bachelor project." 
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/1349408288290242593/1451566624414109806/IMG_4643_1.png?ex=6946a444&is=694552c4&hm=4e46403ecd1003b6a9827ee0174b09dea5078a6b98cc230a7179625b84c0e84a&"
            />

            <BlogCard 
             icon={<i class="fa-solid fa-lightbulb fa-stack-1x text-success"></i>}
             iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-success"></i>}
            

            title="Ch. 1.2 | Project Idea" 
            date="Week 4 | Sprint 1" 
            description="We have selected the bachelor project idea and are now busy gathering use cases. This will help us in preparing the actual sketch document for our bachelor project." 
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/1349408288290242593/1451566624414109806/IMG_4643_1.png?ex=6946a444&is=694552c4&hm=4e46403ecd1003b6a9827ee0174b09dea5078a6b98cc230a7179625b84c0e84a&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-pencil fa-stack-1x text-warning"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-warning"></i>}

            title="Ch. 1.3 | Sketch Document" 
            date="Week 5 | Sprint 2" 
            description="We began the week by finalizing and delivering the sketch document for our bachelor project. This led us to engage in discussions about logos and color schemes for our brand. Additionally, some team members started exploring and experimenting with the technologies we plan to use. During this process, we realized the need for a simple wireframe to visualize the service." 
            author="Jøran"
            img_author="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg?ex=69466112&is=69450f92&hm=c4172a1d5d8277ba5fb3e34d9f9479508a6dc39a1b54b612329e5d58c8d4af91&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Ch. 2 | Tech Stack Research" 
            date="Week 6 | Sprint 2" 
            description="We have initiated research on the tech stack and are making steady progress. Both the frontend and backend teams have set clear goals for the sprint. After careful consideration, we decided to move away from the SQL database and focus on hosting and using Firebase as our NoSQL database service. For frontend design, we opted for Next UI and Tailwind CSS due to their compatibility and size advantages when using NextJS. The login system is nearing completion, and the application has been successfully deployed."            
        author="Martin"
            img_author="https://cdn.discordapp.com/attachments/1064270341901389865/1064920855035007087/CV_bilde.jpg?ex=69461015&is=6944be95&hm=efafc791053b66505c1bbeac6906a9e5e0d1b4a99734a28a6590e3cdbb1a9240&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-bell fa-stack-1x text-danger"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-danger"></i>}

            title="Ch. 2.1 | Milestone 1" 
            date="Week 7 | Sprint 2" 
            description="We successfully completed the milestone 1 presentation, where we explained our project and the decisions we made. Furthermore, we started exploring the implementation of realtime data, which is essential for effective communication on our website."
            author="Henrik"
            img_author="https://cdn.discordapp.com/attachments/1062428707639275650/1066377474100957204/henrik.jpg?ex=694616aa&is=6944c52a&hm=0751b0d4380b26e262092ffb2ed485e96897bd110b9184e266f6e6c88e9379b7&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-pencil fa-stack-1x text-warning"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-warning"></i>}

            title="Ch. 3 | Project Description" 
            date="Week 8 | Sprint 2" 
            description="The project description has been completed, and the file has been uploaded to the blog. Our group is actively continuing the work on the application."
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/1349408288290242593/1451566624414109806/IMG_4643_1.png?ex=6946a444&is=694552c4&hm=4e46403ecd1003b6a9827ee0174b09dea5078a6b98cc230a7179625b84c0e84a&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Ch. 3.1 | Core Components" 
            date="Week 9 | Sprint 2" 
            description="During this week, we focused on implementing major functions such as a contact list, chat, and general functionality for the layout. Additionally, we conducted interviews with other students to gain insights into desired features. The interviews provided us with valuable viewpoints for reflection and improvement."
            author="Jøran"
            img_author="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg?ex=69466112&is=69450f92&hm=c4172a1d5d8277ba5fb3e34d9f9479508a6dc39a1b54b612329e5d58c8d4af91&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-bell fa-stack-1x text-danger"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-danger"></i>}

            title="Ch. 3.2 | Milestone 2" 
            date="Week 10 | Sprint 2" 
            description="We successfully completed the milestone 2 presentation. We focused on creating a searchable user registry, chat features, and navigational solutions. These features will be further enhanced during the upcoming weekend."
            author="Martin"
            img_author="https://cdn.discordapp.com/attachments/1064270341901389865/1064920855035007087/CV_bilde.jpg?ex=69461015&is=6944be95&hm=efafc791053b66505c1bbeac6906a9e5e0d1b4a99734a28a6590e3cdbb1a9240&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Ch. 3.3 | Progress on Features" 
            date="Week 11 | Sprint 3" 
            description="We made significant progress on the landing page, incorporating user data for the chat feature and creating a contact list for users. Furthermore, we started building a kanban board and exploring the creation of groups."
            author="Henrik"
            img_author="https://cdn.discordapp.com/attachments/1062428707639275650/1066377474100957204/henrik.jpg?ex=694616aa&is=6944c52a&hm=0751b0d4380b26e262092ffb2ed485e96897bd110b9184e266f6e6c88e9379b7&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Ch. 4 | Styling and Testing" 
            date="Week 12 | Sprint 3" 
            description="Most of the functions have been styled accordingly and thoroughly tested for a seamless user experience. We have also made some improvements to the user interface."
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/1349408288290242593/1451566624414109806/IMG_4643_1.png?ex=6946a444&is=694552c4&hm=4e46403ecd1003b6a9827ee0174b09dea5078a6b98cc230a7179625b84c0e84a&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Ch. 4.1 | Main Feature Development" 
            date="Week 13 | Sprint 3" 
            description="We made substantial progress on our main features during this week. Realizing that we were slightly behind schedule, we collectively put in extra effort to ensure that we deliver a testable version to gather user feedback. This feedback will help us identify areas of improvement and necessary changes."
            author="Jøran"
            img_author="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg?ex=69466112&is=69450f92&hm=c4172a1d5d8277ba5fb3e34d9f9479508a6dc39a1b54b612329e5d58c8d4af91&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Ch. 4.2 | Preperations" 
            date="Week 14 | Sprint 3" 
            description="The team has been diligently working on tasks related to the chat feature and the kanban board. Additionally, we are focused on implementing important tools and preparing for the upcoming Milestone 3 presentation."
            author="Martin"
            img_author="https://cdn.discordapp.com/attachments/1064270341901389865/1064920855035007087/CV_bilde.jpg?ex=69461015&is=6944be95&hm=efafc791053b66505c1bbeac6906a9e5e0d1b4a99734a28a6590e3cdbb1a9240&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Ch. 5 | Polishing" 
            date="Week 15 | Sprint 4" 
            description="We have successfully polished the user settings, files management, and kanban board functionalities, ensuring both styling and functional accuracy as described in the project description."
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/1349408288290242593/1451566624414109806/IMG_4643_1.png?ex=6946a444&is=694552c4&hm=4e46403ecd1003b6a9827ee0174b09dea5078a6b98cc230a7179625b84c0e84a&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-code fa-stack-1x text-primary"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-primary"></i>}

            title="Ch. 5.1 | New Fuctionality" 
            date="Week 16 | Sprint 4" 
            description="During this phase, we introduced a poll system for voting in chats and implemented infinite scroll for better user experience. We also made adjustments to the team UI and added the option to invite team members. Additionally, we created a feature that allows users to create tools for their teams. While the video chat is temporarily on hold, we have initiated the development of a customer service feature."
            author="Henrik"
            img_author="https://cdn.discordapp.com/attachments/1062428707639275650/1066377474100957204/henrik.jpg?ex=694616aa&is=6944c52a&hm=0751b0d4380b26e262092ffb2ed485e96897bd110b9184e266f6e6c88e9379b7&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-bell fa-stack-1x text-danger"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-danger"></i>}

            title="Ch. 6 | Milestone 3" 
            date="Week 17 | Sprint 4" 
            description="During this week, we presented our bachelor project for the Milestone 3 presentation. As we had another upcoming exam, we took a short break from the project. Unfortunately, just before the presentation, we encountered a few new and frustrating bugs and issues in our project. Our focus for the next week will be to address these issues and begin working on the report."
            author="Jøran"
            img_author="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg?ex=69466112&is=69450f92&hm=c4172a1d5d8277ba5fb3e34d9f9479508a6dc39a1b54b612329e5d58c8d4af91&"
            />

            <BlogCard 
            icon={<i class="fa-solid fa-pencil fa-stack-1x text-warning"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-warning"></i>}

            title="Ch. 6.1 | Issues and Report" 
            date="Week 18 | Sprint 5" 
            description="After resolving the newly discovered issues, we dedicated our efforts to fixing them. Subsequently, we started structuring and writing the report. Despite the small delay from the previous week, things are progressing well and according to schedule."
            author="Jøran"
            img_author="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg?ex=69466112&is=69450f92&hm=c4172a1d5d8277ba5fb3e34d9f9479508a6dc39a1b54b612329e5d58c8d4af91&"
            />
            <BlogCard 
            icon={<i class="fa-solid fa-pencil fa-stack-1x text-warning"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-warning"></i>}

            title="Ch. 6.2 | User Testing and Report" 
            date="Week 19 | Sprint 5" 
            description="Significant progress has been made on the project report during this week. While many existing bugs have been ironed out, we have also started user testing the application, which may potentially uncover unexpected issues or bugs."
            author="Jøran"
            img_author="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg?ex=69466112&is=69450f92&hm=c4172a1d5d8277ba5fb3e34d9f9479508a6dc39a1b54b612329e5d58c8d4af91&"
            />
            <BlogCard 
            icon={<i class="fa-solid fa-pencil fa-stack-1x text-warning"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-warning"></i>}

            title="Ch. 6.3 | Optimizing" 
            date="Week 20 | Sprint 5" 
            description="We are diligently working on implementing solutions and addressing issues based on the feedback we have received from users. The report has shown incredible progress, and we are optimistic about presenting our results during the final presentation."
            author="Jøran"
            img_author="https://cdn.discordapp.com/attachments/1021153022576959501/1065007817859268618/jran1.jpg?ex=69466112&is=69450f92&hm=c4172a1d5d8277ba5fb3e34d9f9479508a6dc39a1b54b612329e5d58c8d4af91&"
            />
                        <BlogCard 
            icon={<i class="fa-solid fa-bell fa-stack-1x text-danger"></i>}
            iconbg={<i class="fa-solid fa-diamond fa-stack-2x opacity-25 text-danger"></i>}

            title="Ch. 7 | Completion and Submission" 
            date="Week 21 | 22th May" 
            description="We have successfully finished writing the bachelor report and submitted it. Currently, we are preparing for the final presentation and eagerly looking forward to showcasing our results."
            author="Adrian"
            img_author="https://cdn.discordapp.com/attachments/1349408288290242593/1451566624414109806/IMG_4643_1.png?ex=6946a444&is=694552c4&hm=4e46403ecd1003b6a9827ee0174b09dea5078a6b98cc230a7179625b84c0e84a&"
            />
        </div>
            
        </div>
    </div>
  
    

)};

export default Blog;