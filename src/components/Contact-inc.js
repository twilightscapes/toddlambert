import React from 'react'
import { navigate } from 'gatsby-link'
import { FaEnvelope } from 'react-icons/fa'
import { RiSendPlane2Line } from 'react-icons/ri'


// const Contact = class extends React.Component {
//   render() {
//     return (
     
//     )
//   }
// }

// export default Contact




function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }



  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
       .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      
      <div className="wrapper">
      <form
        className="contact-form"
        action="/thanks"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="masonry">
        <p>
          <label>
            <input type="text" name="name" placeholder="Name" required />
          </label>
        </p>
        <p>
          <label>
            <input type="email" name="email" placeholder="your@email.com" required />
          </label>
        </p>
        <p>
          <label>
            <input type="text" name="subject" placeholder="Subject" required />
          </label>
        </p>
        </div>
        
        <div>
        <p>
          <label>
            <textarea name="message" placeholder="Your Message" required></textarea>
          </label>
        </p>
        <p className="text-align-right" style={{marginRight:'60px', color:'#fff'}}>
          <button
            className="button"
            
            type="submit"
          >
            Send Message{" "}
            <span className="icon -right">
              <RiSendPlane2Line />
            </span>
          </button>
        </p>
        </div>
      </form>
    </div>
      
    )
  }
}