import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineSparkles } from "react-icons/hi2";
import { TbBrandReact } from "react-icons/tb";
import { MdRocketLaunch } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <HiOutlineSparkles className="text-4xl text-blue-600" />
        <TbBrandReact className="text-4xl text-cyan-500" />
        <MdRocketLaunch className="text-blue-600" />
        <BsStarFill className="text-5xl text-amber-500" />
      </div>
    </div>
  );
}