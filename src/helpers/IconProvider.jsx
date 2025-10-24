import { FaArrowRightLong } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { FiHeadphones } from "react-icons/fi";
import { GoInfo } from "react-icons/go";
import { FaPhoneVolume } from "react-icons/fa6";


export const allIcons = {
  rightArrow: <FaArrowRightLong />,
  fellowIcon: [
    { id: 1, icon: <FaTwitter /> },
    { id: 2, icon: <FaFacebook /> },
    { id: 3, icon: <FaPinterestP /> },
    { id: 4, icon: <FaRedditAlien /> },
    { id: 5, icon: <IoLogoYoutube /> },
    { id: 6, icon: <FaSquareInstagram /> },
  ],
  searchIcon: <FiSearch />,
  navMiddleIcon: [
    { id: 1, icon: <MdOutlineShoppingCart />, to: "/cart" },
    { id: 2, icon: <FaRegHeart />, to: "/wishlist" },
    { id: 3, icon: <AiOutlineUser />, to: "/account" },
  ],
  allItemsIcon: [
    { id: 1, icon: <IoLocationOutline /> },
    { id: 2, icon: <PiArrowsCounterClockwise /> },
    { id: 3, icon: <FiHeadphones /> },
    { id: 4, icon: <GoInfo /> },
    { id: 5, icon: <FaPhoneVolume /> },
  ],
};
