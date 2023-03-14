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
  id:
    | "companyname"
    | "vatid"
    | "address"
    | "subdistrict"
    | "city"
    | "province"
    | "zipcode"
    | "country"
    | "email"
    | "phonenumber"
    | "billingaddress"
    | "billingsubdistrict"
    | "billingcity"
    | "billingprovince"
    | "billingzipcode"
    | "billingcountry"
    | "billingemail";
  label: string;
  minWidth?: number;
  align?: "left";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "companyname", label: "Company Name", minWidth: 140 },
  { id: "vatid", label: "Vat Id", minWidth: 50 },
  {
    id: "address",
    label: "Address",
    minWidth: 170,
    align: "left",
  },
  { id: "subdistrict", label: "Sub District", minWidth: 130, align:'left' },
  { id: "city", label: "City", minWidth: 100 },
  { id: "province", label: "Province", minWidth: 100 },
  { id: "zipcode", label: "Zip Code", minWidth: 100 },
  { id: "country", label: "Country", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "phonenumber", label: "Phone number", minWidth: 100 },
  { id: "billingaddress", label: "Billinag Address", minWidth: 100 },
  { id: "billingsubdistrict", label: "Billing Subdistrict", minWidth: 100 },
  { id: "billingcity", label: "Billing City", minWidth: 100 },
  { id: "billingprovince", label: "Billing Province", minWidth: 100 },
  { id: "billingzipcode", label: "Billing Zipcode", minWidth: 100 },
  { id: "billingcountry", label: "Billing Country", minWidth: 100 },
  { id: "billingemail", label: "Billing Email", minWidth: 100 },
];

interface Data {
  companyname: string;
  vatid: string;
  address: string;
  subdistrict: string;
  city: string;
  province: string;
  zipcode: string;
  country: string;
  email: string;
  phonenumber: string;
  billingaddress: string;
  billingsubdistrict: string;
  billingcity: string;
  billingprovince: string;
  billingzipcode: string;
  billingcountry: string;
  billingemail: string;
}

function createData(
  companyname: string,
  vatid: string,
  address: string,
  subdistrict: string,
  city: string,
  province: string,
  zipcode: string,
  country: string,
  email: string,
  phonenumber: string,
  billingaddress: string,
  billingsubdistrict: string,
  billingcity: string,
  billingprovince: string,
  billingzipcode: string,
  billingcountry: string,
  billingemail: string
): Data {
  return {
    companyname,
    vatid,
    address,
    subdistrict,
    city,
    province,
    zipcode,
    country,
    email,
    phonenumber,
    billingaddress,
    billingsubdistrict,
    billingcity,
    billingprovince,
    billingzipcode,
    billingcountry,
    billingemail,
  };
}

const rows = [
  createData(
    "Konx",
    "GB123456789",
    "Apeldoorn, Netherlands",
    "aaa",
    "bbb",
    "ccc",
    "wew-241",
    "Netherlands",
    "esaibrilliant34310@gmail.com",
    "1324171354",
    "qqq",
    "qqq",
    "qqq",
    "qqq",
    "qqq",
    "qqq",
    "qqq"
  ),
  createData(
    "Konx",
    "GB123456789",
    "Apeldoorn, Netherlands",
    "aaa",
    "bbb",
    "ccc",
    "wew-241",
    "Netherlands",
    "aaa@gmail.com",
    "1324171354",
    "qqq",
    "qqq",
    "qqq",
    "qqq",
    "qqq",
    "qqq",
    "qqq"
  ),
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

export default function BusinessAccountBusinessTypeTable() {
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
        sx={{ color: THEME.LAVEL_COLOR }}
      />
    </Paper>
  );
}
