import styled from 'styled-components';


export const Container = styled.li`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    margin: 0 1rem;    
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.9);
    margin-bottom: 24px;
`;

export const Pcpic = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
   max-width: 100%;
   height: 100%;
   max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
`;