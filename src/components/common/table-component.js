import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';
import { font1, font3, font6 } from '../../assets/globalStyles';
import razorops from '../../assets/images/jenkins-alternative/razorops.svg';
import { Grid } from '@mui/material';

const Heading = styled('h1')`
    ${font3};
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    color: #031b4e;
`;

const StyledTableCell = styled(TableCell)`
    padding: 20px 20px 20px 25px;
    border: 1.5px solid #5b6987;
`;

const RowTableCell = styled(TableCell)`
    padding: 20px 20px 20px 25px;
    border-right: 1.5px solid #5b6987;
`;

const TableHeadTitle = styled('h1')`
    ${font6};
    font-size: 28px;
    line-height: 48px;
    color: #031b4e;
`;

const TableCellTitle = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #031b4e;
`;

const TableCellFeature = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #031b4e;
`;

export default function TableComponent({ img, data, heading }) {
    return (
        <Grid container spacing={5} justifyContent={'center'}>
            <Grid item>
                <Heading>{heading}</Heading>
            </Grid>
            <Grid style={{ overflowX: 'auto' }} item>
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 650, border: '1.5px solid #5b6987' }}
                        aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>
                                    <TableHeadTitle>Features</TableHeadTitle>
                                </StyledTableCell>
                                <StyledTableCell
                                    style={{
                                        background: 'rgba(0, 44, 155, 0.2)'
                                    }}>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={razorops} alt="" />
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={img} alt="" />
                                    </div>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((row, index) => (
                                <TableRow
                                    style={
                                        index % 2
                                            ? { background: '#F4F4F4' }
                                            : { background: '#F9FAFE' }
                                    }
                                    key={row.title}>
                                    <RowTableCell component="th" scope="row">
                                        <TableCellTitle>{row.title}</TableCellTitle>
                                    </RowTableCell>
                                    <RowTableCell>
                                        <TableCellFeature>{row.company1Features}</TableCellFeature>
                                    </RowTableCell>
                                    <RowTableCell>
                                        <TableCellFeature>{row.company2Features}</TableCellFeature>
                                    </RowTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}
