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
            <div>
                <HText>
                    So Much More Than Just A Gym
                </HText>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits