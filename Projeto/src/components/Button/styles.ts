import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.TouchableOpacity`
    height: 60px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center; /* Adicionado para centralizar o Grad */
`;

export const Grad = styled(LinearGradient)`
    height: 100%; /* Corrigido: estava escrito "heigth" */
    width: 100%;  /* Corrigido: estava escrito "widht" */
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleButton = styled.Text`
    color: #FFF;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
`;
