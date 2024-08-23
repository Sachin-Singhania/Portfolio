import { AppWindowIcon } from "./AppWindowIcon";
import { CodeIcon } from "./CodeIcon";
import { FilePenIcon } from "./FilePenIcon";

export function Services() {
  return (
    <>
      <div className="px-8 py-16 bg-[#1E2030] md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold mb-8 md:text-4xl lg:text-5xl">Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-[#0B0D17] rounded-lg p-8 md:p-12 lg:p-16 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4 md:mb-6 lg:mb-8">
              <FilePenIcon className="w-8 h-8 mr-4 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">WEB EDITING</h3>
            </div>
            <p className="text-gray-400 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
              nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.
            </p>
          </div>
          <div className="bg-[#0B0D17] rounded-lg p-8 md:p-12 lg:p-16 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4 md:mb-6 lg:mb-8">
              <AppWindowIcon className="w-8 h-8 mr-4 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">MOBILE APP DEVELOPMENT</h3>
            </div>
            <p className="text-gray-400 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
              nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.
            </p>
          </div>
          <div className="bg-[#0B0D17] rounded-lg p-8 md:p-12 lg:p-16 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4 md:mb-6 lg:mb-8">
              <AppWindowIcon className="w-8 h-8 mr-4 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">DESKTOP APP DEVELOPMENT</h3>
            </div>
            <p className="text-gray-400 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
              nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.
            </p>
          </div>
          <div className="bg-[#0B0D17] rounded-lg p-8 md:p-12 lg:p-16 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4 md:mb-6 lg:mb-8">
              <CodeIcon className="w-8 h-8 mr-4 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">PROGRAMMING LANGUAGES</h3>
            </div>
            <p className="text-gray-400 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
              nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
