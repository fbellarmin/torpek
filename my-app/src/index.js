import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dwarves = ['Sleepy', 'Grumpy', 'Gimli', 'Bruenor'];

function ListItem(props) {
  return <li>{props.content}</li>;
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dwarves: [
        {
          name: 'Sleepy',
          id: 'shewlx',
        },
        {
          name: 'Grumpy',
          id: 'wrmxls',
        },
        {
          name: 'Gimli',
          id: 'qlsayk',
        },
        {
          name: 'Bruenor',
          id: 'prfckj',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Hello! Here's a list of some dwarves:</h1>
        <ul>
          {this.state.dwarves.map(dwarf => (
            <ListItem key={dwarf.id} content={dwarf.name} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<List />, document.getElementById('root'));