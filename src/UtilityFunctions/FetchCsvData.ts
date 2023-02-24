import { parse, ParseResult } from 'papaparse';
import { Author, Book, Magazine } from './dtos';


export const parseCsvFromBookUrl = async (url: string) => {
    const parseFile = (url: string): Promise<Book[]> => {
        return new Promise(resolve => {
            parse(url, {
                download: true,
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: function (results: ParseResult<Book>) {
                    console.log(results.data);
                    resolve(results.data);
                }
            });
        });
    };
    let parsedData: Book[] = await parseFile(url);
    return parsedData;
}
export const parseCsvFromMagazineUrl = async (url: string) => {
    const parseFile = (url: string): Promise<Magazine[]> => {
        return new Promise(resolve => {
            parse(url, {
                download: true,
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: function (results: ParseResult<Magazine>) {
                    console.log(results.data);
                    resolve(results.data);
                }
            });
        });
    };
    let parsedData: Magazine[] = await parseFile(url);
    return parsedData;
}
export const parseCsvFromAuthorUrl = async (url: string) => {
    const parseFile = (url: string): Promise<Author[]> => {
        return new Promise(resolve => {
            parse(url, {
                download: true,
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: function (results: ParseResult<Author>) {
                    console.log(results.data);
                    resolve(results.data);
                }
            });
        });
    };
    let parsedData: Author[] = await parseFile(url);
    return parsedData;
}