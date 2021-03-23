import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => response.json())
      .then(json => this.setState({ photos: json }))
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#"><i class="fas fa-stroopwafel"></i>&nbsp;Developer</a>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
            aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarMainToggler">
            <div className="navbar-nav ml-auto pr-3">
              <a className="nav-item nav-link mt-md-3" href="#"><i className="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
              <a className="nav-item nav-link mt-md-3" href="#">Channel</a>
              <a className="nav-item nav-link mt-md-3 mb-3 md-md-0" href="#">Login</a>
            </div>

            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control mr-3" placeholder="Username" />&nbsp;
                <button className="btn btn-outline-success mt-4 mt-md-0">Login</button>
              </div>
            </form>
          </section>
                </nav>
 <div className="col-md-12 col-12 pt-3 pt-md-3">
        <section  id="carouselSection" className="carousel slide" data-ride="carousel" data-interval="4000">
          <ol className="carousel-indicators">
            <li data-target="#carouselSectionn" data-slide-to="0" className="active"></li>
            <li data-target="#carouselSection" data-slide-to="1"></li>
            <li data-target="#carouselSection" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner align-content-center">
            <div className="carousel-item active">
              <img src="https://via.placeholder.com/400/92c952" alt="Imagem0" className="d-block w-md-50 w-100"/>
              <div className="carousel-caption d-none d-md-block">
                <h4>Imagem 1</h4>
                <p>Alguma Informação</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://via.placeholder.com/600/771796" alt="Imagem1" className="d-block w-md-50 w-100"/>
              <div className="carousel-caption d-none d-md-block">
                <h4>Imagem 2</h4>
                <p>Alguma Informação</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="https://via.placeholder.com/600/24f355" alt="Imagem2" className="d-block w-md-50 w-100"/>
              <div className="carousel-caption d-none d-md-block">
                <h4>Imagem 3</h4>
                <p>Alguma Informação</p>
              </div>
            </div>
          </div>

           <div className="carousel-control-prev" href="#carouselSection" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </div>
              <div className="carousel-control-next" href="#carouselSection" role="button" data-slide="prev">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </div>
        </section>
    </div>
        <section className="container mt-2 pb-2">
          <ul className="list-unstyled">
            {
              this.state.photos.map(photo => {
                return (
                  <li className="media pt-5">
                    <img src={photo.thumbnailUrl} alt="" className="mr-3" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">{photo.title}</h5>
                      <p>Título do vídeo:  {photo.title}</p>
                    </div>
                  </li>

                )
              })
            }
          </ul>
        </section>

        <footer className="container-fluid col-12 pt-3 footer bg-dark text-light text-center">
          <container className="container col-6 col-md-2 d-flex justify-content-around">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-google-plus-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter-square"></i>
          </container>
        </footer>
      </div >
    );
  }
}
export default App;
