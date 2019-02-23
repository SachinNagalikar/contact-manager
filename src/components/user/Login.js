import React from 'react'
import axios from '../../config/axios';
import {Redirect} from 'react-router-dom'

class Login extends React.Component{
    constructor() {
        super()
        this.state = {
            email: '', 
            password: '',
            redirectList:false
        }
       // this.handleChange=this.handleChange.bind(this)
        this.emailChange = this.emailChange.bind(this)
        //this.passwordChange = this.passwordChange.bind(this)
    
    }
    // handleChange(e) {
    //     e.persist()
    //     this.setState(() => ({
    //         [e.target.name]:e.target.value
    // }))
    // }
    
    emailChange (e) {
        const email = e.target.value
        this.setState(()=>({email}))
    }
    passwordChange = (e) => {
        const password = e.target.value
        this.setState(() => ({ password }))
    }

    handleSubmit=(e)=> {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password:this.state.password
        }
        console.log(formData)
        axios.post('/users/login', formData)
            .then((response) => {
               
                const {token
            } = response.data
                
                localStorage.setItem('token', token)
                this.props.history.push('/contacts')
                
            })
            .catch((err) => {
            console.log(err)
        })
}



    render() { 
        if (this.state.redirectList) {
            return <Redirect to='/contacts' />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h2>login</h2>
                <label>
                    email <br/>
                    <input type="text" name="email" value={this.state.email} onChange={this.emailChange}/><br/>
                </label>
                <label>
                    password<br/>
                    <input type="password" value={this.state.password} onChange={this.passwordChange} /><br/>
                    </label>
                    <input type="submit" onChange={this.handleSubmit} />
                    </form>
            </div>
        )
    }
} 
export default Login