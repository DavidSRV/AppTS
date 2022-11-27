import React, { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";
import { Persone } from "@/models/people";
import { Checkbox, speedDialActionClasses } from "@mui/material";

export interface HomeInterface {
  pageSize: Number;
}

export default function Home<HomeInterface>() {
  const [selectedPeople, setSelectedPeople] = useState<Persone[]>([]);
  const pageSize = 5;

  const findPerson = (person : Persone) => !!selectedPeople.find((p) => p.id === person.id);
  const filterPerson = (person : Persone) => selectedPeople.filter((p) => p.id   person.id)

  const handleChange = (person: Persone) => {
    setSelectedPeople(findPerson(person) ? filterPerson(person) : [...selectedPeople, person]);
  };

  const colums = [
    {
      field: "Action",
      headerName: "",
      Width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row.id)}
              onChange={() => handleChange(params.row.id)}
            />
          }
        </>
      ),
    },
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
      getRowId={(row: any) => row.id}
    />
  );
}
