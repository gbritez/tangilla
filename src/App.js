import { Button, FormGroup, TextField, Grow, Box, CircularProgress } from "@mui/material";
import { React, useCallback, useState } from "react";
import { ResultGrid } from "./ResultGrid"
import './index.css';
import { getSynonyms } from "./parseService";

export default function App() {
    const [gridVisibility, setGridVisibility] = useState(false);
    const [textValue, setTextValue] = useState('');
    const [data, setData] = useState([]);
    const [formValidation, setFormValidation] = useState(false);
    const [validationMessage, setValidationMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleParseClick = useCallback(async (event) => {
        event.preventDefault();
        if (textValue.trim() !== '') {
            setIsLoading(true);
            setValidationMessage('');
            setFormValidation(false);
            const response = await getSynonyms(textValue.trim());
            setData(response);
            setGridVisibility(true);
            setIsLoading(false);
        }
        else {
            setValidationMessage('This field is required.')
            setFormValidation(true);
        }

    }, [textValue])

    const handleChange = useCallback((event) => {
        setTextValue(event.target.value);
    }, [])

    const handleClearClick = useCallback(() => {
        setGridVisibility(false);
        setValidationMessage('');
        setFormValidation(false);
    }, [])

    return (
        <>
            <h2>Text Parser</h2>
            <Box>
                <form onSubmit={handleParseClick}>
                    <FormGroup>
                        <TextField multiline id="text" value={textValue} onChange={handleChange} error={formValidation} helperText={validationMessage} />
                        <div className="buttonGroup">
                            <Button variant="outlined" onClick={handleClearClick}>Clear</Button>
                            <Button variant="outlined" type="submit">Parse</Button>
                        </div>
                    </FormGroup>
                </form>
            </Box>
            {
                isLoading ?
                    <div className="progress">
                        <CircularProgress />
                    </div>
                    :
                    <Grow in={gridVisibility}>
                        <div>
                            <ResultGrid rows={data} />
                        </div>
                    </Grow>
            }
        </>
    );
}