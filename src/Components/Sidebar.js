export default function Sidebar(){
    const handleClose=()=>{
        document.getElementById("sidebar").style.display="none";
    }
    return(
        <div id="sidebar" className="w-full hidden lg:w-3/12 text-white absolute fixed h-full bg-[#2F599B]">
            <div className="flex justify-end"><img onClick={handleClose} width={15} height={15} alt="close" className="m-2 mx-4 cursor-pointer" src="/close.svg"/></div>
            <div className="w-full h-3/5 items-center justify-evenly flex flex-col">
                <div>Add</div>
                <div>Report</div>
                <div>About us</div>
            </div>
        </div>
    );
}