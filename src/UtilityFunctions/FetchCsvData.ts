import { parse, ParseResult } from 'papaparse';


export const parseCsvFromUrl = async <T>(url: string): Promise<T[]> => {
    const parseFile = (url: string): Promise<T[]> => {
        return new Promise(resolve => {
            parse(url, {
                download: true,
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: function (results: ParseResult<T>) {
                    console.log(results.data);
                    resolve(results.data);
                }
            });
        });
    };
    let parsedData: T[] = await parseFile(url);
    return parsedData;
}
