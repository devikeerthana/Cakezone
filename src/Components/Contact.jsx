import React, {useState} from 'react'
import './Contact.css'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent Successfully!');

     setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  };
  return (
    <>
      <section className='contact text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 my-5'>
              <h1>CONTACT</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='contact1 text-center my-5 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12 col-sm-7 col-md-6 '>
              <div className='contact-box'>
                <i className="contact-icons bi bi-geo-alt"></i>
                <h5 className='contact-h5'>OUR OFFICE</h5>
                <h6 className='contact-h6'>123 Street, New York, USA</h6>
              </div>
            </div>

            <div className='col-lg-4 col-12 col-sm-7 col-md-6 '>
              <div className='contact-box'>
                <i className="contact-icons bi bi-envelope"></i>
                <h5 className='contact-h5'>EMAIL US</h5>
                <h6 className='contact-h6'>info@example.com</h6>
              </div>
            </div>

            <div className='col-lg-4 col-12 col-sm-7 col-md-6 '>
              <div className='contact-box'>
                <i className="contact-icons bi bi-telephone"></i>
                <h5 className='contact-h5'>CALL US</h5>
                <h6 className='contact-h6'>+012 345 6789</h6>
              </div>
            </div>


            <div className="row justify-content-center mt-2">
              <div className="col-lg-8 col-md-10 col-12">
                
                  <form onSubmit={handleSubmit}>
                    <div className="row g-2">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name.."
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email.."
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control"
                          rows="5"
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn w-100 text-white fw-bolder py-3"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                
              </div>
            </div>
          </div>


        </div>
    </section >
    </>
  )
}

export default Contact
