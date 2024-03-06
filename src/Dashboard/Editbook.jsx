import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const Editbook = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, bookDescription, bookPDFURL } = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Nonfiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Thriller",
    "Romance",
    "Horror",
    "History",
    "Self Help",
    "Cooking",
    "Business",
    "BioGraphy",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]
  const [selectedBookCategory, setSelectBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectBookCategory(event.target.value);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.BookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updatebookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }

    // console.log(bookObj);
    // update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatebookObj)
    }).then(res => res.json()).then(data => {
      alert("Book is updated successfully!")
     })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          {/* Book Title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="BookTitle" value="Book Title" />
            </div>
            <TextInput id="BookTitle" name='bookTitle' type="text" placeholder="Book Name" defaultValue={bookTitle} required />
          </div>
          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="AuthorName" value="Author Name" />
            </div>
            <TextInput id="AuthorName" name='AuthorName' type="text" placeholder="Author Name" defaultValue={authorName} required />
          </div>
        </div>

        {/* second row */}
        <div className='flex gap-8'>
          {/* Book Image URL */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" defaultValue={imageURL} required />
          </div>
          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onchange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Descrition" />
          </div>
          <Textarea id="bookDescription" name="bookDescription" placeholder="Write your book description..." required rows={4} defaultValue={bookDescription} className='w-full resize-none' />
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" defaultValue={bookPDFURL} placeholder="book pdf url" required />
        </div>

        <Button type="submit">Update Book</Button>

      </form>
    </div>
  )
}

export default Editbook