//import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [stringField, setStringField] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users)
    );
  },[]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (e) => {
    const stringField = e.target.value;
    setTitle(stringField);
  };

  return(
    <div className = 'App'>
      <div className='app-title'>{title}</div>
      <SearchBox 
        onChangeHandler = {onSearchChange} 
        placeholder = 'Search Monsters'
        className = 'search-box'
      />
      <SearchBox 
        onChangeHandler = {onTitleChange} 
        placeholder = 'Input title'
        className = 'search-box'
      />
      <CardList monsters = {filteredMonsters}/>
      
    </div>
  );
};
// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => 
  //       this.setState(() => {
  //         return { monsters: users };
  //       },
  //       () => {}
  //     )
  //   );
  // }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render(){
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

    // const filteredMonsters = monsters.filter((monster) => {
    //   return monster.name.toLocaleLowerCase().includes(searchField);
    // });
//     return (
//       <div className = 'App'>
//         <div className='app-title'>Monsters Rolodex</div>
//         <SearchBox onChangeHandler = {onSearchChange} 
//                     placeholder = 'Search Monsters'
//                     className = 'search-box'/>
//         <CardList monsters = {filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
