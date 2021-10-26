import  React, { useState} from "react";
import { SwitchContainer, SwitchWrapper, SwitchBGC, SwitchButton } from "./elements";

const Switch = (props) => {
    const [position, setPosition] = useState(false)
    const changePosition = () => {
        setPosition(!position);
    }
    const changeTheme = () => {
        if(props.theme === "light"){
            props.setTheme("dark")
            changePosition()
        }else{
            props.setTheme("light")
            changePosition()
        }
    }
    return (
        <SwitchContainer>
            <SwitchWrapper>
                <SwitchBGC>
                    <SwitchButton
                        onClick={()=> changeTheme()}
                        position={ position}>
                    </SwitchButton>
                </SwitchBGC>
            </SwitchWrapper>
        </SwitchContainer>
    )
}
export default Switch;