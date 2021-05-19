import styled from 'styled-components';



export const ImageContainer = styled.div`
text-align: center;
margin: 150px 0

&:h1 {
    margin-bottom:64px
}
`;

export const ImageGrid = styled.div`
   display: grid;
   grid-gap: 10px;
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   grid-auto-rows: minmax(50px, auto);
   margin: 0 auto;
   width: 100%;
   max-width: 1000px;
   padding: 0 32px;

`;



export const CardsImage = styled.img`
margin-bottom: 24px;
display: flex;
flex-wrap: wrap;
margin-top: 24px;

img{
    width:100%;
    height:100%
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%
    }
}

&:hover{
    box-shadow:0 16px 32px 0 rgba(103,151,151, 0.966);
    transform: scale(1.1);
    transition: 0.6s all ease !important; 
    cursor: pointer;
}

&:nth-child(5) {
    grid-column-end: span 2;
}

&:nth-child(9) {
    grid-row-start: 4;
    grid-column-end: span 2;
}
`;