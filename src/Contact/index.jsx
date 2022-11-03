import React, { useState } from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [mobile, setMobile] = useState("")
  const [error, setError] = useState("")
  const [msg, setMsg] = useState("")
  const onSubmit = () => {
    if (name && email && mobile && message) {
      let serviceId = "service_z0f9hio"
      let templateId = "template_lzr0vbf"
      let templateParams = {
        name, email, mobile, message
      }
      let userId = "ojCnVsuoC2OwX3eS0"
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => {
          setMsg('Message sent, will contact you soon!')
          setTimeout(() => {
            setMsg("")
            setEmail("")
            setMessage("")
            setMobile("")
            setName("")
          }, 2000);
        })
        .then(error => console.log(error));
    } else {
      setError('Please fill all the details')
      setTimeout(() => {
        setError("")
      }, 2000);
    }
  }
  return (
    <>
      <div class="container-fluid overflow-hidden my-5 px-lg-0">
        <div class="container quote px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div
              class="col-lg-6 quote-text"
              data-parallax="scroll"
              data-image-src={require("../img/carousel-1.jpg")}
            >
              <div
                class="h-100 px-4 px-sm-5 ps-lg-0 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <h1 class="text-white mb-4">
                  Contact Us
                </h1>
                <p class="text-light mb-5">
                  Please leave a message so we can contact you.
                </p>
              </div>
            </div>
            <div
              class="col-lg-6 quote-form"
              data-parallax="scroll"
              data-image-src={require("../img/carousel-2.jpg")}
            >
              <div
                class="h-100 px-4 px-sm-5 pe-lg-0 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div class="bg-white p-4 p-sm-5">
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="gname"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          name="Name"
                        />
                        <label for="gname">Your Name</label>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="gmail"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="gmail">Your Email</label>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="cname"
                          placeholder="Mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                        <label for="cname">Your Mobile</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          style={{ height: "80px" }}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary py-3 px-5" type="submit" onClick={() => onSubmit()}>
                        Send a Message
                      </button>
                    </div>
                    {error && <span style={{ color: "red" }} >{error}</span>}
                    {msg && <span style={{ color: "green" }} >{msg}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
