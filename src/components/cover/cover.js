import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { CoverContainer, CoverWrapper, InfoContainer, CustomButton} from "./elements";

const cover = (props) => {
    let icon = props.theme === "light"? <FaSun/> : <FaMoon/>;
    let leyenda = props.theme === "light"? "Light Mode": "Dark Mode";
    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                         {icon}
                        <h1>Hello, I'm in</h1>
                        <h1>{ leyenda }</h1>
                        <CustomButton>Get estarted</CustomButton>
                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>
        </>
    )
}
export default cover;