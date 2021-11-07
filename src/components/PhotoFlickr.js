import React, { Component } from 'react';
import './PhotoFlickr.css'; 






class App extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
      page: 1,
      total_pages: 1000
      //this.fetchPhotos = this.fetchPhotos.bind(this)
    };
    
  }

  

  componentDidMount(){
   
    const total_pages = this.state.total_pages
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags=bikerace%2Cboulderbiketour&per_page=40&page='+this.state.page+'&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
  
      if (total_pages === 1000){
        this.setState([{total_pages: j.photos.pages,pictures: j.photos.photo}])
     }
     else{ 
       this.setState([{pictures: j.photos.photo}])
     }
      let picArray = j.photos.photo.map((pic) => {
        
        var srcPath = 'https://live.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'_b.jpg';
        return(
         
          <div className="m-5" >
          <img alt="dogs" src={srcPath} className="img-fluid img-thumbnail"></img>
          </div>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
    
  }

  
 




  NextPage = () => {
    this.componentDidMount()
    let CurrentPage = this.state.page;
    CurrentPage++;
    if (CurrentPage <= this.state.total_pages){
     this.setState({page:CurrentPage});
    }
    
    
 
   }
 
  
  PreviousPage = () => {
    this.componentDidMount()
    let CurrentPage = this.state.page;
    CurrentPage--; 
    if (CurrentPage >= 1){
      this.setState({page:CurrentPage});
     }
     

   }

  render() {
    return (
      <div className="App">

      <div className="container1">
        <div className="wrap1">

          <button onClick={this.PreviousPage} className="btn btn-primary m-3">Previous</button>
          <button onClick={this.NextPage} className="btn btn-primary m-3">Next</button>

          </div>
    </div>
     
        
          <div>
           
          </div>
          
            <div className="container">
              
           
            

            {this.state.pictures}

            

          </div>
          

          <div className="container">
            <div className="wrap2">

          <button onClick={this.PreviousPage} className="btn btn-primary m-3">Previous</button>
          <button onClick={this.NextPage} className="btn btn-primary m-3">Next</button>
          </div >
          </div>
          

        

        
      </div>
    );
  }
}

export default App;
