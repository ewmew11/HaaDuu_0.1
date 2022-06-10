import styled from "styled-components";
export default function TextSection() {
  return (
    <Wrapper>
      <Title className="font-link">HaaDuu</Title>
      <Description className="font-link">Metaverse</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: auto;
  max-height: auto;
  height: 50%;
  font-style: "Orbitron", sans-serif;
  gap: 10px;
  text-align: center;
  margin: 0 auto;
  padding: 50px 10px 10px;
`;
const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: "Orbitron", sans-serif;
  font-weight: bold;
  font-size: 40px;
`;

const Description = styled.p`
  max-width: 240px;
  color: rgba(255, 255, 255, 0.7);
  font-style: "Orbitron", sans-serif;
  font-weight: normal;
  font-size: 17px;
  line-height: 10%;
  margin: 0 auto;
`;
