import React, { useState } from "react";
import { Container, FormControlLabel, FormLabel, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Radio } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


export default function CreateCategory(){

    const history = useHistory();
    const[name, setName] = useState('');
    const[type, setType] = useState('Stream');
    const[order, setOrder] = useState(null);
    const[nameError, setNameError] = useState(false);
    const[orderError, setOrderError] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setNameError(false)
        setOrderError(false)

        if (name === '') {
            setNameError(true)
        }
        if (order === '') {
            setOrderError(true)
        }
        if (name && order) {
            fetch('http://localhost:3004/categories',{
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({name,type,order})
            }).then(()=> history.push("/"))
        }
    }

    return(
        <Container>
            <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                gutterBottom
            >
                Create a new category 
            </Typography>
            
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField 
                    onChange ={(e)=> setName(e.target.value)}
                    label="Category Name"
                    variant="outlined"
                    color='secondary'
                    required
                    error={nameError}
                />
                <br/>
                <FormControl>
                <FormLabel>Category type</FormLabel>
                    <RadioGroup value={type} onChange ={(e)=> setType(e.target.value)}>
                        <FormControlLabel value="Stream" control={<Radio />} label="Stream"/>
                        <FormControlLabel value="Movie" control={<Radio />} label="Movie"/>
                        <FormControlLabel value="Radio" control={<Radio />} label="Radio"/>
                        <FormControlLabel value="Series" control={<Radio />} label="Series"/>
                    </RadioGroup>
                </FormControl>
                <br/>
                <TextField
                    onChange ={(e)=> setOrder(e.target.value)}
                    type="number"
                    label="Order"
                    color="secondary"
                    required
                    error={orderError}
                />
                <br/>
                <Link to="/">Back to homepage</Link>
                <br/>
                <Button
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRight/>}
                >
                    Submit
                </Button>
                
            </form>    

            
        </Container>
    );
}