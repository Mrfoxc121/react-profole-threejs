import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Shoe from "./Shoe";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: #fff;
  color: #000;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.4;
  border-radius: 8px;
  position: absolute;
  top: 100px;
  left: 900px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Shoe />
        </Stage>

        <OrbitControls enableZoom={false}/>
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a marketing success.
      </Desc>
    </>
  );
};

export default ProductDesign;
