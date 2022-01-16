import { Container, Grid, Avatar, Box } from '@mui/material';

import SingleComment from '../SingleComment/SingleComment';

const CommentBox = ({name,image,storecomment}) => {
   
    return (
        <Container>
            <Box sx={{width:'100%',mx:'auto',my:2}}>
            <Grid container spacing={5}>
                <Grid item xs={12} lg={1}  >
                    <Avatar
                        alt="Remy Sharp"
                        src={image}
                        sx={{ width: 70, height: 90}}
                    />
                </Grid>
                <Grid item xs={12} lg={11}>
                    <SingleComment name={name} storecomment={storecomment}></SingleComment>
                </Grid>
            </Grid>
            </Box>
            
        </Container>
    );
};

export default CommentBox;