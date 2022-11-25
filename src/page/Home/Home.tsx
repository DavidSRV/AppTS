import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { People } from "@/data/people";

export interface HomeInterface {
  pageSize: Number;
}

export default function Home<HomeInterface>() {
   pageSize : 5;
   colums = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams)=> <>{params.filed  }</>
    },
  ];
  return (
    <div>
      <DataGrid
        rows={People}
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={[pageSize]}
        rowsPerPageOptions={pageSize}
      />
    </div>
  );
}
