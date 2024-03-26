import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import NewTrip from './NewTrip';

function App() {
  return (
    <div className="App">
      <h1>TravelPackr</h1>
      <Grid container spacing={2}>
        <Grid item xs></Grid>
        <Grid item xs={5}>
          <Stack direction="column" spacing={2}>
            <NewTrip/>
            <Button variant="contained">Manage...</Button>
          </Stack>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

export default App;
