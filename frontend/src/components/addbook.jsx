import { useState } from 'react';
import { Link } from 'react-router-dom';
const AddBookPage = () => {
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const addBook = async () => {
        try {
            // Make the API call to add the new book
            const response = await fetch('http://localhost:8000/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBook),
            });
            if (!response.ok) {
                throw new Error('Failed to add book');
            }
            // Reset the form after adding the book
            setNewBook({ title: '', author: '' });
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <div className="container px-4 py-8 mx-auto">
            <h2 className="mb-4 text-2xl font-semibold">Add New Book</h2>
            <form onSubmit={(e) => { e.preventDefault(); addBook(); }} className="mb-8">
                <label className="block mb-2">
                    Title:
                    <input type="text" name="title" value={newBook.title} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                </label>
                <label className="block mb-2">
                    Author:
                    <input type="text" name="author" value={newBook.author} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
                </label>
                <button type="submit" className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">Add Book</button>
            <div className="flex flex-row justify-center">
                    <Link to="/library" className="inline-block px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">library</Link>
            </div>
            </form>
            
        </div>
    );
};

export default AddBookPage;
