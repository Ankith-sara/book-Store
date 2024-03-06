import React, { useEffect, useState } from 'react'
import BookCard from '../Components/BookCard';

const BestSellerbook = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks.log(data.slice(0,8)))
    }, [])
  return (
    <div><BookCard books= {books} headline="Best Seller Books"/></div>
  )
}

export default BestSellerbook