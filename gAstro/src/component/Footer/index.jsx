import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  Textarea,
  Button,
  ButtonGroup,
  GridItem,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import "./Footer.css";
import astroLogo from "../../assets/footericon.svg";
import pytm from "../../assets/pytm.svg"; // changed capital P to small p to fix dp issue!!
import razorpay from "../../assets/razorpay.svg";

import strip from "../../assets/strip.svg";

export default function Footer() {
  return (
    <Box
      className="footer_container"
      width={"100%"}
      bgColor={" #BD5300"}
      color={" #F8F8F8"}
    >
      <Container as={Stack}>
        <SimpleGrid
          width={"100%"}
          templateColumns={{ sm: "6fr  ", md: "0.6fr 0.6fr 0.6fr  " }}
          paddingTop={{ base: "20px", lg: "50px" }}
          paddingBottom={{ base: "20px", lg: "50px" }}
          paddingLeft={{ base: "20px", sm: "30px", lg: "100px" }}
          paddingRight={{ base: "20px", sm: "30px", lg: "100px" }}
          spacing={6}
        >
          <Stack spacing={6}>
            <Box>
              <img src={astroLogo} alt="astro logo" />
            </Box>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              lineHeight={{ base: "100%", md: "138.5%" }}
              width={{ base: "100%", sm: "88%" }}
            >
              About Guruji s2 to 3 lines what guruji do and how it works About
              Guruji s2 to 3 lines what guruji do and how it works
            </Text>
            <Box
              maxW={"282px"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              columnGap={{ base: "10px", md: "22px" }}
            >
              <Link>
                {" "}
                <a href="#">
                  <ion-icon
                    style={{
                      color: "#1877F2",
                      backgroundColor: "white",
                    }}
                    name="logo-facebook"
                  ></ion-icon>
                </a>{" "}
              </Link>
              <Link>
                {" "}
                <a href="#">
                  <ion-icon
                    style={{
                      background:
                        "linear-gradient(45deg, #FFC107 14.63%, #F44336 50.5%, #9C27B0 84.66%)",
                    }}
                    name="logo-instagram"
                  ></ion-icon>
                </a>{" "}
              </Link>

              <Link>
                {" "}
                <a href="#">
                  {" "}
                  <ion-icon
                    style={{
                      backgroundColor: "white",
                      color: "#03A9F4",
                    }}
                    name="logo-twitter"
                  ></ion-icon>
                </a>{" "}
              </Link>

              <Link>
                {" "}
                <a href="#">
                  <ion-icon
                    style={{
                      backgroundColor: "white",
                      color: "#F44336",
                    }}
                    name="logo-youtube"
                  ></ion-icon>
                </a>{" "}
              </Link>
            </Box>

            <Box>
              <Heading
                fontSize={{ base: "18px", md: "22px" }}
                lineHeight={{ base: "90%", md: "110%" }}
              >
                Trusted & Seals
              </Heading>
              <Box
                mt={"11px"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"flex-start"}
                align={"center"}
                columnGap={"17px"}
                className="payment-container"
              >
                <a href="#">
                  <img
                    style={{ width: "115px", height: "26px" }}
                    src={razorpay}
                    alt="razorpay icon"
                  />
                </a>
                <a href="#">
                  <img
                    style={{ width: "86", height: "32px" }}
                    src={pytm}
                    alt="paytm icon"
                  />
                </a>
              </Box>
              <Box mt={"16px"} className="payment-container">
                <a href="#">
                  <img
                    style={{ width: "65px", height: "24px" }}
                    src={strip}
                    alt="strip icon"
                  />
                </a>
              </Box>
            </Box>
          </Stack>
          <SimpleGrid
            direction={"row"}
            templateColumns={{ sm: "1fr 1fr" }}
            spacing={6}
            className="nav-link-wrapper"
          >
            <GridItem
              display={"flex"}
              flexDirection={"column"}
              align={"flex-start"}
            >
              <Heading
                fontSize={{ base: "18px", md: "22px" }}
                lineHeight={{ base: "90%", md: "110%" }}
              >
                Company
              </Heading>
              <Link href={"#"}>Home </Link>

              <Link href={"#"}> Privacy Policy</Link>
              <Link href={"#"}>T &C</Link>
              <Link href={"#"}> Varied Payment</Link>
            </GridItem>
            <GridItem
              display={"flex"}
              flexDirection={"column"}
              align={"flex-start"}
            >
              <Heading
                fontSize={{ base: "18px", md: "22px" }}
                lineHeight={{ base: "90%", md: "110%" }}
              >
                Support
              </Heading>
              <Link href={"#"}>Home </Link>
              <Link href={"#"}> Privacy Policy</Link>
              <Link href={"#"}>T &C</Link>
              <Link href={"#"}> Varied Payment</Link>
            </GridItem>

            <GridItem
              display={"flex"}
              flexDirection={"column"}
              align={"flex-start"}
            >
              <Heading
                fontSize={{ base: "18px", md: "22px" }}
                lineHeight={{ base: "90%", md: "110%" }}
              >
                Collaborate
              </Heading>
              <Link href={"#"}>Clever Tap</Link>
              <Link href={"#"}>Exotel</Link>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}> Quora</Link>
              <Link href={"#"}>Google</Link>
              <Link href={"#"}>Youtube</Link>
            </GridItem>
            <GridItem
              display={"flex"}
              flexDirection={"column"}
              align={"flex-start"}
            >
              <Heading
                fontSize={{ base: "18px", md: "22px" }}
                lineHeight={{ base: "90%", md: "110%" }}
              >
                Important Link
              </Heading>
              <Link href={"#"}> Tarot Reader</Link>
              <Link href={"#"}>Vedic Astrology </Link>
              <Link href={"#"}>Palmistry </Link>
              <Link href={"#"}> Gemology</Link>
              <Link href={"#"}>Vastu</Link>
              <Link href={"#"}>Numerology</Link>
            </GridItem>
          </SimpleGrid>
          <Stack display={"flex"} flexDirection={"column"} align={"flex-start"}>
            <Heading
              fontSize={{ base: "18px", md: "22px" }}
              lineHeight={{ base: "90%", md: "110%" }}
            >
              Stay up to date
            </Heading>
            <Stack w={{ base: "100%", lg: "70%" }} direction={"column"}>
              <Input
                color={"#999999"}
                placeholder={"Your  Name"}
                fontSize={{ base: "12px", md: "14px" }}
                lineHeight={{ base: "100%", md: "138.5%" }}
                paddingTop={"11px"}
                paddingBottom={"11px"}
                borderRadius={"6px"}
                paddingLeft={{ base: "5px", lg: "10px" }}
                // paddingRight={{ base: "30px", lg: "100px" }}
                type="name"
                background={"#F8F8F8"}
                fontWeight={500}
                border={0}
                _focus={{
                  bg: "whiteAlpha.900",
                }}
              />
              <Input
                color={"#999999"}
                fontSize={{ base: "12px", md: "14px" }}
                lineHeight={{ base: "100%", md: "138.5%" }}
                paddingTop={"11px"}
                paddingBottom={"11px"}
                borderRadius={"6px"}
                paddingLeft={{ base: "5px", lg: "10px" }}
                // paddingRight={{ base: "30px", lg: "100px" }}
                background={"#F8F8F8"}
                fontWeight={500}
                placeholder={"Mail ID"}
                type="email"
                border={0}
                _focus={{
                  bg: "whiteAlpha.900",
                }}
              />

              <Textarea
                color={"#999999"}
                fontSize={{ base: "12px", md: "14px" }}
                lineHeight={{ base: "100%", md: "138.5%" }}
                paddingTop={"11px"}
                paddingBottom={"11px"}
                borderRadius={"6px"}
                paddingLeft={{ base: "5px", lg: "10px" }}
                // paddingRight={{ base: "30px", lg: "100px" }}
                background={"#F8F8F8"}
                fontWeight={500}
                minHeight="80px"
                placeholder={"Write Query"}
                _focus={{
                  bg: "whiteAlpha.900",
                }}
              />
              <Button
                w={"100%"}
                background={" #4B9C0C"}
                color={"#E9E9E9"}
                fontWeight={600}
                fontSize={{ base: "12px", md: "16px" }}
                lineHeight={{ base: "90%", md: "100%" }}
                paddingTop={"14px"}
                paddingBottom={"14px"}
                borderRadius={" 6px"}
                variant="solid"
                size="lg"
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
