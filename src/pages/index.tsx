import AboutContainer from "@/components/about/AboutContainer";
import AboutCompanyContainer from "@/components/aboutCompany/AboutCompanyContainer";
import AboutCompanyContainerMobile from "@/components/aboutCompany/AboutCompanyContainerMob";
import FooterContainer from "@/components/footer/FooterContainer";
import FooterContainerMobile from "@/components/footer/FooterContainerMob";
import HeaderComponent from "@/components/header/HeaderComponent";
import BlockCotainers from "@/components/mainContent/BlockContainers";
import MainContent from "@/components/mainContent/MainContent";
import MainContentMobile from "@/components/mainContent/MainContentMob";
import MethodContainer from "@/components/method/methodContainer";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { scroller } from "react-scroll";

export default function Home() {
    const isWideVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: true,
        xlg: false,
    });
    const versionMob = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xlg: false,
    });
    function scrollTo(className: string) {
        console.log("entroue aq", className);
        scroller.scrollTo(className, {
            duration: 0,
            delay: 0,
            smooth: "easeInOutQuad",
        });
    }
    return (
        <Flex align={"center"} bg={"#F1EFEF"} direction={"column"}>
            <Flex
                w={"90%"}
                direction={"column"}
                h={isWideVersion ? "100%" : "100vh"}
            >
                <Flex direction={"column"}>
                    <HeaderComponent scrollTo={scrollTo} />
                    {versionMob ? (
                        <MainContentMobile scrollTo={scrollTo} />
                    ) : (
                        <MainContent scrollTo={scrollTo} />
                    )}
                </Flex>
            </Flex>
            <Flex w={"90%"} className={"Conhecer"}>
                <BlockCotainers />
            </Flex>
            <Flex bg={"white"} w={"100%"} mt={"80px"}>
                <MethodContainer />
            </Flex>
            <Flex bg={"white"} w={"100%"} className={"Sobre"}>
                <AboutContainer />
            </Flex>
            <Flex
                bg={"white"}
                w={"100%"}
                justify={"center"}
                className={"Quem somos?"}
            >
                {versionMob ? (
                    <AboutCompanyContainerMobile />
                ) : (
                    <AboutCompanyContainer />
                )}
            </Flex>
            <Flex w={"100%"} className={"Contate-nos"}>
                {versionMob ? <FooterContainerMobile /> : <FooterContainer />}
            </Flex>
        </Flex>
    );
}
