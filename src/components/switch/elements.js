import styled from "styled-components";

export const SwitchContainer = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.bgc};
    transition: 0.5s all ease-in;
`;

export const SwitchWrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
`;

export const SwitchBGC = styled.div`
    position: relative;
    width: 90px;
    height: 40px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.toggle};
    transition: 1s all ease-in;
`;
export const SwitchButton = styled.div`
    position: absolute;
    cursor: pointer;
    bottom: 5px;
    left: ${({position}) => position? "5px": "55px" };
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    transition: .3s all ease-in;
    outline: none;
`;