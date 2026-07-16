import React, {useState} from 'react';
import './App.css';

function App() {
  const [boards, setBoards] = useState([
    "🌙 Dream Board",
    "✈️ Travel Destinations",
    "🎬 Favorite Movie Quotes"
  ]);
    const [newBoard, setNewBoard] = useState("");

  const addBoard = () => {
    if (newBoard !== "") {
      setBoards([...boards, newBoard]);
      setNewBoard("");
    }
  };

  const deleteBoard = (index) => {
    const updatedBoards = boards.filter((board, i) => i !== index);
    setBoards(updatedBoards);
  };
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
            value={newBoard}
            onChange={(e) => setNewBoard(e.target.value)}
            />
            <button onClick={addBoard}>Add Board</button>
        </div>

        <h2>My Boards</h2>

        {/* Board Grid */}
        <div className="board-grid">

          {boards.map((board, index) => (
          <div className="board-card" key={index}>
         <h3>{board}</h3>
         <button onClick={() => deleteBoard(index)}>Delete</button>
         </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default App;