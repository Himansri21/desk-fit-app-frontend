import React ,{ useEffect, useState} from "react";

function FindSameTimeOutUsers(){
    const[username,setUsername]=useState("");
    const[intime,setIntime]=useState("");
    const[outtime,setOutime]=useState("");

    const handlesubmit = async e =>{
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:3001/putUser",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username,intime,outtime}),
            })

            const data = await response.json()
            if(response.ok){
                alert("post created successfully");
                setUsername("");
                setIntime("");
                setOutime("");
            }else{
                alert(data.message || "something went wrong")
            }
        }catch(error){
            console.error("Error : " ,error);
        }
    };
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <input
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                type="text"
                placeholder="username"
                />
                <input
                value={intime}
                onChange={(e)=>setIntime(e.target.value)}
                type="number"
                placeholder="In-time"
                />
                <input
                value={outtime}
                onChange={(e)=>setOutime(e.target.value)}
                type="number"
                placeholder="Out-time"
                />
                <button
                type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FindSameTimeOutUsers;