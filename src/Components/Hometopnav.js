import {useNavigate} from "react-router-dom"
export default function Hometopnav(){
    const navigate=useNavigate();
    const handelLogout=()=>{
        navigate("/login");
    }
    const handelHam=()=>{
        document.getElementById("sidebar").style.display="block";
    }
    return(
        <div className="w-full justify-evenly items-center flex py-1 bg-[#B2C9ED] ">
            <div><img onClick={handelHam} width={20} className="m-2 cursor-pointer" height={10} src="/Hamburger.svg" alt="hamburger"/></div>
            <div className="text-xl"><span className="text-[#469DFF] font-semibold">S</span>ocial <span className="text-[#469DFF] font-semibold">A</span>nalytics</div>
            <div><img onClick={handelLogout} width={15} className="m-2 cursor-pointer" height={10} src="/logout.svg" alt="hamburger"/></div>
        </div>
    );
}