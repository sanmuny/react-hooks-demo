import React from 'react';
import {
  Checkbox, Typography, List, ListItem, ListItemText, CircularProgress,
} from '@material-ui/core';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: [
        { id: 0, text: 'Learn JavaScript', done: false },
        { id: 1, text: 'Learn React', done: false },
        { id: 2, text: 'Play around in JSFiddle', done: true },
        { id: 3, text: 'Build something awesome', done: true },
      ],
    };
    this.handleCheck = this.handleCheckEvent.bind(this);
  }

  componentDidMount() {
    this.getToDoList();
  }

  handleCheckEvent(id) {
    const tmpState = this.state;
    tmpState.items.forEach((task, index, array) => {
      if (task.id === id) {
        array[index].done = !array[index].done;
      }
    });
    this.setState(tmpState);
  }

  getToDoList() {
    setTimeout(() => {
      this.setState({
        loading: false,
        items: [
          { id: 0, text: 'Learn JavaScript', done: false },
          { id: 1, text: 'Learn React', done: false },
          { id: 2, text: 'Play around in JSFiddle', done: true },
          { id: 3, text: 'Build something awesome', done: true },
        ],
      });
    }, 2000);
  }

  render() {
    return (
      <div className="todo-list-container">
        <Typography variant="h6">
          Todos
        </Typography>
        {this.state.loading ? <div className="loading-container"><CircularProgress /></div>
          : (
            <List dense className="todo-list">
              {this.state.items.map((item) => (
                <ListItem key={item.id} className="todo-item">
                  <Checkbox
                    edge="start"
                    checked={item.done}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': item.id }}
                    onChange={() => { this.handleCheck(item.id); }}
                  />
                  <ListItemText className={item.done ? 'done' : ''} id={item.id} primary={item.text} />
                </ListItem>
              ))}
            </List>
          )}
      </div>
    );
  }
}

export default ToDoList;
