import React from 'react'


function Namelist() {

  const names = ['Chandra', 'Shiva', 'Ramesh', 'DJ']
  const persons = [
    {
      id: 1,
      name: 'Chandra',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Shiva',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Ramesh',
      age: 28,
      skill: 'Vue'
      
    }
  ]
//   const personList = persons.map(person => <Person key={person.id} person={person} />)
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return <div>
  <table align="center" border ="3" class="table" style={{width:"500px" }}>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
      {
        names.map((name, index) =><tr>
          <td key={index}>{index}</td>
          <td>{name}</td>
        </tr>)
      }
    </table>
  </div>
}

export default Namelist