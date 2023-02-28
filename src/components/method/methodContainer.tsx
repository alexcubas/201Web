import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import MethodComponentLeft from "./MethodComponentLeft";
import MethodComponentRight from "./MethodComponentRight";
import MethodComponentRightMob from "./MethodComponentRightMob";

export default function MethodContainer() {
    const versionMob = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xlg: false,
    });
    return (
        <Flex w={"100%"} direction={"column"}>
            <Flex
                direction={"column"}
                textAlign={"center"}
                justify={"center"}
                align={"center"}
                w={"100%"}
                gap={"10px"}
                h={"300px"}
            >
                <Text
                    textStyle={"Bold"}
                    fontSize={versionMob ? "25px" : "40px"}
                    color={"gray"}
                    w={versionMob ? "80%" : "100%"}
                >
                    Veja como funciona nosso processo de criação
                </Text>
                <Text
                    textStyle={"Regular"}
                    fontSize={versionMob ? "15px" : "25px"}
                    color={"gray"}
                    w={versionMob ? "80%" : "40%"}
                >
                    Através de quatro pequenas etapas conseguimos definir suas
                    necessidades, como soluciona-las e enfim tirar as mesmas do
                    papel
                </Text>
            </Flex>
            <MethodComponentLeft
                image="/Images/methodImages/BriefingImage.png"
                title="Briefing"
                text="Marcamos uma reunião para definirmos suas necessidades, suas dúvidas e quais as melhores soluções web para o seu negócio"
            />
            {versionMob ? (
                <MethodComponentRightMob
                    image="/Images/methodImages/PropostaImage.png"
                    title="Proposta comercial"
                    text="Após entender suas necessidades e como podemos lhe ajudar, elaboramos uma proposta comercial de acordo com o objetivo do seu projeto."
                />
            ) : (
                <MethodComponentRight
                    image="/Images/methodImages/PropostaImage.png"
                    title="Proposta comercial"
                    text="Após entender suas necessidades e como podemos lhe ajudar, elaboramos uma proposta comercial de acordo com o objetivo do seu projeto."
                />
            )}
            <MethodComponentLeft
                image="/Images/methodImages/ConteudoImage.png"
                title="Conteúdo"
                text="Se a proposta comercial for aprovada, passamos pelo processo de separar todos os conteúdos que irão para o seu projeto web, como logos, identidade visual, textos, videos e imagens."
            />
            {versionMob ? (
                <MethodComponentRightMob
                    image="/Images/methodImages/DesenvolvimentoImage.png"
                    title="Desenvolvimento"
                    text="Essa é a etapa em que deixamos seu projeto tangível, onde transportamos todo o conteúdo fornecido por você para o código, utilizando as tecnologias mais avançadas de programação"
                />
            ) : (
                <MethodComponentRight
                    image="/Images/methodImages/DesenvolvimentoImage.png"
                    title="Desenvolvimento"
                    text="Essa é a etapa em que deixamos seu projeto tangível, onde transportamos todo o conteúdo fornecido por você para o código, utilizando as tecnologias mais avançadas de programação"
                />
            )}
        </Flex>
    );
}
