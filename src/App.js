import { Button, Paper, FormGroup, TextField, Fade, Grow } from "@mui/material";
import { React, useCallback, useState } from "react";
import { ResultGrid } from "./ResultGrid"
import { helloWorld } from "./parseService";
import './index.css';

export default function App() {
    const [gridVisibility, setGridVisibility] = useState(false)

    const handleParseClick = useCallback(() => {
        setGridVisibility(true);
        helloWorld()
    }, [])
    const handleClearClick = useCallback(() => {
        setGridVisibility(false);

    }, [])
    return (
        <>
            <h2>Text Parser</h2>
            <Paper>
                <FormGroup>
                    <TextField multiline id="text" />
                    <div className="buttonGroup">
                        <Button variant="outlined" onClick={handleClearClick}>Clear</Button>
                        <Button variant="outlined" onClick={handleParseClick}>Parse</Button>
                    </div>
                </FormGroup>
            </Paper>
            <Grow in={gridVisibility}>
                <div>
                    <ResultGrid />
                </div>
            </Grow>
        </>
    );
}