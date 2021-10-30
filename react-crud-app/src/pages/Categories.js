import React, {useEffect, useState} from "react";
import { Container, Grid } from "@mui/material";
import CategoryCard from "../components/CategoryCard";
import { Button } from "@mui/material";
import { useHistory } from "react-router";

export default function Categories(){
    const [categories, setCategories] = useState([]);

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/create`; 
        history.push(path);
    }

    useEffect(() =>{
        fetch('http://localhost:3004/categories?_sort=order&_order=desc')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    const handleUpdate = async (id) =>{
        await fetch(`http://localhost:3004/categories/${id}`)
            .then(response => response.json())
            .then(()=> history.push(`/categories/${id}`))
    }
            
    

    const handleDelete = async (id) =>{
        await fetch(`http://localhost:3004/categories/${id}`,{
            method: "DELETE"
        })

        const newCategoryList = categories.filter(category => category.id !== id)

        setCategories(newCategoryList);
    }

    
    return(
        <Container>
            <Grid container spacing={3}>
                {categories.map(category =>(
                    <Grid item key={category.id} xs={12} md={6} lg={4}>
                       <CategoryCard category={category} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
                    </Grid>
                ))}
            </Grid>
            <Button
                type="submit"
                color="secondary"
                variant="contained" 
                onClick={routeChange}>
                    Add category
            </Button>
        </Container>
    )
}
