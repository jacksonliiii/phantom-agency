import React from "react";

const CareersPage = () => {
  return (
    <div>
      <h2 className='about-heading'>Careers</h2>
      <div className='careers-container'>
        <h2 className='careers-heading'>Join Our Team</h2>
        <div className='careers-job'>
          <h3 className='careers-job-title'>Internships</h3>
          <p className='careers-job-description'>
            Are you fascinated by the world of exorcists and phantoms? Our
            internship program offers a unique opportunity to follow experienced
            exorcists in a ride-along fashion. You'll learn the ropes, provide
            valuable support, and gain hands-on experience in the thrilling
            realm of exorcism.
          </p>
        </div>
        <div className='careers-job'>
          <h3 className='careers-job-title'>Corporate/Desk Job</h3>
          <p className='careers-job-description'>
            Looking for a role that focuses on logistics and corporate
            operations? Join our team in a variety of desk job positions where
            you'll play a crucial role in supporting our exorcists and ensuring
            the smooth functioning of our organization. From managing resources
            to coordinating missions, your contributions will be vital in
            maintaining our effectiveness and success.
          </p>
        </div>
        <div className='careers-job'>
          <h3 className='careers-job-title'>Exorcist</h3>
          <p className='careers-job-description'>
            Are you brave, skilled, and ready to face dangerous phantoms
            head-on? Become an exorcist and join the front lines in our battle
            against supernatural threats. As an exorcist, you'll possess unique
            powers and abilities to confront and banish spirits, ensuring the
            safety of our world. While the dangers are real, the rewards are
            high, including competitive pay and the opportunity to make a real
            difference in protecting humanity.
          </p>
        </div>
        <p className='careers-contact'>
          For more information or to apply, please reach out to us at{" "}
          <a href='mailto:careers@phantomagency.com' className='careers-email'>
            careers@phantomagency.com
          </a>
          .
        </p>
        <p className='careers-disclaimer'>
          * Please note that all positions require thorough training and
          screening. We prioritize the safety of our employees and the
          well-being of our clients.
        </p>
      </div>
    </div>
  );
};

export default CareersPage;
