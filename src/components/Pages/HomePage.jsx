import React from "react";
import { HomeCarousel } from "../Navigation/HomeCarousel";
import { HomeSectionCard } from "../HomeSectionCard/HomeSectionCard";
import { HomeSectionCarousel } from "../carousel/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../Data/MainCarouselData";

export const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Cloth"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Jacket"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Paint"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Dress"} />
      </div>
    </div>
  );
};
