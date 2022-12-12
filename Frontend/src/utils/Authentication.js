import { Navigate } from 'react-router-dom';

export const Authentication = (component) => {
  if(!localStorage.getItem('UserData')){
        return<div><Navigate to="/login" /></div> ;

  }
  
  return component;
};
