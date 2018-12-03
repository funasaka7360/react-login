import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  card: {
    maxWidth: 400,
    minWidth: 400,
    minHeight: 600,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

// function Login(props) {

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      tenantid: undefined,
      username: undefined,
      password: undefined,
    }
  }


  handleChange = name => event => {
      this.setState({
          [name]: event.target.value,
      });
  }
 
  render(){

    const { classes } = this. props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" style={{ color:'#22ac95'}}>
            Login
          </Typography>
          <div style={{margin:'20px 0 20px 0'}}>
            <img src='./auth_icon_test.svg' width={'230'} />
          </div>
          <div>
            <TextField
              id="standard-name"
              label="Tenantid"
              className={classes.textField}
              value={this.state.tenantid}
              onChange={this.handleChange('tenantid')}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="standard-name"
              label="Username"
              className={classes.textField}
              value={this.state.username}
              onChange={this.handleChange('username')}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="standard-password-input"
              label="Password"
              className={classes.textField}
              type="Password"
              onChange={this.handleChange('password')}
              autoComplete="current-password"
              margin="normal"
            />
          </div>
        </CardContent>
        <CardActions style={{'text-align':'center'}}>
          <Button size="small">forget password</Button>
        </CardActions>
      </Card>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);