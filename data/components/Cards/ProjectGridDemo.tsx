import { ProjectCard } from "../ui/project-card";
import { ProjectCardWide } from "../ui/project-card-wide";

const ProjectGridDemo = () => {
  return (
    <div className="flex w-full min-h-screen items-center bg-gray-50" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
      <div className="max-w-[1990px] mx-auto w-full">
        <div className="flex flex-col items-start gap-8 py-8">
        {/* Wide Card at the top */}
        <div className="flex flex-col gap-4">
          <ProjectCardWide
            clientName="Booking Corp."
            projectTitle="Fintech Dello Banking App"
            imageUrl="https://framerusercontent.com/images/bYqLe8xt4WWrYciKmo1e5W7Rk.webp"
            href="./work/dellobank"
            className="h-full"
          />
            <div className="opacity-100">
              <div 
                className="flex flex-col justify-start flex-shrink-0"
                style={{
                  outline: "none",
                  color: "rgb(135, 135, 135)",
                  transform: "none",
                  opacity: 1
                }}
              >
                <h4 className="font-medium" style={{ color: "rgb(135, 135, 135)", fontSize: "18px", fontFamily: "Manrope" }}>Booking Corp.</h4>
              </div>
              <div className="opacity-100 mt-2">
              <div 
                className="flex flex-col justify-start flex-shrink-0"
                style={{
                  outline: "none",
                  color: "rgb(0, 0, 0)",
                  transform: "none",
                  opacity: 1
                }}
              >
                <h3 className="font-semibold leading-tight" style={{ color: "rgb(0, 0, 0)", fontSize: "24px", fontFamily: "Manrope" }}>Fintech Dello Banking App</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* First row - 2 cards */}
        <div className="flex gap-8 justify-start">
          <div className="flex flex-col gap-4">
            <ProjectCard
              clientName="Dazzle Inc."
              projectTitle="Dazzle © Branding"
              imageUrl="https://framerusercontent.com/images/YQgvAS4i8HeJRZmg2q1Kfwr6UM.png"
              href="./work/dazzle"
              className="h-full"
            />
            <div className="opacity-100">
              <div 
                className="flex flex-col justify-start flex-shrink-0"
                style={{
                  outline: "none",
                  color: "rgb(135, 135, 135)",
                  transform: "none",
                  opacity: 1
                }}
              >
                <h4 className="font-medium" style={{ color: "rgb(135, 135, 135)", fontSize: "18px", fontFamily: "Manrope" }}>Dazzle Inc.</h4>
              </div>
              <div className="opacity-100 mt-2">
                <div 
                  className="flex flex-col justify-start flex-shrink-0"
                  style={{
                    outline: "none",
                    color: "rgb(0, 0, 0)",
                    transform: "none",
                    opacity: 1
                  }}
                >
                  <h3 className="font-semibold leading-tight" style={{ color: "rgb(0, 0, 0)", fontSize: "24px", fontFamily: "Manrope" }}>Dazzle © Branding</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <ProjectCard
              clientName="CareSunset"
              projectTitle="Healthcare Mobile App"
              imageUrl="https://framerusercontent.com/images/JdY0YpiIaeEXQWB6oQk0zawZk.png"
              href="./work/healthcare-mobile-app"
              className="h-full"
            />
            <div className="opacity-100">
              <div 
                className="flex flex-col justify-start flex-shrink-0"
                style={{
                  outline: "none",
                  color: "rgb(135, 135, 135)",
                  transform: "none",
                  opacity: 1
                }}
              >
                <h4 className="font-medium" style={{ color: "rgb(135, 135, 135)", fontSize: "18px", fontFamily: "Manrope" }}>CareSunset</h4>
              </div>
              <div className="opacity-100 mt-2">
                <div 
                  className="flex flex-col justify-start flex-shrink-0"
                  style={{
                    outline: "none",
                    color: "rgb(0, 0, 0)",
                    transform: "none",
                    opacity: 1
                  }}
                >
                  <h3 className="font-semibold leading-tight" style={{ color: "rgb(0, 0, 0)", fontSize: "24px", fontFamily: "Manrope" }}>Healthcare Mobile App</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second row - 2 cards */}
        <div className="flex gap-8 justify-start">
          <div className="flex flex-col gap-4">
            <ProjectCard
              clientName="Tech Bank Client"
              projectTitle="Technical Infographic"
              imageUrl="https://framerusercontent.com/images/GRXDkBEY59pvYkXWCPZvnEFLlKo.png"
              href="./work/small-birdy-grocery-web-app"
              className="h-full"
            />
            <div className="opacity-100">
              <div 
                className="flex flex-col justify-start flex-shrink-0"
                style={{
                  outline: "none",
                  color: "rgb(135, 135, 135)",
                  transform: "none",
                  opacity: 1
                }}
              >
                <h4 className="font-medium" style={{ color: "rgb(135, 135, 135)", fontSize: "18px", fontFamily: "Manrope" }}>Tech Bank Client</h4>
              </div>
              <div className="opacity-100 mt-2">
                <div 
                  className="flex flex-col justify-start flex-shrink-0"
                  style={{
                    outline: "none",
                    color: "rgb(0, 0, 0)",
                    transform: "none",
                    opacity: 1
                  }}
                >
                  <h3 className="font-semibold leading-tight" style={{ color: "rgb(0, 0, 0)", fontSize: "24px", fontFamily: "Manrope" }}>Technical Infographic</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <ProjectCard
              clientName="Notex"
              projectTitle="Extend & Support - App Plugin"
              imageUrl="https://framerusercontent.com/images/lZw1bhCVV0JpyjKh2ETJmXTjkoY.png"
              href="./work/appplugin"
              className="h-full"
            />
            <div className="opacity-100">
              <div 
                className="flex flex-col justify-start flex-shrink-0"
                style={{
                  outline: "none",
                  color: "rgb(135, 135, 135)",
                  transform: "none",
                  opacity: 1
                }}
              >
                <h4 className="font-medium" style={{ color: "rgb(135, 135, 135)", fontSize: "18px", fontFamily: "Manrope" }}>Notex</h4>
              </div>
              <div className="opacity-100 mt-2">
                <div 
                  className="flex flex-col justify-start flex-shrink-0"
                  style={{
                    outline: "none",
                    color: "rgb(0, 0, 0)",
                    transform: "none",
                    opacity: 1
                  }}
                >
                  <h3 className="font-semibold leading-tight" style={{ color: "rgb(0, 0, 0)", fontSize: "24px", fontFamily: "Manrope" }}>Extend & Support - App Plugin</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGridDemo;
