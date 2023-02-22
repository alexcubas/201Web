import AboutContainer from "@/components/about/AboutContainer";
import AboutCompanyContainer from "@/components/aboutCompany/AboutCompanyContainer";
import FooterContainer from "@/components/footer/FooterContainer";
import HeaderComponent from "@/components/header/HeaderComponent";
import BlockCotainers from "@/components/mainContent/BlockContainers";
import MainContent from "@/components/mainContent/MainContent";
import MethodContainer from "@/components/method/methodContainer";
import { Flex } from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex align={"center"} bg={"#F1EFEF"} direction={"column"}>
            <Flex w={"90%"} direction={"column"} h={"100vh"}>
                <Flex direction={"column"}>
                    <HeaderComponent />
                    <MainContent />
                </Flex>
            </Flex>
            <Flex w={"90%"}>
                <BlockCotainers />
            </Flex>
            <Flex bg={"white"} w={"100%"} mt={"80px"}>
                <MethodContainer />
            </Flex>
            <Flex bg={"white"} w={"100%"}>
                <AboutContainer />
            </Flex>
            <Flex bg={"white"} w={"100%"} justify={"center"}>
                <AboutCompanyContainer />
            </Flex>
            <Flex w={"100%"}>
                <FooterContainer />
            </Flex>
        </Flex>
    );
}
