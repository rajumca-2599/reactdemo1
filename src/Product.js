import React, { Component } from 'react'

export class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/Login").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }

    render() {
        return (
            <div className="container">
             
            <h1 style={{ color: "red" }}>Product List</h1>
            {this.state.list ? (
              <div>
                <table className="table table-hover">
                  
                    <tr>
                      <th>id</th>
                      <th>Name</th>
                      <th>password</th>
                     
                      <th>Actions</th>
                      
                    </tr>
                 
                    {this.state.list.map((product, i) => (
                    
                      <tr>
                        <td>{product.id}</td>
                        <td>{product.username}</td>
                        <td>{product.password}</td>
                        <td>
                            <button className="btn btn-primary">Update</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                       
                      </tr>
                    ))}
                
                </table>
               
              </div>
            ) : (
              <p>Please wait</p>
            )}
          </div>
        )
    }
}

export default Product
