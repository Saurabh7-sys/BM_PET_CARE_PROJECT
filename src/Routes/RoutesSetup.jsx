import React from 'react';
import { useParams } from 'react-router-dom';
import HomeBoarding from '../pages/services/HomeBoarding';
import DogWalker from '../pages/services/DogWalker';
import PickupDrop from '../pages/services/PickupDrop';
import PawSpa from '../pages/services/PawSpa';
import DogFood from '../pages/services/DogFood';

const ServiceDetail = () => {
  const { title } = useParams();
  let Component;

  const decodedTitle = decodeURIComponent(title);

  switch (decodedTitle) {
    case 'Home Boarding':
      Component = HomeBoarding;
      break;
    case 'Daily Dog Walker':
      Component = DogWalker;
      break;
    case 'Pick-Up & Drop-Off':
      Component = PickupDrop;
      break;
    case 'PawSpa':
      Component = PawSpa;
      break;
    case 'Homemade Dog Food':
      Component = DogFood;
      break;
    default:
      Component = () => <div>Service Not Found</div>;
      break;
  }

  return <Component />;
};

export default ServiceDetail;
