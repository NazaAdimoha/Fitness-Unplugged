import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1068px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">

        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
            {/* Headings */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{
                    once: true,
                    amount: 0.5,
                }}  
            className="md:mt-20">
            <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home page text" src={HomePageText} />
                </div>
            </div>
            <p className="text-sm mt-8">
                Build your desired body shape with us. We provide you with the best
                training program and meal plan.
            </p>
            </motion.div>
            {/* ACTIONS */}
            <div className="mt-8 flex items-center gap-8">
                <ActionButton 
                    setSelectedPage={setSelectedPage}
                >
                    Join Now
                </ActionButton>
                <AnchorLink 
                    className="text-primary-500 font-bold underline cursor-pointer hover:text-secondary-500 "
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    Learn More
                </AnchorLink>
            </div>


        </div>
            {/* IMAGE */}
            <div className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home page graphic" src={HomePageGraphic} />
            </div>
      </div>
            {/* SPONSORS */}
            {
                isAboveMediumScreen && (
                    <div className="h-[150px] w-full bg-primary-100 py-10">
                        <div className="mx-auto w-5/6">
                            <div className="flex w-3/5 items-center justify-between gap-8">
                                <img alt="sponsor red bull" src={SponsorRedBull} />
                                <img alt="sponsor forbes" src={SponsorForbes} />
                                <img alt="sponsor fortune" src={SponsorFortune} />
                            </div>
                        </div>
                    </div>
                )
            }
    </section>
  );
};

export default Home;
