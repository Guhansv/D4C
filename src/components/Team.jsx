import React from "react";
import Guhan from "./TeamMembers/Guhan";
import Sakkthi from "./TeamMembers/Sakkthi";
import Krishna from "./TeamMembers/Krishna";
import Sachin from "./TeamMembers/Sachin";
import RahulK from "./TeamMembers/RahulK";
import RiteshKum from "./TeamMembers/Ritesh";

function Team(){
    return(
        <div>
        <div className='title-container'><h1 className='text-4xl flex justify-center text-white' id='team'>Meet Our Team</h1></div>
            <Sakkthi/>
            <Guhan/>
            <Krishna/>
            <RiteshKum/>
            <RahulK/>
            <Sachin/>
        </div>
    )
}
export default Team;