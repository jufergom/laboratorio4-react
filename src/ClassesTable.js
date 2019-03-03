import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ClassesTable extends Component {
    constructor(props) {
        super(props);
        this.rows = props.rows;
    }

    render() {
        return(
            <Paper>
                <Table className="notas">
                    <TableHead>
                        <TableRow>
                            <TableCell>Clase</TableCell>
                            <TableCell align="right">Parcial 1</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.className}
                                </TableCell>
                                <TableCell align="right">
                                    {row.classNote}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default ClassesTable;