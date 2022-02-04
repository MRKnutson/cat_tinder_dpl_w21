import { useContext } from "react";
import CatProvider, { CatContext } from "../providers/CatProvider";

const Cats = () => {
  const {x, y, setData, z, emailFromCatProvider} = useContext(CatContext);
  return(
    <div>
      <h1>Cats</h1>
      <p>X: {x}</p>
      <p>Y: {y}</p>
      <p onClick = {()=>setData({x: Math.random(), y: Math.random()})}>Change Data</p>
      <p onClick = {()=>z()}>Change Data</p>
      <p>emailFromCatProvider: {emailFromCatProvider}</p>
    </div>
  )
};

export default Cats;