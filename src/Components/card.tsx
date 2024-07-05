import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PaidIcon from '@mui/icons-material/Paid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>

                                    <PaidIcon fontSize='large' />
                                    <Typography sx={{ fontSize: 20 }} color="text.secondary">
                                        Earnings
                                    </Typography>
                                    <Typography sx={{ fontSize: 20 }} color="text.secondary">
                                        $350.4
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
