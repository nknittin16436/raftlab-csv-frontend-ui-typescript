import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { parseCsvFromUrl } from '../../UtilityFunctions/FetchCsvData';
import { Author } from '../../UtilityFunctions/dtos';

interface DataType {
    email: string;
    firstname: string;
    lastname: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'First Name',
        dataIndex: 'firstname',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastname',
    },
];
const AUTHORS_CSV_URL = 'https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv'
const AuthorTable = () => {

    const [magazines, setMagazines] = useState<Author[]>([]);

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const fetchMagazines = async () => {
        const parsedAuthors: Author[] = await parseCsvFromUrl<Author>(AUTHORS_CSV_URL);
        console.log(parsedAuthors)
        setMagazines(parsedAuthors);
    }

    useEffect(() => {
        fetchMagazines();
    }, [])

    return (
        <div>
            <Table columns={columns} dataSource={magazines} onChange={onChange} />
        </div>
    )
}

export default AuthorTable