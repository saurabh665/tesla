import React from 'react';
import styled from 'styled-components';
import Section from './Section';


const Home = () => {
  return (
    <Container>
      <Section title="Model S" 
      descrption="Order Online For Touchless Delivery"
      backgroundImg="model-s.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
      <Section title="Model Y" 
      descrption="Order Online For Touchless Delivery"
      backgroundImg="model-y.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
      <Section title="Model 3" 
      descrption="Order Online For Touchless Delivery"
      backgroundImg="model-3.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
      <Section title="Model X" 
      descrption="Order Online For Touchless Delivery"
      backgroundImg="model-X.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
      <Section
      title="Lowest Cost Solar Panel in America" 
      descrption="Money back gurantee"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Custom order"
      rightBtnText="Learn more"
      />
      <Section
      title="Solar for New Roofs" 
      descrption=""
      backgroundImg="solar-panel.jpg"
      leftBtnText="Custom order"
      rightBtnText="Learn more"
      />
      <Section
      title="Accessories" 
      descrption=""
      backgroundImg="accessories.jpg"
      leftBtnText="Shop Now"
      
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
