import React from 'react';
import Cmp from './Cmp';
import Axios from "axios";
import Movie from './Movie';


const blackpink = [{ name: "jennie", img: "link" }, { name: "jisoo", img: "link" }];

class App extends React.Component {

  state = {
    isLoading:true,
    movies:[]

  };
  getMovies = async() => {
    const { data : { data : { movies } } } = await Axios.get("https://yts.mx/api/v2/list_movies.json");
    // console.log(movies);
    this.setState({movies, isLoading : false});
  }
  componentDidMount() {
    
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (<div className="App">
      {isLoading ? "hi" : movies.map( i => <Movie title = {i.title}/>)}
    </div>);
  }
}

export default App;
