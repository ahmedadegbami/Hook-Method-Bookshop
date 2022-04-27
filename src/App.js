import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import SingleBook from "./Components/SingleBook";
import books from "./Data/romance.json";
import BookList from "./Components/BookList";
import CommentArea from "./Components/CommentArea";

function App() {
  return (
    <div className="App">
      <WarningSign color="danger" />
      <MyBadge color="success" text="success" />
      <BookList books={books} />
    </div>
  );
}

export default App;
