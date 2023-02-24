import React from 'react'
import AuthorTable from '../DisplayTables/AuthorsTable'
import BooksTable from '../DisplayTables/BooksTable'
import MagazineTable from '../DisplayTables/MagazineTable'
import './HomePage.css'
const HomePage = () => {
    return (
        <div className='homepage'>
            <h1>Books</h1>
            <BooksTable />
            <h1>Magazines</h1>
            <MagazineTable />
            <h1>Authors</h1>
            <AuthorTable />
        </div>
    )
}

export default HomePage