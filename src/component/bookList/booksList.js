import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBook } from '../../actions'


 class BooksList extends Component {
    componentDidMount(){
        this.props.addBook({
            isbn: '432623453',
            title: 'Harry',
            subtitle : 'sub harry',
            description: 'lorem ipsum falan feşmekan',
            author: 'J.K Rowling',
            pages: 479
        });
    }

    render() {

        return (
            <div>
            Books List
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return state; 
}


export default connect(mapStateToProps, {addBook} )(BooksList); 