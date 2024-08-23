import react from "./../assets/science.png"
import css from "./../assets/css-3.png"
import docker from "./../assets/docker.png"
import nodejs from "./../assets/nodejs.png"
import html from "./../assets/html.png"
import tailwind from "./../assets/Tailwind.svg"
import kubernetes from "./../assets/kubernetes-icon.svg"
import nextjs from "./../assets/next-js.svg"
export function Skills() {
  return (
    <>
      <div className="px-8 py-16 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold mb-8 md:text-4xl lg:text-5xl ">Skills</h2>
        <div className="flex flex-wrap justify-between gap-4 md:gap-6 lg:gap-8">
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {/* img */}
            <img src={react} alt="" className="w-12"/>
            <p className="text-lg font-semibold md:text-xl lg:text-2xl">React.js</p>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {/* img */}
            <img src={css} alt="" className="w-12" />
            <p className="text-lg font-semibold md:text-xl lg:text-2xl">CSS3</p>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {/* img */}
            <img src={html} alt="" className="w-12" />
            <p className="text-lg font-semibold md:text-xl lg:text-2xl">HTML5</p>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {/* img */}
            <img src={tailwind} alt="" className="w-12" />
            <p className="text-lg font-semibold md:text-xl lg:text-2xl">Tailwind</p>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {/* img */}
            <img src={nodejs} alt="" className="w-12" />
            <p className="text-lg font-semibold md:text-xl lg:text-2xl">Node.js</p>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {/* img */}
            <img src={nextjs} alt="" className="w-12" />
            <p className="text-lg font-semibold md:text-xl lg:text-2xl">Nextjs</p>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {/* img */}
            <img src={docker} alt="" className="w-12" />
            <p className="text-lg font-semibold md:text-xl lg:text-2xl">Docker</p>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            {/* img */}
            <img src={kubernetes} alt="" className="w-12" />
            <p className="text-lg font-semibold md:text-xl lg:text-2xl">Kubernetes</p>
          </div>
        </div>
      </div>
    </>
  );
}
