import React, { Component } from 'react';
import axios from 'axios';
import GetAllSongs from './GetAllSongs';
import AddSong from './AddSong/AddSong';


    
class App extends Component {
  
    constructor(props){
        super(props);
        this.state = [];
        }
        
        deleteSong = (songID) => {
            axios.delete("http://127.0.0.1:8000/music/"+songID+"/")
              .then(response => {
                if(response.data != null) {
                  alert("Song deleted successfully.");
                  this.makeGetRequest()
                }
              });
              
          };
    
        async makeGetRequest(){
            try{
              let response = await axios.get("http://127.0.0.1:8000/music/")
              this.setState({
                data : response.data
              });
              console.log(response.data)
            }
            catch(ex){
              console.log("error in api call");
            }
        }

        addSongRequest = async (newSong) => { 
            await axios.post("http://127.0.0.1:8000/music/", newSong)
            let response = await this.makeGetRequest()
              if(response === undefined){
                  this.setState({
      
                  });
              }
          }
      

    render(){
        return(
            <div>
            <h1>Music Library:</h1>
              <GetAllSongs />
              <AddSong />
             
            </div>
        );              
    }
}

export default App;