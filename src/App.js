
import React from 'react';
//import ReactDOM from 'react-dom/client';


const List = (props) => {
    return (
      <>
    <p>{props.tasks.join(" , ")}</p>
      </>
    )
    

};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk", "Cook", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]} />
        <h2>Tomorrow</h2>
      </div>
    );
  }
};



export default ToDo