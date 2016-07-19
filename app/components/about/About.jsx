import React from 'react';

const About = () => (
  <div className="space-top nine columns componentContainer row animated fadeIn">
    <h3>About us</h3>
    <div>
      <p>
        The internet of things (IoT) is a network of
        physical objects, embedded with software, sensors, actuators and
        most importantly, network connectivity. <b>New reactions</b>  is a
        way to interact with technology that
        surrounds our physical and digital space.
        We believe in the power of distance and
        detachment, where someone can control
        a certain aspect of their lives, without being
        attached to it.  This project was born out of admiration of <b>IFTTT’s</b>  brilliant
        approach to automation -- paying homage while innovating on the concept. Here, we harness
        the power of technology to transform
        actions into reactions.
      </p>
    </div>
    <div className="six columns">
      <div>
        <p className="bio">
          Esther is a graduate of the Art Institute of San Francisco -- she combines
          the artistic sense of a designer with sound software engineering to create beautiful yet
          functional UI with frameworks such as React.
        </p>
        <span className="divider" /></div>
      <div>
        <p className="bio">
          Ali is a former-Marine and graduated from CSU-Dominguez Hills -- he is adept at
          solving complex technical challenges with technologies such as Docker and Nodal.
        </p>
        <span className="divider" />
      </div>
    </div>
    <div className="five columns">
      <div>
        <p className="bio">
          Nam studied electrical engineering at the University of Washington and is excited
          about the future of Node.js and IoT -- he thrives at the intersection of people,
          the Internet, and smart devices.
        </p>
        <span className="divider" />
      </div>
      <div>
        <p className="bio">
          Matt is as a seasoned web engineer, and excels at architecting and building scalable
          back-ends for web applications while also prioritizing the needs of the end user.
        </p>
        <span className="divider" />
      </div>
    </div>
  </div>
);
export default About;
