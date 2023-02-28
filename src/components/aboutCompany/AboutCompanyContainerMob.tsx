import { Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export default function AboutCompanyContainerMobile() {
    return (
        <Flex direction={"column"} textColor={"gray"} w={"95%"}>
            <Flex
                my={"60px"}
                direction={"column"}
                justify={"center"}
                align={"center"}
            >
                <Text textStyle={"Bold"} fontSize={"25px"}>
                    Sobre a 201Web
                </Text>
                <Text
                    textStyle={"Regular"}
                    fontSize={"15px"}
                    w={"90%"}
                    textAlign={"center"}
                >
                    Conheça um pouco mais sobre a 201Web
                </Text>
            </Flex>
            <Flex
                gap={"40px"}
                align={"center"}
                mb={"50px"}
                direction={"column"}
            >
                <Flex w={"90%"}>
                    <Image
                        src={"/Images/aboutImages/sobre201web.png"}
                        alt={"sobre201web"}
                    />
                </Flex>
                <Flex
                    w={"90%"}
                    direction={"column"}
                    textStyle={"Regular"}
                    fontSize={"18px"}
                    textAlign={"center"}
                    gap={"15px"}
                >
                    <Text>
                        A
                        <Text
                            as={"span"}
                            textStyle={"Bold"}
                            fontSize={"25px"}
                            mx={"5px"}
                            lineHeight={"1"}
                        >
                            201web
                        </Text>
                        é uma empresa que presta serviços de desenvolvimento web
                        de alta qualidade. Nós acreditamos que a presença
                        on-line é fundamental para o sucesso de qualquer
                        negócio, e por isso nos dedicamos a fornecer soluções
                        personalizadas e eficazes para nossos clientes.
                    </Text>
                    <Text as={"span"}>
                        Nossa equipe de
                        <Text
                            as={"span"}
                            textStyle={"Bold"}
                            fontSize={"25px"}
                            mx={"5px"}
                            lineHeight={"1"}
                        >
                            especialistas
                        </Text>
                        em tecnologia da informação é altamente qualificada e
                        experiente, e trabalha em estreita colaboração com
                        nossos clientes para entender suas necessidades e
                        fornecer soluções que atendam aos seus objetivos de
                        negócios. Nós usamos as últimas tecnologias e
                        ferramentas para garantir que nossos projetos sejam de
                        alta qualidade, seguros e escaláveis.
                    </Text>
                    <Text as={"span"}>
                        Nós acreditamos em
                        <Text
                            as={"span"}
                            textStyle={"Bold"}
                            fontSize={"25px"}
                            mx={"5px"}
                            lineHeight={"1"}
                        >
                            construir
                        </Text>
                        relacionamentos duradouros com nossos clientes, e nos
                        esforçamos para garantir que eles estejam sempre
                        satisfeitos com nossos serviços.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
