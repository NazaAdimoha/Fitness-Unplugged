import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits:Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the art facilities",
        description: "We have the best equipment in the area, and we are always looking to improve."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Community",
        description: "We are a community of like-minded people who are all here to give you the support you need to achieve your goals."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Personal Trainers",
        description: "We have a team of highly qualified personal trainers who are here to help you achieve your goals."
    },
];

const Benefits = ({
    setSelectedPage,
}: Props) => {

  return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div 
            className="flex flex-col items-center justify-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            onViewportLeave={() => setSelectedPage(SelectedPage.Home)}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* MAIN HEADER */}
            <motion.div 
                className="md:my-8 md:w-3/5">
                
                <HText>
                    So Much More Than Just A Gym
                </HText>
                <p className="my-5 text-sm">
                    We are a community of like-minded people who are all here to give you the support you need to achieve your goals. We are here to help you every step of the way in achieving that Set Body.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <div
 
                className="md:flex items-center justify-center gap-8 md:gap-16 md:mt-16 mt-5 cursor-pointer"
            >
                {
                    benefits.map((benefit:BenefitType, index) => (
                        <div 
                            key={index}
                            className="md:flex flex-col items-center justify-center md:gap-4 mb-8 md:w-1/3 border-2 border-gray-300 rounded-md p-8"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100"
                            >
                                {benefit.icon} 
                            </motion.div>
                            <h3 className="font-bold text-xl">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-center">
                                {benefit.description} 
                            </p>
                            <AnchorLink 
                                className="text-primary-500 font-bold underline cursor-pointer hover:text-secondary-500 "
                                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                                href={`#${SelectedPage.ContactUs}`}
                            >
                                Learn More
                            </AnchorLink>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits