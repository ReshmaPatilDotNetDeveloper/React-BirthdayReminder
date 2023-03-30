import logo from './logo.svg';
import './App.css';
import data from './BirthdayReminder/data';
import { useState } from 'react';
import List from './BirthdayReminder/List';
import ClearData from './BirthdayReminder/ClearData';

function App() {
  const[people,setPeople] = useState(data);
  // const ClearData() {
  //   console.log('clear data');
  //   // setPeople([]);
  // }

  function ClearData(){
    console.log('clear data');
    setPeople([]);
  }

  function displayData(){
    setPeople(data);
  }
  return (
    <main>
      <section className='container'>
        <h3>People Birthday {people.length}</h3>
        <List people={people} handleClick={ClearData} displayClick={displayData}/>
      </section>
    </main>
  );
}

export default App;
