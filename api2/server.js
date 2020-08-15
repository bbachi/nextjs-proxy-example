const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3081;

// place holder for the data
const tasks = [
  {
    id: 1,
    task: 'from api 2 task1',
    assignee: 'assignee1000',
    status: 'completed'
  },
  {
    id: 2,
    task: 'from api 2  task2',
    assignee: 'assignee1001',
    status: 'completed'
  },
  {
    id: 3,
    task: 'from api 2  task3',
    assignee: 'assignee1002',
    status: 'completed'
  },
  {
    id: 4,
    task: 'from api 2  task4',
    assignee: 'assignee1000',
    status: 'completed'
  },
  
];

app.use(bodyParser.json());

app.get('/api2/todos', (req, res) => {
  console.log('api/todos called!')
  res.json(tasks);
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});