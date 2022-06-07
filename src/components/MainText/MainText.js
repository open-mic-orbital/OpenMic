import Box from '@mui/material/Box';

function MainText() {
    return (
        <>
        <Box sx={{
            textAlign: 'left',  padding: '3vh', paddingLeft: '15vh',
        }}>
        <h1 style={{ fontSize: '9vh' }}>
            Live Entertainment,<br></br>just a tap away.
        </h1>
        <p style={{ fontSize: '3vh', color:'grey' }}>
            Sign up now.
        </p>
        </Box>
        </>
    );
}

export default MainText;

