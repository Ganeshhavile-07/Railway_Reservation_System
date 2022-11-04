import React, { Component } from 'react'
import axios from 'axios'
import history from "react-router";
import SearchingStyle from '../Style/SearchingStyle.css'

class Searching extends Component {

  constructor(props) {
    super(props)

    this.state = {
      origin: "",
      destination: "",

      tickets: []
    }
  }

  changeHandler1 = (e) => {
    this.setState({
      origin: e.target.value,
    });
  }

  changeHandler2 = (e) => {
    this.setState({
      destination: e.target.value
    });
  }




  submitHandler = (e) => {
    e.preventDefault()
    console.log("sachin")
    axios.get("http://localhost:8090/search/getby/" + this.state.origin + "/" + this.state.destination)
      .then(response => {
        console.log(response.data)
        this.setState({
          tickets: response.data
        });
        this.props.history.push({
          pathname: `/avaliabletrain`,
          state: { tickets: response.data }
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <div className="searchForm">
          <div className="center">
            <h1>Search Your Train</h1>
            <form onSubmit={this.submitHandler} action="/">
              
              <div class="inputbox">
             
                <select className="selectClass"
                  
                  id="quantity"
                  onChange={this.changeHandler1}
                  required
                >
                  <option value="" disabled selected>
                  --Select Your Origin Station--
                  </option>

                  <option value="mumbai">mumbai  </option>
                  <option value="	Delhi">Delhi</option>
                  <option value="sambhajinagar"> Sambhajinagar </option>
  
                </select><p />
                <div class="inputbox">
                  
                  <select className="selectClass"
                    
                    id="quantity"
                    onChange={this.changeHandler2}
                    required
                  >
                    <option value="" disabled selected>
                    --Select Your Destination Station--
                    </option>

                    <option value="nagpur">nagpur</option>
                    <option value="kolhapur">Kolhapur</option>
                    <option value="solapur">	solapur</option>
                  </select>

                </div>

              </div>


              <div class="inputbox">
                <input type="submit" value="Search" />
              </div>
            </form>
          </div>  </div>

      </div>
    )
  }
}

export default Searching

