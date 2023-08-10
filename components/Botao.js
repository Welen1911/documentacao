import { Button } from "react-native"

export const Botao = ({children}) => {
    return (
        <>
            <Button title={children} style={{
                backGroundColor: "black",
                color: "white"
            }}></Button>
        </>
    )
}