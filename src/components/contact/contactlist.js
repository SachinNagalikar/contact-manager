import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios';
class ContactList extends React.Component{
    constructor() {
         super() 
        this.state = {
            contacts:[] 
        }
    }
    componentDidMount() {
        axios.get('/contacts', {
            headers: {
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log(response.data)
                this.setState(() =>({
                    contacts:response.data
                }))
            })
            .catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <h2>listing Contacts-{this.state.contacts.length}</h2>
                <ul>
                    {this.state.contacts.map((contact) => {
                        return <li key={contact._id}><Link to={`/contacts/${contact._id}`} >{contact.name}</Link>-{contact.mobile}</li>
                    })}
                </ul>
                <Link to='/contacts/new'>Add Contact</Link>
            </div>
        )
    }
}
export default ContactList