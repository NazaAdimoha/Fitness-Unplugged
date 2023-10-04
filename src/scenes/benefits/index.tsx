import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({
    setSelectedPage,
}: Props) => {
  return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6"
    >
        <motion.div 
            className="flex flex-col items-center justify-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* MAIN HEADER */}
            <div className="md:my-8 md:w-3/5">
                <HText>
                    So Much More Than Just A Gym
                </HText>
                <p className="my-5 text-sm">
                    We are a community of like-minded people who are all here to give you the support you need to achieve your goals. We are here to help you every step of the way in achieving that Set Body.
                </p>
            </div>

            {/* BENEFITS */}
            <div 
                className="md:flex items-center justify-center gap-8 md:gap-16 md:mt-16"
            >

            </div>
        </motion.div>
    </section>
  )
}

export default Benefits