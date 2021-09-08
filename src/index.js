import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppBar, Toolbar, IconButton, Typography, Container, Card,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ToDoList from './components/todo';
import './index.css';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            To Do List
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Card className="container">
          <ToDoList />
        </Card>
      </Container>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
