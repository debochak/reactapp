import React from "react";

class App extends React.Component{

  constructor(props){
    console.log("Constructor loaded")
    super(props);

    this.state={
      rows : 0,
      content : ["Hello there","Another Thing"],
    }
  }

  updateTable = (evt) => {
    console.log(evt.target.value);
    this.setState({content : evt.target.value})
    this.setState({row : this.state.row + 1})
  }

  render(){
    console.log("render loaded");
    console.log(this.state);
    return (
    <div>
      <p>To-Do App</p>
      <form>
      <input/>
      <button onClick={evt => this.updateTable(evt)}>Submit</button>
      </form>
      <p>{this.state.content}</p>
      <p>{this.state.rows}</p>

    </div>)
  }

}



export default App;
