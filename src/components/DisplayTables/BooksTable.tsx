import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { parseCsvFromBookUrl } from '../../UtilityFunctions/FetchCsvData';
import { Book } from '../../UtilityFunctions/dtos';

interface DataType {
    title: string;
    isbn: string;
    authors: string;
    description: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Isbn',
        dataIndex: 'isbn',
        width:200
    },
    {
        title: 'Authors',
        dataIndex: 'authors',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },

];
const BOOKS_CSV_URL = 'https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv'
const BooksTable = () => {

    const [books, setBooks] = useState<Book[]>([]);

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const fetchBooks = async () => {
        const parsedBooks: Book[] = await parseCsvFromBookUrl(BOOKS_CSV_URL);
        console.log(parsedBooks)
        setBooks(parsedBooks);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <div>
            <Table columns={columns} dataSource={books} onChange={onChange} />
        </div>
    )
}

export default BooksTable