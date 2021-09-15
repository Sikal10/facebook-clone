import Image from "next/image";
import logo from "../public/images/facebook_logo.png";
import {SearchIcon, FlagIcon, PlayIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import {BellIcon, ChatIcon, HomeIcon, UserGroupIcon, ChevronDownIcon, ViewGridIcon} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";


const Header = () => {
    return (
        <header className={"top-0 sticky z-50 bg-white flex items-center p-2 lg:px-5 shadow-md "}>
            <div className={" flex items-center"}>
                <Image src={logo} width={40} height={40}/>
                <div className={" flex items-center bg-gray-100 p-2 ml-2 rounded-full"}>
                    <SearchIcon className={"h-6 text-gray-500"} />
                    <input className={"hidden md:inline-flex bg-transparent ml-2 items-center outline-none " +
                    "placeholder-gray-500 flex-shrink"} type="text" placeholder={"Search Facebook"}/>
                </div>
            </div>

            <div className={"flex justify-center flex-grow"}>
                <div className={"flex space-x-4 md:space-x-2"}>
                    <HeaderIcon Icon={HomeIcon} active />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            <div className={"flex items-center justify-end sm:space-x-2 "}>
                <p className={"font-semibold pr-3 whitespace-nowrap"}>Sikal Sikal</p>
                <ViewGridIcon className={"icon"} />
                <ChatIcon className={"icon"} />
                <BellIcon className={"icon"} />
                <ChevronDownIcon className={"icon"} />

            </div>

        </header>
    );
};

export default Header;