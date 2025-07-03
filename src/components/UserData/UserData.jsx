import { useState } from "react"

async function GetData(){
    const [information, setinformation] = useState([]);
    const url = "http://localhost:3001/users"
    let response = await fetch(url)
    const UserData = await response.json()
    setinformation(UserData);

    return(
        <>
        <div>
            <p>
                {information}
                <button onClick={information}>priyu is so cute</button>
            </p>
        </div>
        </>
    )
}

export default GetData;