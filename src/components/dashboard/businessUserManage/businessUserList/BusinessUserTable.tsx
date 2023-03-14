import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { THEME } from "../../../../constant";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

interface Column {
  id: "username" | "email" | "phonenumber";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "username", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  {
    id: "phonenumber",
    label: "Phone Number",
    minWidth: 170,
    align: "right",
  },
];

interface Data {
  username: string;
  email: string;
  phonenumber: number;
}

function createData(
  username: string,
  email: string,
  phonenumber: number
): Data {
  return { username, email, phonenumber };
}

const rows = [
    createData("Owen M", "esaibrilliant34310@gmail.com", 1324171354),
    createData("Charles M", "abc@gmail.com", 1244171354),
    createData("David J", "def@gmail.com", 1431751354),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: THEME.TABLE_HEADER,
    color: THEME.LAVEL_COLOR,
    borderBottom: `1px solid ${THEME.TABLE_DEVIDER}`,
  },
  [`&.${tableCellClasses.body}`]: {
    color: THEME.LAVEL_COLOR,
    fontSize: 14,
    borderBottom: `1px solid ${THEME.TABLE_DEVIDER}`,
  },
}));

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: THEME.HOME_BOARD_COLOR,
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ backgroundColor: THEME.HEADER_COLOR }}
        >
          <TableHead style={{ border: `1px solid ${THEME.TABLE_DEVIDER}` }}>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </StyledTableCell>
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{color: THEME.LAVEL_COLOR}}
      />
    </Paper>
  );
}
