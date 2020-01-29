import React,{Component} from 'react';

class Slider extends Component{
    constructor(props){
        super(props);
        this.handleDrop = this.handleDrop.bind(this);
        this.state={
            value :50
        }
    }
    handleDrop(e){
        this.setState({value: e.target.value});
        this.props.updating(e.target.value);
        
    }
    render(){
    return(
        <div className="fancy">
            <input type="range" id="BPMSlider" name="BPMSlider" min="0" max = "200" step="1"  onChange={this.handleDrop}></input>
            <label for="BPMSlider">BPM is {this.state.value}</label>
        </div>
    )}

}

export default Slider;