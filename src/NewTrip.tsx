import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useState } from "react";

function SubContents({ value }: { value: boolean }) {
    const templates = [
        {
            name: "New Template...",
            image: "/cards/background.jpg"
        },
        {
            name: "Ferry to Ireland",
            image: "/cards/ireland.jpg"
        }];

    function clickCard(text: string) {
        alert(text);
    }

    if (!value) return null;
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
            {templates.map(template =>
                <Card sx={{ maxWidth: 345, margin: 1 }} onClick={() => clickCard(template.name)}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={template.image}
                        title="holiday"
                    />
                    <CardContent>
                        <Typography variant="h5">{template.name}</Typography>
                    </CardContent>
                </Card>
            )}
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