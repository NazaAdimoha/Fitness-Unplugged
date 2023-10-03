import { SelectedPage } from "@/shared/types";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (page: SelectedPage) => void
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {

    const lowercasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink 
        className={`${selectedPage === lowercasePage} ? "text-primary" : "" transition duration-500 ease-in-out cursor-pointer hover:text-primary-300`}
        href={`#${lowercasePage}`}
        onClick={() => setSelectedPage(lowercasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link