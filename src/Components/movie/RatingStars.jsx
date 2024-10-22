import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// Define your custom theme with the primary color as #C23C39
const theme = createTheme({
  palette: {
    primary: {
      main: '#C23C39',
    },
  },
});

export default function RatingStars({ movie }) {
  const initialSelectedStars = Math.round(movie.averageRating / movie.ratingCount);
  const [rate, setRate] = useState(initialSelectedStars);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitRating = async () => {
    console.log(rate);
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>  
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Stack spacing={1}>
            <Rating
              name="read-only"
              value={initialSelectedStars}
              precision={0.5}
              readOnly
              size="large"
              sx={{
                '& .MuiRating-iconFilled': {
                  color: '#C23C39', 
                },
                '& .MuiRating-iconEmpty': {
                  color: 'white',
                
                },
              }}
            />
          </Stack>
        </div>

        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Rate
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Rate this Movie</DialogTitle>
          <DialogContent>
            <Stack spacing={1}>
              <Rating
                name="rate-movie"
                value={rate}
                precision={0.5}
                size="large"
                onChange={(event, newValue) => setRate(newValue)}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">Cancel</Button>
            <Button onClick={handleSubmitRating} color="primary">Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
