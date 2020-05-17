import React, { Component, useState } from 'react';
import { Container } from 'react-bootstrap';
import BookItem from './component/BookItem/BookItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    let [ state, setState ] = useState({
        books: [
          {
            image: "https://loremflickr.com/320/240",
            title: "Hatari!",
            description: "Laceration with foreign body of left back wall of thorax without penetration into thoracic cavity, subsequent encounter"
          }
        ]
    });
    let { books } = state;
    return <div className="App">
      <Container>
        {
          books.map((book, index) => {
            return <BookItem book={book} key={index} />
          })
        }

      </Container>
    </div>
}

export default App;
