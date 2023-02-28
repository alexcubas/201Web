import { Flex, useBreakpointValue } from "@chakra-ui/react";
import BlockMainContent from "../patterns/BlockMainContent";

export default function BlockCotainers() {
    const isWideVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xlg: false,
    });
    return (
        <Flex
            w={"100%"}
            justify={"space-between"}
            align={isWideVersion ? "center" : "center"}
            direction={isWideVersion ? "column" : "row"}
            gap={isWideVersion ? "50px" : "0px"}
            mt={isWideVersion ? "50px" : "0px"}
        >
            <BlockMainContent
                title="Landing Pages"
                text="Uma landing page é uma página projetada para capturar atenção do visitante. É simples, direta e com layout claro e de fácil navegação."
                image="/Images/blockImageMain1.png"
            />
            <BlockMainContent
                title="E-commerces"
                text=" Um e-commerce é uma plat aforma de venda online que facilita a compra e o pagamento de produtos e serviços através da Internet com uma interface intuitiva e clara"
                image="/Images/blockImageMain2.png"
            />
            <BlockMainContent
                title="Dashboards"
                text="É uma interface gráfica que apresenta informações relevantes em um formato fácil de ler e entender. Ela é usada para exibir métricas, dados e etc."
                image="/Images/blockImageMain3.png"
            />
        </Flex>
    );
}
