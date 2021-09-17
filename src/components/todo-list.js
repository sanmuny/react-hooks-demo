import React, {
  useState, useEffect, useCallback, useMemo, useContext,
} from 'react';
import {
  Checkbox, Typography, List, ListItem, ListItemText, CircularProgress,
} from '@material-ui/core';
import { ThemeContext } from '../context';
import { useWindowSize } from '../hooks';

const ToDoItems = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const theme = useContext(ThemeContext);
  const width = useWindowSize();
  const nrTasksLeft = useMemo(() => {
    let nr = 0;
    todos.forEach((item) => {
      if (item.done === false) {
        nr += 1;
      }
    });
    return nr;
  }, [todos]);

  useEffect(() => {
    document.title = `${nrTasksLeft} items left`;
  });

  useEffect(() => {
    const getToDoList = () => {
      setTimeout(() => {
        setLoading(false);
        setTodos([
          { id: 0, text: 'Learn JavaScript', done: false },
          { id: 1, text: 'Learn React', done: false },
          { id: 2, text: 'Play around in JSFiddle', done: true },
          { id: 3, text: 'Build something awesome', done: true },
        ]);
      }, 2000);
    };
    getToDoList();
  }, []);

  const handleCheck = useCallback((id) => {
    const tmpTodos = [...todos];
    tmpTodos.forEach((todo, index) => {
      if (todo.id === id) {
        tmpTodos[index].done = !tmpTodos[index].done;
      }
    });
    setTodos(tmpTodos);
  }, [todos]);

  return (
    <div className="todo-list-container">
      <Typography variant="h6">
        Todos
      </Typography>
      <Typography variant="p">
        {`Window Size: ${width}`}
      </Typography>
      {loading ? <div className="loading-container"><CircularProgress /></div>
        : (
          <List dense className="todo-list">
            {todos.map((item) => (
              <ListItem key={item.id} className={`todo-item ${theme}`}>
                <Checkbox
                  className={theme}
                  edge="start"
                  checked={item.done}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': item.id }}
                  onChange={() => {
                    handleCheck(item.id);
                  }}
                />
                <ListItemText className={item.done ? `${theme} done` : `${theme}`} id={item.id} primary={item.text} color={theme === 'light' ? 'black' : 'white'} />
              </ListItem>
            ))}
          </List>
        )}
    </div>
  );
};

export default ToDoItems;
