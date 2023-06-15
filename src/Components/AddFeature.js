import { useParams } from "react-router-dom";
export default function AddFeature(){
    const params=useParams();
    const handleAdd=()=>{
        console.log(params)
        fetch("http://localhost:5000/addFeature/"+params.usn,{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                title:document.getElementById("title").value,
                desc:document.getElementById("desc").value
            })
        }).then(res=>res.json()).then(
            (data)=>{
                if(data.code==200){
                    window.alert("Feature Added");
                    document.getElementById("title").value="";
                    document.getElementById("desc").value="";
                }
                else{
                    window.alert("Error Try after some time");
                }
            }
        ).catch(err=>console.log(err));
    }
    return(
        <div className="w-full lg:w-8/12 flex flex-col m-2 my-4 p-2 py-6 border-2 bg-[#D3DFED] text-[#0075FF] border-[#2F599B] mx-auto rounded">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold">Add Feature</div>
                <div><button onClick={handleAdd} className="p-1 hover:text-white text-[#0075FF] border-2 border-[#0075FF] hover:bg-[#0075FF] rounded text-xl text-center px-3 m-2">ADD</button></div>
            </div>
            <div><input id="title" className="my-2 outline-none p-2 w-full bg-[#B9D4F3] placeholder-[#0075FF]" type="text" placeholder="Enter Feature Name"/></div>
            <div><textarea id="desc" className="w-full h60 p-2 outline-none bg-[#B9D4F3] placeholder-[#0075FF] resize-none" placeholder="Enter Feature Description"></textarea></div>
        </div>
    );
}