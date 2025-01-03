import React from 'react';
import Image from '../image/Text1.jpg'
import Images1 from '../image/Text3.jpg'
import Images2 from '../image/Text4.jpg'
import Images3 from '../image/Tast5.jpg'
import Images4 from '../image/Text6.jpg'
import Images5 from '../image/Test2.mp4'


const Test = () => {
  return (
    <div className="containers">
      <Header />
      <Section
        title="Learn by Doing"
        description="Become a Super-Hero with a fully integrated, new-age learning platform with multi-lingual programming features in a seamless execution environment, bringing you close to the real world with assistance to solve every question with hints, test cases, video explanations, and solutions. All in one workspace with no installation or setup time."
        imageSrc={Image}
      />
      <Section
         imageSrc={Images5}
        title="Learn by Visualizing"
        description="Learn in a fun & faster way with our highly engaging visual videos connecting to real-world problem scenarios, providing an in-depth conceptual understanding. Step-by-step code walkthrough helps you visualize what happens in the computer memory with each and every line of code execution."
        
      />
      <Section
        title="Time - Space Complexity Analysis"
        description="Become a Super-Hero with a fully integrated, new-age learning platform with multi-lingual programming features in a seamless execution environment bringing you close to the real world with assistance to solve every question with hints, test cases, video explanations, and solutions. All in one workspace with no installation or setup time."
        imageSrc={Images1}
      />
      <Section
        title="Rich performance analytics"
        description="With performance analytics, you can see the strengths, weaknesses, and progress with unmatched clarity. Individual and topic-level insights help you discover the areas of improvement from time to time. Get awarded with points, badges, and rank up against other candidates."
        imageSrc={Images2}
      />
      <Section
        title="Industry recognized certification"
        description="Accelerate your career by earning an industry-recognized professional certification. With over 100,000+ professionals empowered, TERV certifications are recognized by the industry’s top employers. Certifications are awarded upon completion of our hand-picked courses."
        imageSrc={Images3}
      />
      <Section
        title="Job Support & vast employer network"
        description="Don’t settle. Our global community of hiring partners includes the best companies across a range of hot industries. You get to engage with potential employers ahead of completion through 1-1 mock interviews with feedback sessions and frequent networking sessions."
        imageSrc={Images4}
      />
    </div>
  );
};

const Header = () => (
  <header className="header">
    
    <h1>codub</h1>
  </header>
);

const Section = ({ title, description, imageSrc }) => (
  <div className="section">
    <img src={imageSrc} alt={title} className="section-image" />
    <div className="section-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default Test;