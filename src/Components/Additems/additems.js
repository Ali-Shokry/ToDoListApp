import React , {Component} from 'react';
import './additems.css';
class Additems extends Component{
    state = {
        name: '',
        age: '',
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value === "" || e.target.age.value === "") {
            return false;
        } else {
            this.props.addItm(this.state);
            this.setState({
                name: '',
                age: '',
            });
        };
    };
    render () {
        return(
            <div className='Form'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' ref={(v) => {this.input = v}} placeholder='Enter your name...' id='name' onChange={this.handleChange} value={this.state.name}/>
                    <input type='number' placeholder='Enter your age...' id='age' onChange={this.handleChange} value={this.state.age}/>
                    <input type='submit' value='Add' /> 
                </form>
            </div>
        )
    }
}
export default Additems;