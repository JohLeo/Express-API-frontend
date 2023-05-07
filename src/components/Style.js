import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 30px 0;
`

export const StartBtn = styled.button`
  background-color:  #38c804;
  color: rgb(254, 223, 244);
  width: 280px;
  border: none;
  border-radius: 8px;
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 20px 5px 20px 5px;
`

export const BackBtn = styled.button`
  border: none;
  background-color: #38c604;
  color: #fedff4;
  border-radius: 20px;
  font-family: 'Jost', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  margin: 20px 0 10px 0;
  padding: 10px 20px 10px 20px;
`

export const OneParagraph = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 300;
  padding: 10px 18px 28px 18px;
`

export const OneH3 = styled.h3`
  margin: 0;
  font-size: 18px;
  padding: 0 0 8px 0;
  `

export const OneBike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(56, 198, 4);
  width: 300px;
  margin-top: 20px;
  border-radius: 4px;
`

export const PainImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 20px;
    margin-right: 15px;
`

export const DivRow = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
    margin-top: 4px;
`

export const ListAllBikes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(56, 198, 4);
    width: 250px;
    height: 70px;
    margin-top: 10px;
    border-radius: 4px;
`

export const ListParagraph = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
`

export const ListH3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  `

export const StillAlive = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgb(56, 198, 4);
    width: 250px;
    height: 80px;
    margin-top: 10px;
    border-radius: 4px;
`
