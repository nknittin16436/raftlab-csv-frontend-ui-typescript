import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { parseCsvFromMagazineUrl } from '../../UtilityFunctions/FetchCsvData';
import { Magazine } from '../../UtilityFunctions/dtos';

interface DataType {
    title: string;
    isbn: string;
    authors: string;
    publishedAt: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Title',
        dataIndex: 'title',
        width: 200
    },
    {
        title: 'Isbn',
        dataIndex: 'isbn',
        width: 200
    },
    {
        title: 'Authors',
        dataIndex: 'authors',
    },
    {
        title: 'PublishedAt',
        dataIndex: 'publishedAt',
    },

];
const MagazineS_CSV_URL = 'https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv'
const MagazineTable = () => {

    const [magazines, setMagazines] = useState<Magazine[]>([]);

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const fetchMagazines = async () => {
        const parsedMagazines: Magazine[] = await parseCsvFromMagazineUrl(MagazineS_CSV_URL);
        console.log(parsedMagazines)
        setMagazines(parsedMagazines);
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

export default MagazineTable