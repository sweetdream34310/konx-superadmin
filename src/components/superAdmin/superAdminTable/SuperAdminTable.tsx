import React, { useCallback, useMemo, useState, useEffect } from "react";
import { THEME } from "../../../constant";
import MaterialReactTable, {
  MRT_ToggleDensePaddingButton,
  MRT_FullScreenToggleButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
} from "material-react-table";
import { EditSuperAdmin, DeleteSuperAdmin, ResetPassword, AddSuperAdmin} from "../../dialog";
import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { GetSuperAdminsApi } from "../../../api";

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
    pageSize: 10, //customize the default page size
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

  const updateEdit = (index: any, data: any) => {
    tableData[index] = {
      email: data.email,
      full_name: data.full_name,
      phonenumber: data.phonenumber,
      status: data.status,
    };
    setTableData([...tableData]);
  };

  const updateDelete = (index: any) => {
    tableData.splice(index, 1);
    setTableData([...tableData]);
  };

  const updateAdd = (data : any) => {
    tableData.push(data);
    setTableData([...tableData]);

    props.updateNumber('add')
  }

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
        enableEditing
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <EditSuperAdmin
              data={tableData[row.index]}
              index={row.index}
              update={updateEdit}
            />
            <div className="w-5" />
            <DeleteSuperAdmin
              data={tableData[row.index]}
              index={row.index}
              update={updateDelete}
              updateNumber={props.updateNumber}
            />
            <div className="w-5" />
            <ResetPassword data={tableData[row.index]} />
          </Box>
        )}
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
        muiTablePaperProps={{
          color: THEME.BUTTON_COLOR,
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
            <MRT_FullScreenToggleButton
              table={table}
              sx={{ color: THEME.LAVEL_COLOR }}
            />
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <AddSuperAdmin updateAdd = {updateAdd}  />
        )}
        muiTableBodyRowProps={{ defaultValue: 100 }}
      />
      {/* )} */}
    </>
  );
};

export default SuperAdminTable;
