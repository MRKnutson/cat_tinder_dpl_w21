// Context API = consumer (useContext hook) get data, Provider - providedata
import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from './AuthProvider';

export const CatContext = React.createContext();

// Don't need this is using useContext hook but will need for class component
export const CatConsumer = CatContext.Consumer;

// This will wrap my app in index.js
const CatProvider = (props) => {
  const [data, setData]= useState({x:1, y:2})

  let {email} = useContext(AuthContext)
  useEffect(()=>{
    console.log('mounted')
    console.log('user email: ', {email})
  },[]);

  const randData = () => {
    setData({x: Math.random(), y: Math.random()})
  };

  return (
    <CatContext.Provider value = {{...data, setData, z: randData, emailFromCatProvider: email}}>
      {props.children}
    </CatContext.Provider>
  )
};

export default CatProvider