import React,{useEffect, useState} from "react";

export default function Mobile() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://api.restful-api.dev/objects")
        .then(res=> res.json())
        .then(gdata=> {
            setData(gdata);
            console.log(gdata);
        })
    },[]);
    return (
        <div className="bg-gray-500 pt-3 pb-3 text-center" >
            { 
                data.map(mobile =>
                <li className="text-white p-4" key={mobile.id}>
                    { mobile.name }
                </li> ) 
            }
        </div>
    )
};