import styled from 'styled-components'

const RowCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex:1;
    align-items: flex-start;
    justify-items: space-between;
    justify-content: space-between;
    /* background-color:#E2E7E6FA ; */
    height:fit-content;
    border-radius:3% 3% 3% 3%;
`;
const ColCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
    height: auto;
    min-width: ${props=>props.width};
    margin: 1%;
    margin-bottom: 5%;
    padding-bottom:1%;
    background-color:#E2E7E6FA ;
    border-radius:1% 1% 1% 1%;
    
`;

export {ColCard,RowCard};