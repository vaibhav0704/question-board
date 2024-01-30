import React, { ChangeEvent, useState } from 'react';
import { QuestionRow, Subject } from '../types';
import { 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TablePagination, 
    TableRow 
} from '@mui/material';

interface Props {
    subject: Subject,
    data: QuestionRow[],
}

interface Column {
    id: 'section' | 'chapter' | 'answer' | 'difficulty' | 'positiveMark' | 'negativeMark',
    label: string,
    minWidth?: number,
    align?: 'right',
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'section', label: "Section", minWidth: 170 },
    { id: 'chapter', label: "Chapter", minWidth: 170 },
    { id: 'answer', label: "Answer", minWidth: 170 },
    { id: 'difficulty', label: "Difficulty", minWidth: 170 },
    { id: 'positiveMark', label: "+ve Marks", minWidth: 170 },
    { id: 'negativeMark', label: "-ve Marks", minWidth: 170 },
]

const QuestionTable: React.FC<Props> = ({ subject, data }) => {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    console.log(subject);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    <TableCell
                        align='right'
                        style={{ minWidth: 60 }}
                    >Q No.</TableCell>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, i) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                            <TableCell align={'right'}>{i+1}</TableCell>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                            );
                            })}
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
};

export default QuestionTable