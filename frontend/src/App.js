import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListTodoPage from './pages/ListTodoPage';
import AddTodoPage from './pages/AddTodoPage';
import EditTodoPage from './pages/EditTodoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route exact path="/" element={<ListTodoPage />} />
            <Route path="/add" element={<AddTodoPage />} />
            <Route path="/edit/:id" element={<EditTodoPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;