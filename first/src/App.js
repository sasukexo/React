function App(){
  function handleNameChange(){
    const name=["guru","ram","sai"];
    const int=Math.floor(Math.random()*3);
    return name[int];
  }
    return(
        <div>
          <h1>hELLO</h1>
            <p>Lets {handleNameChange()}</p>
        </div>
    )
}

export default App;