import { Container, Grad } from "./styles";
import { StyleSheet } from "react-native";
import { TitleButton } from "./styles";

interface IButton {
    title: string;
    onPress: () => void;
}

export const Button = ({ title, onPress }: IButton) => {
    return (
        <Container onPress={onPress}>
            <Grad
                style={styles.view}
                colors={['#012E40', '#024959', '#026773', '#3CA6A6']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <TitleButton>{title}</TitleButton>
            </Grad>
        </Container>
    );
};

const styles = StyleSheet.create({
    view: {
        elevation: 5,
    },
});
