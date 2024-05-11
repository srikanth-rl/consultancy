import styled from "./about.module.css";
const about = () => {
  return (
    <div className={styled.box}>
      <div className={styled.container}>
        <h2>About Us</h2>

        <div className={styled.mission}>
          <h3>Our Mission</h3>
          <p>At United Aqua Tec, our mission is to provide safe, high-quality RO (Reverse Osmosis) water solutions while promoting sustainability and environmental responsibility. We aim to ensure that every customer has access to pure, clean water, regardless of where they live. Through constant innovation and a dedication to excellence, we strive to exceed expectations and contribute positively to the health and well-being of our community.


          </p>
        </div>

        <div className={styled.history}>
          <h3>Our History</h3>
          <p>United Aqua Tec was founded in 2011 with a vision to address the growing demand for clean drinking water. What began as a small operation with a handful of dedicated individuals has grown into a leading provider of RO water services in the region. Over the past 13 years, we have continually refined our processes, embraced new technologies, and expanded our reach, all while maintaining our commitment to quality and customer satisfaction.



          </p>
          <p>
          In the early years, we faced significant challenges as we worked to establish our name in a competitive market. However, our resilience, dedication, and focus on customer needs allowed us to overcome these hurdles. Today, we are proud to serve thousands of households and businesses, providing them with reliable, pure water that meets the highest industry standards.
            
          </p>
        </div>

        <div className={styled.team}>
          <h3>Meet Our Team</h3>
          <p>Our team is the driving force behind United Aqua Tec's success. From our skilled engineers and water quality experts to our customer service representatives and delivery personnel, each member plays a crucial role in our operations. We believe in fostering a collaborative and inclusive work environment, where every team member feels valued and has the opportunity to grow.


          </p>
          <p>
          Our team is passionate about what they do, whether it's ensuring our RO systems are operating efficiently or delivering water to your doorstep with a smile. We regularly invest in training and development to keep our staff updated on the latest industry trends and best practices. This commitment to continuous learning helps us maintain our high standards and deliver exceptional service to our customers.
          </p>
          <p>At United Aqua Tec, we value transparency and open communication, both within our team and with our customers. We welcome feedback and use it as a tool for improvement, ensuring that we continue to meet and exceed your expectations.


          </p>
        </div>
      </div>
    </div>
  );
};
export default about;
