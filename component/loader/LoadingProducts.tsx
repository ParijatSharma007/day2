import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';


function Media() {
  return (
    <Container style={{paddingTop : "35px"}}>
        <Grid container wrap="nowrap" spacing={{ xs: 12 ,md : 2 }}>
            <Grid item marginBottom={{ xs: 4, sm: 8, md: 3 }}>
                <Skeleton variant="rectangular" width={560} height={260} />
            </Grid>
            <Grid item marginBottom={{ xs: 4, sm: 8, md: 3 }}>
                <Skeleton variant="rectangular" width={560} height={260} />
            </Grid>
            <Grid item marginBottom={{ xs: 4, sm: 8, md: 3 }}>
                <Skeleton variant="rectangular" width={240} height={260} />
            </Grid>
            <Grid item marginBottom={{ xs: 4, sm: 8, md: 3 }}>
                <Skeleton variant="rectangular" width={240} height={260} />
            </Grid>
            <Grid item marginBottom={{ xs: 4, sm: 8, md: 3 }}>
                <Skeleton variant="rectangular" width={240} height={260} />
            </Grid>
        </Grid>
    </Container>
  );
}

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media/>
      {/* <Media /> */}
    </Box>
  );
}