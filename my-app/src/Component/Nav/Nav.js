import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container, Divider } from '@mui/material';

export default function BasicButtons() {
  return (
    <Container>
        <Stack 
            direction="row" 
            spacing={2} 
            divider={<Divider orientation="vertical" flexItem />}
            alignItems="center">
        
        <Button  color="secondary" onClick={() => {console.log("Clicked")}} variant="contained">Contained</Button>
        
        </Stack>
    </Container>
   
  );
}
