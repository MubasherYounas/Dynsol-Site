import React from "react";
import Hero from "../Hero";
import data from "../../../../portfolio.json";
import { getImagePath } from "../../projectdetails/utils";
import { useParams } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

const ProjectDetails = () => {
  const { projectId } = useParams();              

  const item = data.find(
    (item) => item.id === Number(projectId)       
  );

  if (!item) return <div className="text-center py-20">Project not found</div>;

  return (
    <>
    <Header/>
      <Hero
        title={item.title}
        description={item.description}
        sitename={item.details.siteName}
        sitelink={item.details.siteLink}
      />

      <div className="w-full bg-linear-to-r from-customLightBlue to-customVeryLightBlue">
        <div className="hidden md:block bg-[url('/Frame.svg')] bg-no-repeat bg-cover bg-bottom h-[300px] md:h-[350px] lg:h-[400px] xl:h-[537px] w-full p-8 md:p-24"></div>

        <div className="md:mt-[-300px] lg:-mt-80 xl:mt-[-460px] p-8 md:px-24">

          {/* Image 1 */}
          <div className="flex justify-center md:my-4">
            <div className="2xl:basis-[60%] 3xl:basis-[57%] text-customBlue1 font-work-sans font-medium text-[18px] md:text-[22px] lg:text-[26px] text-center">
              {item.details.image1Desc}
            </div>
          </div>
          <div className="flex justify-center my-8 xl:my-12">
            <div className="xl:basis-[80%]">
              <img
                src={getImagePath(item.details.image1)}
                className="w-full"
                alt={item.title}
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="flex justify-center md:my-4">
            <div className="2xl:basis-[60%] 3xl:basis-[57%] text-customBlue1 font-work-sans font-medium text-[18px] md:text-[22px] lg:text-[26px] text-center">
              {item.details.image2Desc}
            </div>
          </div>
          <div className="flex justify-center my-8 xl:my-12">
            <div className="xl:basis-[80%]">
              <img
                src={getImagePath(item.details.image2)}
                className="w-full"
                alt={item.title}
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="flex justify-center md:my-4">
            <div className="2xl:basis-[60%] 3xl:basis-[57%] text-customBlue1 font-work-sans font-medium text-[18px] md:text-[22px] lg:text-[26px] text-center">
              {item.details.image3Desc}
            </div>
          </div>
          <div className="flex justify-center my-8 xl:my-12">
            <div className="xl:basis-[80%]">
              <img
                src={getImagePath(item.details.image3)}
                className="w-full"
                alt={item.title}
              />
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProjectDetails;
