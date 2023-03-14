import React, { useCallback, useMemo, useState, useEffect } from "react";
import { THEME } from "../../../../constant";
import MaterialReactTable, {
  MRT_ToggleDensePaddingButton,
  MRT_FullScreenToggleButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
} from "material-react-table";
import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { GetSuperAdminsApi } from "../../../../api";

const SuperAdminTable = (props: any) => {
  // const dispatch = useDispatch();

  const [tableData, setTableData] = useState([{}]);

  const [allPageSize, setAllPageSize] = useState(Number);

  const columns: any = useMemo(
    () => [
      {
        accessorKey: "full_name",
        header: "Full Name",
        size: 150,
        Cell: (cell: any) => <div>{cell.row.original.full_name}</div>,
      },
      {
        accessorKey: "email",
        header: `Email`,
        size: 250,
        Cell: (cell: any) => <div>{cell.row.original.email}</div>,
      },
      {
        accessorKey: "phonenumber",
        header: "Phone Number",
        size: 250,
        Cell: (cell: any) => <div>{cell.row.original.phonenumber}</div>,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
        Cell: (cell: any) => (
          <div>
            {cell.row.original.status ? (
              <div className="w-16 h-8 rounded-md bg-primary text-slate flex items-center">
                <a className="ml-auto mr-auto text-white">Enable</a>
              </div>
            ) : (
              <div className="w-20 h-8 rounded-md bg-warning text-slate flex items-center">
                <a className="ml-auto mr-auto text-white">Not Enable</a>
              </div>
            )}
          </div>
        ),
      },
    ],
    []
  );

  const handlePaginationChange = (event: any, value: number) => {
    const pageNum = value;
    getSuperAdmin(pageNum - 1, pagination.pageSize);
  };

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5, //customize the default page size
  });

  const getSuperAdmin = async (pageIndex: number, pageSize: number) => {
    const reqData = {
      token: "",
      data: {
        email: "esaibrilliant34310@gmail.com",
        pageNum: pageIndex + 1,
        dataNum: pageSize,
      },
    };
    const res = await GetSuperAdminsApi(reqData);
    setAllPageSize(res.pageNum);
    setTableData(res.superAdminDatas);
  };

  useEffect(() => {
    getSuperAdmin(pagination.pageIndex, pagination.pageSize);
  }, []);

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 50,
          },
        }}
        columns={columns}
        data={tableData}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: THEME.TABLE_DEVIDER,
            color: THEME.LAVEL_COLOR,
            borderBottom: `1px solid ${THEME.TABLE_DEVIDER}`,
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            backgroundColor: THEME.HEADER_COLOR,
            borderBottom: `1px solid ${THEME.TABLE_DEVIDER}`,
            color: THEME.LAVEL_COLOR,
          },
        }}
        muiTopToolbarProps={{
          sx: {
            backgroundColor: THEME.HEADER_COLOR,
            color: THEME.LAVEL_COLOR,
          },
        }}
        muiBottomToolbarProps={{
          sx: {
            backgroundColor: THEME.HEADER_COLOR,
            color: THEME.LAVEL_COLOR,
          },
        }}
        muiTablePaginationProps={{
          showFirstButton: true,
          showLastButton: true,
        }}
        
        onPaginationChange={setPagination}
        state={{ pagination }}
        renderBottomToolbar={({ table }) => (
          <div className="h-16 bg-slate">
            <div className="float-right">
              <Pagination
                count={allPageSize}
                shape="rounded"
                color="primary"
                sx={{ color: "white" }}
                onChange={handlePaginationChange}
              />
            </div>
          </div>
        )}
        renderToolbarInternalActions={({ table }) => (
          <Box>
            <MRT_ToggleGlobalFilterButton
              table={table}
              sx={{ color: THEME.LAVEL_COLOR }}
              color="secondary"
            />
            <MRT_ToggleFiltersButton
              table={table}
              sx={{ color: THEME.LAVEL_COLOR }}
            />
            <MRT_ToggleDensePaddingButton
              table={table}
              sx={{ color: THEME.LAVEL_COLOR }}
            />
          </Box>
        )}
        
        muiTableBodyRowProps={{ defaultValue: 100 }}
      />
    </>
  );
};

export default SuperAdminTable;
