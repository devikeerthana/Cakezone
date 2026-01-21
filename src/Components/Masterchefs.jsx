import React from 'react'
import './Masterchefs.css'
import chef1 from '../assets/team-1.jpg'
import chef2 from '../assets/team-2.jpg'
import chef3 from '../assets/team-3.jpg'

const Masterchefs = () => {
  const chefs = [
    { name: "John Doe", designation: "Head Chef", image: chef1 },
    { name: "Micheal Lee", designation: "Pastry Expert", image: chef2 },
    { name: "Sarah Paul", designation: "Cake Designer", image: chef3 },
  ];

  return (
    <>
      <section className='master text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 mx-auto py-5'>
              <h1>MASTERCHEFS</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='master1 text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h4>Team Members</h4>
              <h1>OUR MASTER CHEFS</h1>
              <div className='title-underline'><span></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className='container py-5 text-center'>
        <div className='row justify-content-center g-4'>
          {chefs.map((chef, index) => (
            <div className='col-md-4 col-sm-6' key={index}>
              <div className='chef-card'>
                <div className='chef-img-container'>
                  <img src={chef.image} alt={chef.name} className='chef-img' />
                </div>
                <div className='chef-info'>
                  <h5 className='chef-name'>{chef.name}</h5>
                  <p className='chef-designation'>{chef.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Masterchefs
