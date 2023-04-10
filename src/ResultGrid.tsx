import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columnDefs: GridColDef[] = [
    { field: 'word', headerName: 'Word' },
    { field: 'analysis', headerName: 'Count of synonyms found in text', flex: 1 },

];
const data: any = []
export const ResultGrid: React.FC = () => {
    return (
        <Box>
            <h3>Synonyms per word</h3>
            <DataGrid

                columns={columnDefs}
                rows={data}
            />
        </Box>
    );
}
