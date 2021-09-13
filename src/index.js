import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  AppBar, Toolbar, IconButton, Typography, Container, Card,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ToDoItems from './components/todo-list';
// import ToDoList from './components/todo';
import './index.css';
import { ThemeContext } from './context';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleTheme}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            To Do List
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Card className="container">
          <ToDoItems />
        </Card>
      </Container>
    </ThemeContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
