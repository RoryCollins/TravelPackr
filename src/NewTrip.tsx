import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useState } from "react";


function SubContents({ value }: { value: boolean }) {
    if (!value) return null;
    return (
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: "center"}}>
            <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/cards/background.jpg"
                        title="holiday"
                    />
                <CardContent>
                    <Typography variant="h5">New Template</Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/cards/ireland.jpg"
                    title="holiday"
                />
                <CardContent>
                    <Typography variant="h5">Ferry to Ireland</Typography>
                </CardContent>
            </Card>
        </Box>

    );
}

export default function NewTrip() {
    const [value, setValue] = useState(false);

    function handleClick() {
        setValue(!value);
    }

    return (
        <div>
            <Button variant="contained" size="medium" onClick={handleClick}>New Trip</Button>
            <SubContents value={value} />
        </div>
    );
}