import React from 'react'
import axios from '../../config/axios'

class Register extends React.Component{
    constructor() {
        super()
        this.state = {
            noticeMsg:'',
            username: '',
            email: '' , 
            password:''
        }
        this.emailChange = this.emailChange.bind(this)
        // this.handleSubmit=this.handleSubmit.bind(this)
    }

    userNameChange = (e) => {
        const username = e.target.value
        this.setState(()=>({username}))
    }
    emailChange (e) {
        const email = e.target.value
        this.setState(()=>({email}))
    }
    passwordChange = (e) => {
        const password = e.target.value
        this.setState(()=>({password}))
    }
    handleSubmit = (e) => {
       e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password:this.state.password
        }
        
      //  client side validation 
        axios.post('/users/register', formData)
            .then((response) => {
            
                this.setState(() => ({
                    noticeMsg: response.data.notice,
                    username: '',
                    email: '',
                    password:''
                }))
            })
            .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h2>Register with us</h2>
                {this.state.noticeMsg && <p>{this.state.noticeMsg}</p>}
                <form onSubmit={this.handleSubmit}>
                <label>
                    username<br/>
                    <input type="text" name="username" value={this.state.username} onChange={this.userNameChange}/><br/>
                </label>
                <label>
                    email<br/>
                    <input type="text" name="email" value={this.state.email} onChange={this.emailChange}/><br/>
                </label>
                <label>
                    password<br/>
                    <input type="password" value={this.state.password} onChange={this.passwordChange} /><br/>
                    </label>
                    <input type="submit" onChange={this.handleSubmit}/>
                </form>
            </div>
        )
    }
} 
export default Register