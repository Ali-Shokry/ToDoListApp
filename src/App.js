// import './App.css';
import React ,{Component} from 'react';
import Todoitems from './Components/Todoitems/todoItems';
import Additems from './Components/Additems/additems';


class App extends Component {
  state = {
    data: [
      {id: 1, name:"Hamza", age: 22},
      {id: 2, name:"Mohamed", age: 24},
      {id: 3, name:"Ali", age: 23}
    ],
  }

/* deleteItem = (index) => {
    let arr = this.state.data;
    arr.splice(index,1);
    this.setState({
      data: arr,
    });
    */
  
  // Another way to delete items by using id as a parameter instead of using index
  /*deleteItem = (id) => {
    let arr = this.state.data;
    let index = arr.findIndex((item) => item.id === id);
    arr.splice(index,1);
    this.setState({
      data: arr,
    });
  };
  */
  deleteItem = (id) => {
    let arr = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: arr,
    });
    // if (this.state.data.length === 1) {
    //   this.setState({
    //     data: [{name:"No data to show"}],
    //   });
    // };
  };
  addItem = (item) => {
    item.id = Math.random();
    let arr = this.state.data;
    arr.push(item);
    this.setState({
      data:arr,
    });
  }
  render () {
    return(
      <div className='App'>
        <h1>Todo List</h1>
        <Todoitems itemList={this.state.data} deleteItm={this.deleteItem}/>
        <Additems addItm ={this.addItem} />
      </div>
    );
  };
};
export default App;
