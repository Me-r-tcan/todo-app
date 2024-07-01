import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTodoPage from './pages/AddTodoPage';
import ListTodoPage from './pages/ListTodoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route exact path="/" element={<ListTodoPage />} />
            <Route path="/add" element={<AddTodoPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;