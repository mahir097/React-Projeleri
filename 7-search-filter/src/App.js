import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [books, setBooks] = useState(bookData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const search = event.target.value;
    setSearchTerm(search);

    const filteredBooks = bookData.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="content">
        <div>
          {books.map((book) => (
            <div key={book.id} className="card">
              <div className="card-image">
                <img src={book.img} alt={book.title} />
              </div>
              <div className="card-title">{book.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

const bookData = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    img:
      "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg"
  },
  {
    id: 3,
    title: "The Great Gatsby",
    img:
      "https://m.media-amazon.com/images/I/71Qh5So-YZL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    img:
      "https://img.kitapyurdu.com/v1/getImage/fn:9677897/wh:true/miw:200/mih:200"
  },
  {
    id: 5,
    title: "1984",
    img: "https://i.dr.com.tr/cache/600x600-0/originals/0000000064038-1.jpg"
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    img:
      "https://www.savethecat.com/wp-content/uploads/2019/05/243a0ba33adbee20d3ed689fbf712ec8-jd-salinger-holden-caulfield.jpg"
  },
  {
    id: 7,
    title: "The Hobbit",
    img:
      "https://m.media-amazon.com/images/I/71k--OLmZKL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    img:
      "https://cdn.kobo.com/book-images/4929af70-799a-4e4f-a274-9ed39580a532/1200/1200/False/the-lord-of-the-rings-the-fellowship-of-the-ring-the-two-towers-the-return-of-the-king.jpg"
  }
];
