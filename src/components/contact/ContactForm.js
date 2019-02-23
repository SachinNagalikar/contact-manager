import React from 'react'

class ContactForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: props.name ?props.name:'',
            email:props.email?props.email:'',
            mobile:props.mobile?props.mobile:''
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    //to be es6 arrow function based
    handleName = (e) => {
        const name = e.target.value
        this.setState(()=>({name}))
    }
    handleEmail(e) {
        const email = e.target.value
        this.setState(()=>({email}))
    }
    //bind in inline event handler
    handleMobile(e) {
        const mobile = e.target.value
        this.setState(()=>({mobile}))
    }
    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            name: this.props.contact.name,
            email: this.props.contact.email,
            mobile:this.props.contact.mobile
        }
        console.log(formData)
        this.props.handleContactSubmission(formData)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name<br/>
                        <input type="text" value={this.state.name} onChange={this.handleName}/>
                    </label><br />
                    <label>
                        email<br/>
                        <input type="text" value={this.state.email} onChange={this.handleEmail}/>
                    </label><br />
                    <label>
                        mobile<br/>
                        <input type="text" value={this.state.mobile} onChange={this.handleMobile.bind(this)}/>
                    </label><br />
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }   
}
   export default ContactForm