import git from "./../assets/git.png";
import icon from "./../assets/north.png";
const projects = [
  {
    name: "Blog Website",
    githubLink: "https://github.com/Sachin0001-Legend/blog-web-app.git",
    deployedUrl: "https://weblogs-sachin.vercel.app",
    imageSrc: "/assets/blog.png",  
  },
  {
    name: "E-Commerce Website",
    githubLink: "https://github.com/Sachin0001-Legend/E-commerce-Web.git",
    deployedUrl: "https://ecommerce-website.vercel.app",
    imageSrc: "src/assets/e-commerce.jpg",  
  },
];
export function Projects() {
  return (
    <>
      <div id="projects" className="px-8 py-16 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold mb-8 md:text-4xl lg:text-5xl">Projects</h2>
        <Allprojects projects={projects} />
      </div>
    </>
  );
}

function Allprojects({ projects }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#1E2030] rounded-lg p-4 md:p-6 lg:p-8 transition-transform duration-300 hover:scale-105"
        >
          <div className="flex justify-between mb-4 md:mb-6 lg:mb-8">
            <p className="text-gray-400 md:text-lg lg:text-xl">{project.name}</p>
            <div className="flex space-x-4">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
                <img src={git} alt="GitHub Link" className="w-6" />
              </a>
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">
                <img src={icon} alt="Deployed Link" className="w-8" />
              </a>
            </div>
          </div>
          <img
            src={project.imageSrc}
            alt={`${project.name} Landing Page`}
            className="w-full aspect-[4/3] rounded-lg md:aspect-[16/9] lg:aspect-[21/9]"
          />
        </div>
      ))}
    </div>
  );
}
