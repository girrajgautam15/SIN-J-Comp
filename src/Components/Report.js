import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Report(){
    const params=useParams();
    const [precentages,setPercentages]=useState({
        like:0,
        neutral:0,
        dislike:0
    });
    useEffect(()=>{
        document.getElementById("lper").style.width=`${precentages.like}%`
        document.getElementById("nper").style.width=`${precentages.neutral}%`
        document.getElementById("dper").style.width=`${precentages.dislike}%`
    },[precentages]);

    useEffect(()=>{
        fetch("http://localhost:5000/getfeatures/"+params.usn,{
            method:"GET",
            headers:{
                "Content-Type" : "application/json"
            }
        }).then(res=>res.json()).then(data=>{
            setFeatarr(data);
        })
    },[])

    const [Featuresarr,setFeatarr]=useState(
        []
    );
    const [Likecomm,setLikecomm]=useState([
        
    ]);
    const [Neucomm,setNeucomm]=useState([
        
    ]);
    const [Dlikecomm,setDlikecomm]=useState([
        
    ]);
    useEffect(()=>{
        let lcnt=Likecomm.length;
        let neucnt=Neucomm.length;
        let ncnt=Dlikecomm.length;
        let total=lcnt+neucnt+ncnt;
        let l=lcnt/total;
        let ne=neucnt/total;
        let n=ncnt/total;
        let obj={
            like:l.toPrecision(3)*100,
            neutral:ne.toPrecision(3)*100,
            dislike:n.toPrecision(3)*100
        }
        setPercentages(obj);
    },[Likecomm])
    return(
        <div className="w-full my-4 mx-auto p-2 bg-[#D3DFED]">
            <div className="text-[#0075FF] font-semibold p-2 text-xl text-center ">Reports</div>
            <div className="flex justify-between">
                <div className="w-1/3 min-h-6 p-2 bg-[#B7CFEB] cursor-default">
                    {
                        Featuresarr.map((feat)=>{
                            
                            return(
                                <div onClick={(e)=>{
                                    let id=e.target.id;
                                    console.log(id)
                                    fetch(`http://localhost:5000/report/${params.usn}`,{
                                        headers:{
                                            "Content-Type" : "application/json"
                                        },
                                        body:JSON.stringify({idi:id}),
                                        method:"POST"
                                    }).then(res=>res.json()).then(data=>{
                                        console.log(data);
                                        setLikecomm(data[0].pcomments)
                                        setDlikecomm(data[0].ncomments)
                                        setNeucomm(data[0].neucomments)
                                    }).catch(err=>console.log(err));

                                }} id={feat.featname} className="flex text-xl my-2 hover:bg-[#8CB8EC] hover:text-white justify-between border-2 rounded-lg border-[#8CB8EC] p-2 text-[#0075FF]">
                        {feat.featname}
                        <div><button id={"gen"+feat.featname} onClick={(e)=>{
                            const id=e.target.id.substring(3,);
                    
                            fetch(`http://localhost:5000/genratenlp/${params.usn}/${id}`,{
                                        headers:{
                                            "Content-Type" : "application/json"
                                        },
                                        method:"GET"
                                    }).then(res=>res.json()).then(data=>{
                                        console.log(data);
                                    }).catch(err=>console.log(err));
                        }}>Gen</button></div>
                        {/* <div className="text-sm font-bold text-stone-500">{`id#${feat.id}`}</div> */}
                    </div>
                            );
                        })
                    }
                    
                </div>

                
                <div className="w2-3 p-2 py-4 bg-[#B7CFEB]">
                    <div className="flex items-center my-2">
                        <div><img height={30} width={30} src="/heart.svg" alt="like"/></div>
                        <div id="lper" className={`py-1 mx-2 bg-red-500`}></div>
                    </div>
                    <div className="flex items-center my-2">
                        <div><img height={30} width={30} src="/neutral.svg" alt="like"/></div>
                        <div id="nper" className="py-1 mx-2 bg-yellow-500"></div>
                    </div>
                    <div className="flex items-center my-2">
                        <div><img height={30} width={30} src="/hate.svg" alt="like"/></div>
                        <div id="dper" className="py-1 bg-violet-500 mx-2"></div>
                    </div>
                    <div className="grid gap-x-1 grid-cols-3">
                        <div className="col-span-1">
                            <div className="text-center text-[#0075FF] font-bold">Like</div>

                            {
                                Likecomm.map((like)=>{
                                    return(
                                        <div className="w-full border-[#8CB8EC] rounded-xl my-2 border-2 p-2 flex flex-col">
                                <div className="font-bold">{`@${like.commentid}`}</div>
                                <div>{like.comment}</div>
                            </div>
                                    );
                                })
                            }

                        </div>
                        <div className="col-span-1">
                            <div className="text-center text-[#0075FF] font-bold">Neutral</div>
                            {
                                Neucomm.map((like)=>{
                                    return(
                                        <div className="w-full border-[#8CB8EC] rounded-xl my-2 border-2 p-2 flex flex-col">
                                <div className="font-bold">{`@${like.commentid}`}</div>
                                <div>{like.comment}</div>
                            </div>
                                    );
                                })
                            }

                        </div>
                        <div className="col-span-1">
                            <div className="text-center text-[#0075FF] font-bold" >Dislike</div>
                            {
                                Dlikecomm.map((like)=>{
                                    return(
                                        <div className="w-full border-[#8CB8EC] rounded-xl my-2 border-2 p-2 flex flex-col">
                                <div className="font-bold">{`@${like.commentid}`}</div>
                                <div>{like.comment}</div>
                            </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}