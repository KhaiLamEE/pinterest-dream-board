import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h1>📌 Pinterest Dream Board</h1>
      </nav>

      {/* Main Content */}
      <div className="main-content">

        {/* Input Form */}
        <div className="form-container">
          <input
            type="text"
            placeholder="Enter board name..."
          />
          <button>Add Board</button>
        </div>

        <h2>My Boards</h2>

        {/* Board Grid */}
        <div className="board-grid">

          <div className="board-card">
            <h3>🌙 Dream Board</h3>
          </div>

          <div className="board-card">
            <h3>✈️ Travel Destinations</h3>
          </div>

          <div className="board-card">
            <h3>🎬 Favorite Movie Quotes</h3>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;