import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./Components/List"
import AddToList from "./Components/AddToList"

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Jessica Day",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RXvFWmCiTe8xQCDKIDvZmu-RIjNPx5yzCg&usqp=CAU",
      age: 31,
      note: "Grade school teacher"
    }
  ])



  return (
    <div className="App">
      <h1>People Invited to My Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
