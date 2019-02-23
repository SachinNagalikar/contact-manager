import React from 'react'
import ContactForm from './ContactForm';
import axios from '../../config/axios';
class ContactEdit extends React.Component{
    constructor() {
        super()
        this.state = {
            contact: {},
            isloaded:false
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        
        axios.get(`/contacts/${id}`, {
            headers: {
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log(response)
                const contact = response.data
                this.setState(()=>({contact,isloaded:true}))
            })
            .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h2>Edit Contact</h2>
                {console.log(this.state)}
                {this.state.isloaded &&
                    <ContactForm name={this.state.contact.name} email={this.state.contact.email} mobile={this.state.contact.mobile}
                        handleContactSubmission={this.handleContactSubmission} />
                }
            </div>
        )
    }
}
export default ContactEdit