import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  Paper,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useState } from 'react';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  selectCount,
} from './counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Redux Counter
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}>
        <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          {count}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <ButtonGroup variant="contained" fullWidth>
          <Button onClick={() => dispatch(increment())} startIcon={<AddIcon />}>
            Increment
          </Button>
          <Button onClick={() => dispatch(decrement())} startIcon={<RemoveIcon />}>
            Decrement
          </Button>
        </ButtonGroup>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <TextField
            type="number"
            label="Amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
            size="small"
            sx={{ flexGrow: 1 }}
          />
          <Button
            variant="contained"
            onClick={() => dispatch(incrementByAmount(incrementAmount))}
          >
            Add Amount
          </Button>
        </Box>

        <Button
          variant="outlined"
          color="secondary"
          startIcon={<RestartAltIcon />}
          onClick={() => dispatch(reset())}
          fullWidth
        >
          Reset
        </Button>
      </Box>
    </Paper>
  );
}

export default Counter;
