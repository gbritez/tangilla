import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columnDefs: GridColDef[] = [
    { field: 'word', headerName: 'Word' },
    { field: 'synonyms_found', headerName: 'Count of synonyms found in text', flex: 1 },

];

export const ResultGrid: React.FC = ({ rows }: any) => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <h3>Synonyms per word</h3>
            <DataGrid
                columns={columnDefs}
                rows={rows}
                getRowId={(row) => row.word}
            />
        </Box>
    );
}
