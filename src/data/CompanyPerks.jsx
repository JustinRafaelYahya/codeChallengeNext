import { LiaShippingFastSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa";
import { HiArrowsPointingIn } from "react-icons/hi2";
import { VscTools } from "react-icons/vsc";
export const CompanyPerks = [
  {
    id: 1,
    icon: <FaRegStar className="mx-auto mb-6" size={100} />,
    title: "Best Components",
    desc: "No Compromise. We use the latest and the best products to ensure your satisfaction and experience.",
  },
  {
    id: 2,
    icon: <LiaShippingFastSolid className="mx-auto mb-6" size={100} />,
    title: "Fast, Free Shipping",
    desc: "All of our products come with free shipping. We won't make you wait long as we ensure the quickest delivery possible to you!",
  },
  {
    id: 3,
    icon: <HiArrowsPointingIn className="mx-auto mb-6" size={100} />,
    title: "Professional Assembly",
    desc: "All of our pc's are professionaly assembled by our 10+ years of working experience PC Technicians hand.",
  },
  {
    id: 4,
    icon: <VscTools className="mx-auto mb-6" size={100} />,
    title: "3 Years of Warranty",
    desc: "Your investment will be future proof as we ensure the standard 3 years of parts replacement.",
  },
];
