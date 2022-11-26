import React from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";

export interface HomeInterface {
  pageSize: Number;
}

export default function Home<HomeInterface>() {
  const pageSize = 5;
  const colums = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },

    {
      field: "company",
      headerName: "Company",
      flex: 1,
          renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },  
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
          renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
      <DataGrid
        rows={People}
        columns={colums}
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        getRowId ={(row : any) => row.id}
      />
  );
}
