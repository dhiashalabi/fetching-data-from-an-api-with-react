import React, { Component } from "react";


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.loading ? "Loading" :
                    <h1>{this.state.character.name}</h1>
                }
            </div>
        );
    }
}