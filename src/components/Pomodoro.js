import React, { useState } from 'react';

export default function Pomodoro() {

  const Employee = [
    {name: "Parker Green",},
    {name: "Jordan Richards",},
    {name: "Alex Stevens",},
    {name: "Avery Scott"},
  ];
  const [search, setSearch] = useState('LOL');
  console.log(search);
  return( 
  <div className='container'> 
      <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
      <ul>
      {Employee.map((emp => {
        if(emp.name.toLowerCase().includes(search)){
          return <li key={emp.name}>{emp.name}</li>
        }
      })
      )}
      </ul>
      <h1>Pomodoro</h1>
      <button onClick={()=> setSearch('st')}>Search steve</button>
  </div>
  );
}


