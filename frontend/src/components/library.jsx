import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const ManageBooksPage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTitle, setSearchTitle] = useState('');
    const [searchAuthor, setSearchAuthor] = useState('');

    useEffect(() => {
        fetchBooks();
    }, [searchTitle, searchAuthor]);

    const fetchBooks = async () => {
        try {
            let url = 'https://library-management-backend-ipeu.onrender.com/api/books';
            const queryParams = [];
            if (searchTitle.trim() !== '') {
                queryParams.push(`title=${encodeURIComponent(searchTitle)}`);
            }
            if (searchAuthor.trim() !== '') {
                queryParams.push(`author=${encodeURIComponent(searchAuthor)}`);
            }
            if (queryParams.length > 0) {
                url += `?${queryParams.join('&')}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBooks(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const deleteBook = async (bookId) => {
        try {
            await fetch(`https://library-management-backend-ipeu.onrender.com/api/books/${bookId}`, {
                method: 'DELETE',
            });

            setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleTitleChange = (e) => {
        setSearchTitle(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setSearchAuthor(e.target.value);
    };

    return (
        <div className="container px-4 py-8 mx-auto">
            <h1 className="mb-6 text-3xl font-semibold">Manage Books</h1>
            <div className="flex justify-end">
                <Link to="/add" className="inline-block px-6 py-3 mr-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Add Book</Link>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Search by Title:</label>
                <input type="text" value={searchTitle} onChange={handleTitleChange} placeholder="Enter title..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Search by Author:</label>
                <input type="text" value={searchAuthor} onChange={handleAuthorChange} placeholder="Enter author..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
            </div>
            <table className="w-full border border-collapse border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 border border-gray-300">Title</th>
                        <th className="px-4 py-2 border border-gray-300">Author</th>
                        <th className="px-4 py-2 border border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id} className="bg-white">
                            <td className="px-4 py-2 border border-gray-300">{book.title}</td>
                            <td className="px-4 py-2 border border-gray-300">{book.author}</td>
                            <td className="px-4 py-2 border border-gray-300">
                                <button onClick={() => deleteBook(book.id)} className="px-2 py-1 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageBooksPage;
