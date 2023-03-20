import phoneLogic from "@/helpers/phoneLogic";
import {
    Flex,
    Text,
    Button,
    Image,
    useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

type MainContentType = {
    scrollTo: any;
};

export default function MainContent({ scrollTo }: MainContentType) {
    const isWideVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xlg: false,
    });

    const textAlign = isWideVersion ? "center" : "start";

    const defaultAlign = {
        base: "center",
        sm: "center",
        md: "center",
        lg: "start",
        xlg: "start",
    };

    const styleTypeAnimation = {
        fontSize: "50px",
        width: "700px",
        fontFamily: "Poppins",
        color: "#657EFF",
        fontWeight: "700",
        textAlign,
    };

    const controls = useAnimation();
    const controlsImage = useAnimation();
    const controlsImage1 = useAnimation();
    useEffect(() => {
        controls.start({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.6,
                delay: 0.3,
                ease: [0, 0.3, 0.6, 1.0],
            },
        });
        controlsImage.start({
            y: [0, 10, 0, -10, 0],
            x: [0, -10, 0, -10, 0],
            transition: {
                duration: 8,
                ease: "easeOut",
                times: [0, 0.3],
                repeat: Infinity,
                repeatDelay: 1,
            },
        });
        controlsImage1.start({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.6,
                delay: 0.3,
                ease: [0, 0.3, 0.6, 1.0],
            },
        });
    });

    return (
        <Flex>
            <Flex
                w={isWideVersion ? "100%" : "50%"}
                direction={"column"}
                mt={isWideVersion ? "0px" : "150px"}
                align={isWideVersion ? "center" : "start"}
            >
                <Flex
                    as={motion.div}
                    animate={controlsImage}
                    display={{
                        base: "flex",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                        xlg: "none",
                    }}
                >
                    <Image
                        w={{ base: "300px", sm: "500px", md: "600px" }}
                        h={{ base: "300px", sm: "500px", md: "600px" }}
                        alt={"Website-Creator image"}
                        src="Website-Creator.png"
                    />
                </Flex>
                <Flex
                    h={"150px"}
                    as={motion.div}
                    direction={"column"}
                    initial={{ y: 150, opacity: 0 }}
                    animate={controls}
                >
                    <TypeAnimation
                        sequence={[
                            "Soluções criativas para seus problemas web!",
                            2000,
                            () => {},
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        speed={30}
                        style={
                            isWideVersion
                                ? {
                                      fontSize: "50px",
                                      width: "700px",
                                      fontFamily: "Poppins",
                                      color: "#657EFF",
                                      fontWeight: "700",
                                      textAlign: "start",
                                  }
                                : {
                                      fontSize: "50px",
                                      width: "700px",
                                      fontFamily: "Poppins",
                                      color: "#657EFF",
                                      fontWeight: "700",
                                      textAlign: "center",
                                  }
                        }
                    />
                </Flex>

                <Flex
                    as={motion.div}
                    direction={"column"}
                    initial={{ y: 150, opacity: 0 }}
                    animate={controls}
                    align={{
                        base: "center",
                        sm: "center",
                        md: "center",
                        lg: "flex-start",
                        xlg: "flex-start",
                    }}
                >
                    <Text
                        w={"600px"}
                        textStyle={"Regular"}
                        fontSize={"20px"}
                        textColor={"gray"}
                        textAlign={{
                            base: "center",
                            sm: "center",
                            md: "center",
                            lg: "start",
                            xlg: "start",
                        }}
                    >
                        Soluções pra você ou para o seu negócio utilizando as
                        mais novas tecnologias de programação disponíveis no
                        mercado.
                    </Text>
                    <Button
                        borderRadius={"20px"}
                        bg={"blue"}
                        textColor={"white"}
                        w={"450px"}
                        h={"62px"}
                        fontSize={"25px"}
                        mt={"40px"}
                        mb={"20px"}
                        onClick={() => scrollTo("Conhecer")}
                    >
                        Quero conhecer mais!
                    </Button>
                    <Button
                        borderRadius={"20px"}
                        border={"2px solid #657EFF"}
                        textColor={"blue"}
                        w={"450px"}
                        h={"62px"}
                        fontSize={"25px"}
                        onClick={() => phoneLogic()}
                    >
                        Quero falar pelo WhatsApp
                    </Button>
                </Flex>
            </Flex>
            <Flex
                as={motion.div}
                animate={controlsImage1}
                initial={{ y: 150, opacity: 0 }}
            >
                <Flex
                    mt={"50px"}
                    as={motion.div}
                    animate={controlsImage}
                    display={{
                        base: "none",
                        sm: "none",
                        md: "none",
                        lg: "flex",
                        xlg: "flex",
                    }}
                >
                    <Image
                        w={isWideVersion ? "600px" : "750px"}
                        h={isWideVersion ? "600px" : "750px"}
                        alt={"Website-Creator image"}
                        src="Website-Creator.png"
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
