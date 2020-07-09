import React, {useState} from 'react';
import './App.css';

export class HelloWorld extends React.Component {
    render() {
        return(
            <div>
                HelloWorld
            </div>
        );
    }
}

export class CountApp extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    plus(){
        this.setState({count:this.state.count + 1})
    }

    minas(){
        this.setState({count:this.state.count -1})
    }

    render() {
        return(
            <div>
                <h1>カウンター</h1>
                <p>{this.state.count}</p>
                <div>
                    <button onClick={() => this.plus()}>+</button>
                    <button onClick={() => this.minas()}>-</button>
                </div>
            </div>
        );
    }
}

export class TodoApp extends React.Component{
    constructor(){
        super()
        this.state = {
            value:""
        }
    }

    handleChange(e){
        this.setState({value:e.target.value})
    }

    render() {
        return(
            <div>
                <h1>TodoApp</h1>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={e => this.handleChange(e)}
                />
                <p>{this.state.value}</p>
            </div>
        );
    }
}