import styled from "styled-components";
 
export const Box = styled.div`
    padding: 5% 2.5%;
    background: #005ea2;
    // position: absolute;
    bottom: 0;
    width: 100%;
 
    @media (max-width: 1000px) {
        // padding: 70px 30px;
    }
`;
 
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
    margin-left: 150px ;
    
    
`;
 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 5px;
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 10px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        );
    }
`;
 
export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 10px;
    text-decoration: none;
 
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

export const img = styled.image`
color: #fff;
    margin-bottom: 20px;
   
    text-decoration: none;
 
    
`


export const Heading = styled.p`
    font-size: 15px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: none;
`;
export const h1 = styled.p`
    font-size: 20px;
    margin-top: 100px;
    margin-bottom: 10px;
    font-weight: none;
`;