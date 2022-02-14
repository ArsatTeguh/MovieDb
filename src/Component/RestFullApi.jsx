import React, { Component, Fragment } from "react";
import ListMovie from "./ListMovie";
import axios from "axios";
import { Container,TextField } from "@mui/material";
import HeaderContent from "./Header/HeaderContent";


class RestFullApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      textuser: "",
    };
    this.key = process.env.REACT_APP_KEY;
  }

  GetApi = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${this.state.textuser}`)
      .then((response) => {
        this.setState({
          list: response.data.results,
        });
      });
  };

  handleChange = (e) =>{
      this.setState({
          textuser:e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.GetApi()
  }

  handleClear = () => {
    this.setState({
      textuser: "",
    });
  };

  componentDidMount = () => {
    this.GetApi();
  };

  render() {
    return (
      <Fragment>
        <HeaderContent image={this.state.list} />
        <Container className="my-5">
        <form onSubmit={this.handleSubmit} >
          <TextField
            onChange={this.handleChange}
            id="outlined-basic"
            label="Movie"
            variant="filled"
            color="secondary"
            fullWidth
          />
        </form>
          <ListMovie ListMovies={this.state.list} />
        </Container>
      </Fragment>
    );
  }
}

export default RestFullApi;
