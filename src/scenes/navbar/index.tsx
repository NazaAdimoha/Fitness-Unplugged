import { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (page: SelectedPage) => void
}

const Navbar = ({
    isTopOfPage,
    selectedPage,
    setSelectedPage
}: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const navBarBackground = isTopOfPage ? "bg-transparent" : "bg-primary-100 bg-opacity-90 drop-shadow-xl";
  return (
    <nav>
        <div 
            className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img alt="logo" src={Logo} />

                    {/* RIGHT SIDE */}
                    {
                        isAboveMediumScreen ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link 
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Our Classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Contact us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>

                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3BottomRightIcon className="h-6 w-6 text-white" />
                            </button>
                        )
                    }
                </div>
            </div>
        </div>

        {/* MOBILE MENU */}
        {
            isMenuToggled && !isAboveMediumScreen && (
                <div className="fixed bottom-0 right-0 z-40 w-[300px] h-full bg-primary-100 bg-opacity-90 drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XCircleIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* MOBILE MENU LINKS */}
                    <div className="flex flex-col ml-[33%] gap-10 text-2xl">
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar