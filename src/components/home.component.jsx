import React from 'react';
import CustomButton from './button.component';
import { connect } from "react-redux";
import { addItem } from '../redux/actions';
import './home.css'


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id:'',
            item:''
        }
    }

    handleChange = (e) => {
        this.setState({
            id: Date.now(),
            item: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(Date.now())
        this.props.addItem(this.state)
        this.setState({
            item: ''
        })
    }

    render(){
    return(
        <div className='home'>
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.item}/>
                <CustomButton type='submit'>Add Item</CustomButton>
            </form>
        </div>
    )
    }
}
    

const mapDisaptchToProps = dispatch =>(
    {
    addItem: item => dispatch(addItem(item))
    }
)

const mapStateToProps = ({item: {listItems}}) => ({
    listItems: listItems
})

export default connect(mapStateToProps, mapDisaptchToProps)(Home)