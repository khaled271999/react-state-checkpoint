import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props)
        this.person={
            FullName:"Khaled Khamassi",
            Bio:"I am a student who is currently pursuing full stack Javascript development.",
            Profession:"Student",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCtg3ujNK6HCylQMg6EV-rIUfM94PeztrrQ&usqp=CAU",

        }
        this.state={count:0}
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(prevState=>({
              count:prevState.count+1  
            }))
        },1000)
    }
  render() {
    return (
      <div>
          <h2>{this.person.FullName}</h2>
          <h2>{this.person.Bio}</h2>
          <h2>{this.person.Profession}</h2>
          <h2>{this.state.count}</h2>
          <img style={{width:"500px"}} src={this.person.img} alt="img"/>
      </div>
    )
  }
}