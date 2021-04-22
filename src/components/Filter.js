import React from 'react';

import { 
  makeStyles,
  Grid,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));
 
 
export default function Filter(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
      <>
      <Typography>Select categories</Typography>
      <Grid container>
          <Grid item><Button>1</Button></Grid>
          <Grid item><Button>1234</Button></Grid>
          <Grid item><Button>1</Button></Grid>
          <Grid item><Button>1234</Button></Grid>
          <Grid item><Button>1</Button></Grid>
          <Grid item><Button>1234w3536</Button></Grid>
          <Grid item><Button>1234w3536</Button></Grid>
          <Grid item><Button>1</Button></Grid>
          <Grid item><Button>1234</Button></Grid>
          <Grid item><Button>1</Button></Grid>
          <Grid item><Button>1</Button></Grid>
          
          <Grid item><Button>1234w3536</Button></Grid>
      </Grid>
      </>
  );
  /*
  return (
    <>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
    </>
  );
  */
}