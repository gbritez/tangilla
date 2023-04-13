import { Button, FormGroup, TextField, Grow, Box } from "@mui/material";
import { React, useCallback, useState } from "react";
import { ResultGrid } from "./ResultGrid"
import './index.css';
import { getSynonyms } from "./parseService";

export default function App() {
    const [gridVisibility, setGridVisibility] = useState(false);
    const [textValue, setTextValue] = useState('');
    const [data, setData] = useState('')

    const handleParseClick = useCallback(async (event) => {
        event.preventDefault();
        const response = await getSynonyms(textValue.trim());
        setData(response)
        setGridVisibility(true);
    }, [textValue])

    const handleChange = useCallback((event) => {
        setTextValue(event.target.value)
    }, [])

    const handleClearClick = useCallback(() => {
        setGridVisibility(false);
    }, [])

    return (
        <>
            <h2>Text Parser</h2>
            <Box>
                <form onSubmit={handleParseClick}>
                    <FormGroup>
                        <TextField multiline id="text" value={textValue} onChange={handleChange} required />
                        <div className="buttonGroup">
                            <Button variant="outlined" onClick={handleClearClick}>Clear</Button>
                            <Button variant="outlined" type="submit">Parse</Button>
                        </div>
                    </FormGroup>
                </form>
            </Box>
            <Grow in={gridVisibility}>
                <div>
                    <ResultGrid rows={data} />
                </div>
            </Grow>
        </>
    );
}