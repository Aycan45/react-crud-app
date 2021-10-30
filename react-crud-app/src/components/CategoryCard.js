import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from "@mui/material";
import { DeleteOutlined} from "@mui/icons-material";
import { ThreeSixty } from "@mui/icons-material";

export default function CategoryCard({category, handleDelete, handleUpdate}){
    return(
        <div>
            <Card>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleUpdate(category.id)}>
                            <ThreeSixty />  
                        </IconButton>
                    }
                    title = {category.name}
                    subheader={category.type}
                    avatar={
                        <IconButton onClick={() => handleDelete(category.id)}>
                            <DeleteOutlined/>  
                        </IconButton>
                    }
                />
                 
                <CardContent>
                   
                    <Typography variant="body2" color="textSecondary">
                        {category.order}
                    </Typography>
                   
                </CardContent>
            </Card>
        </div>
    )
}