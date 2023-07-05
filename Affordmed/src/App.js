
import './App.css';
import React from 'react'
import { Button } from "react-bootstrap";





class Fir extends React.Component {
  render() {
    const myStyle={
        backgroundImage:
 "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <h1> geeksforgeeks </h1>
      </div>
    );
  }
}
const App = () => {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
    <div className='GeeksForGeeks'>
      <h1>Train Details</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.no.</th>
            <th scope="col">Train Number</th>
            <th scope="col">Train Name</th>
            <th scope="col">Staring Point </th>
            <th scope="col">Ending Point</th>
            <th scope="col">For More Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>2548</th>
            <th>Train-1</th>
            <th>Kanyakumari</th>
            <th>Chennai</th> 
            <Button variant="default" style={{ color: "white", background: "silver" }}>
              Click Here 
            </Button>
          </tr>
          <tr>
            <th>1</th>
            <th>7748</th>
            <th>Train-2</th>
            <th>Chennai</th>
            <th>Kanyakumari</th> 
            <Button variant="default" style={{ color: "white", background: "silver" }}>
              Click Here 
            </Button>
          </tr>
          <tr>
            <th>1</th>
            <th>2548</th>
            <th>Train-3</th>
            <th>New Delhi</th>
            <th>Chennai</th> 
            <Button variant="default" style={{ color: "white", background: "silver" }}>
              Click Here 
            </Button>
          </tr>
          <tr>
            <th>1</th>
            <th>2548</th>
            <th>Train-4</th>
            <th>Chennai</th>
            <th>New Delhi</th> 
            <Button variant="default" style={{ color: "white", background: "silver" }}>
              Click Here 
            </Button>
          </tr>
          <tr>
            <th>1</th>
            <th>2548</th>
            <th>Train-5</th>
            <th>Kanyakumari</th>
            <th>Mumbai</th> 
            <Button variant="default" style={{ color: "white", background: "silver" }}>
              Click Here 
            </Button>
          </tr>
          <tr>
            <th>1</th>
            <th>2548</th>
            <th>Train-6</th>
            <th>Chennai</th>
            <th>Mumbai</th> 
            <Button variant="default" style={{ color: "white", background: "silver" }}>
              Click Here 
            </Button>
          </tr>
          <tr>
            <th>1</th>
            <th>2548</th>
            <th>Train-7</th>
            <th>Mumbai</th>
            <th>Chennai</th> 
            <Button variant="default" style={{ color: "white", background: "silver" }}>
              Click Here 
            </Button>
          </tr>
          <tr>
            <th>1</th>
            <th>2548</th>
            <th>Train-8</th>
            <th>Cochin</th>
            <th>Chennai</th> 
            <Button variant="default" style={{ color: "white", background: "silver" }}>
              Click Here 
            </Button>
          </tr>
        </tbody>
      </table>


    </div></>
  )
}

export default App

