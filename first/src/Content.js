import React from "react";


const Content=() =>{
  function handleNameChange(){
    const name=["guru","ram","sai"];
    const int=Math.floor(Math.random()*3);
    return name[int];
  }
    return(
        <div>
            <p>Lets {handleNameChange()}Money</p>
        </div>
    )
}

export default Content;