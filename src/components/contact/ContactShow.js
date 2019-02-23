import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios';

class ContactShow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            contact:{}
        }
        this.handleDelete=this.handleDelete.bind(this)
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/contacts/${id}`, {
            headers: {
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const contact = response.data
                this.setState(()=>({contact}))
                
            })
            .catch((err) => {
            console.log(err)
        })
    }
    handleDelete() {
        const confirmDelete = window.confirm('are you sure')
        if (confirmDelete) {
            axios.delete(`/contacts/${this.state.contact._id}`, {
                headers: {
                    'x-auth':localStorage.getItem('token')
                }
            })
                .then((response) => {
                    const contact=response.data        
                this.props.history.push(contact)
                })
                .catch((err) => {
                console.log(err)
            })
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.contact.name}</h2>
                <p>{this.state.contact.email}-{this.state.contact.name}</p>
                <Link to={`/contacts/edit/${this.state.contact._id}`}>Edit</Link>
                <button onClick={this.handleDelete}>delete</button>
                <Link to="/contacts">Back</Link>
            </div>
        )
    }
}
export default ContactShow