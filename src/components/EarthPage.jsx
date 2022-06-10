import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Background from "./images/bg.jpg";
import Earth from './Earth';
import TextSection from './TextSection';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function EarthPage() {
  return (
    <div style={{ backgroundImage: `url(${Background})`, height:'100vh',
           backgroundSize: 'cover',
           position: 'initial',
           backgroundRepeat: 'no-repeat'}}>
       <Wrapper className="Home" >  
       <TextSection />     
         <CanvasContainer>
           <Canvas className="canvas">
             <OrbitControls rotateSpeed={0.5} enableZoom={false} autoRotate={true} />
             <ambientLight intensity={0.5} />
             <directionalLight position={[3, 5, 2]} />
             <Suspense fallback={null}>     
               <Earth />
             </Suspense>        
           </Canvas>       
         </CanvasContainer>       
       </Wrapper></div>
  );
}

const Wrapper = styled.div`
position: relative
;

canvas {
  height: 550px;
}
`;


export default EarthPage;
