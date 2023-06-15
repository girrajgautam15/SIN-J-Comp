import Hometopnav from "./Hometopnav";
import Sidebar from "./Sidebar";
import AddFeature from "./AddFeature";
import Report from "./Report";
export default function Home(){
    return(
        <div className="w-screen h-screen bg-[#EDEDED] overflow-auto ">
             {/* B2C9ED */}
            <Sidebar />
            <Hometopnav />
            <AddFeature />
            <Report />
        </div>
    );
}