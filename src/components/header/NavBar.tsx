import { Text, Button } from "@chakra-ui/react";

type NavBarType = {
    scrollTo: any;
};

export default function NavBar({ scrollTo }: NavBarType) {
    return (
        <>
            <Text color="blue">Início</Text>
            <Text cursor={"pointer"} onClick={() => scrollTo("Sobre")}>
                Sobre nós
            </Text>
            <Text cursor={"pointer"} onClick={() => scrollTo("Quem somos?")}>
                Quem somos?
            </Text>
            <Text cursor={"pointer"} onClick={() => scrollTo("Contate-nos")}>
                Contate-nos
            </Text>
        </>
    );
}
