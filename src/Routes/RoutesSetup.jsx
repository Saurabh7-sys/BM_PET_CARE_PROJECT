import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Services from '../components/Services';
import HomeBoarding from '../pages/services/HomeBoarding';
import DogWalker from '../pages/services/DogWalker';
import PickupDrop from '../pages/services/PickupDrop';
import DogFood from '../pages/services/DogFood'
import PawSpa from '../pages/services/PawSpa';

const ServiceDetail = () => {
  const { title } = useParams();  
  let Component;

  switch (decodeURIComponent(title)) {
    case 'Home Boarding':
      Component = HomeBoarding;
      break;
    case 'Daily Dog Walker':
      Component = DogWalker;
      break;
    case 'Pick-Up & Drop-Off':
      Component = PickupDrop;
      break;
    case 'Homemade Dog Food':
      Component = DogFood;
      break;
    case 'PawSpa':
      Component = PawSpa;
      break;
    default:
      Component = () => <div>Service Not Found</div>;
      break;
  }

  return <Component />;
};

const RoutesSetup = () => {
  return (
    <Routes>
      <Route path="/services/:title" element={<ServiceDetail />} />
    </Routes>
  );
};

export default RoutesSetup;
