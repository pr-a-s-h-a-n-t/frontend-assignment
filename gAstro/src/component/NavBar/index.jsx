import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Hide,
  Link,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";
import tree from "../../assets/tree.svg";

import "./NavBar.css";
import navIcon from "../../assets/footericon.svg";
import usericon from "../../assets/usericon.svg";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      style={{
        background: " rgba(255, 236, 221, 0.2)",
        position: "absolute",
        zIndex: " 20",
        color: "white",
      }}
      p={6}
      width={["100%"]}
    >
      <Flex h={8} px={6} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <IconButton
            fontSize={"40px"}
            icon={isOpen ? "" : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box
              style={{
                border: "1px solid black",
                background: " rgba(255, 236, 221, 0.2)",
                height: "180px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                // rowGap: "1rem",
                alignItems: "flex-end;",
                padding: " 0 1rem",
                position: "absolute",
                left: "0px",
                top: "0px",
              }}
              // pt={8}
              // px={4}
              // py={4}
              display={{ md: "none" }}
              className="nav_container"
            >
              <HStack>
                <IconButton
                  size={"md"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: "none" }}
                  onClick={isOpen ? onClose : onOpen}
                />
              </HStack>
              <Button
                onClick={isOpen ? onClose : onOpen}
                _hover={{
                  textShadow: "#FC0 1px 0 10px",
                  transform: "scale(1.2)",
                }}
                py={2}
              >
                <a href="#">
                  {" "}
                  <Link>Home</Link>
                </a>
              </Button>

              <Button
                onClick={isOpen ? onClose : onOpen}
                _hover={{
                  textShadow: "#FC0 1px 0 10px",
                  transform: "scale(1.2)",
                }}
                py={2}
              >
                <a href="#">
                  <Link>Call with Astrologer</Link>
                </a>
              </Button>

              <Button
                onClick={isOpen ? onClose : onOpen}
                _hover={{
                  textShadow: "#FC0 1px 0 10px",
                  transform: "scale(1.2)",
                }}
                py={2}
              >
                <a href="#">
                  {" "}
                  <Link>Live (Coming Soon) </Link>
                </a>
              </Button>
            </Box>
          ) : null}
        </Box>

        <Flex h={10} alignItems={"center"} justifyContent={"space-between"}>
          <HStack
            width={["100%"]}
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack className="nav_icon">
              <img src={navIcon} alt="website logo" />
            </HStack>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
              className="nav_container"
            >
              <Button className="btnRes">
                <a href="# ">
                  {" "}
                  <Link>Home</Link>
                </a>
              </Button>

              <Button className="btnRes">
                <a href="# ">
                  <Link>Call with Astrologer</Link>
                </a>
              </Button>

              <Button className="btnRes">
                <a href="# ">
                  {" "}
                  <Link>Live (Coming Soon) </Link>
                </a>
              </Button>
            </HStack>
          </HStack>
        </Flex>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button
              style={{
                width: "clamp(30px, 2.5vw, 48px)",
                height: " clamp(90px, 2.5vh, 48px)",
              }}
            >
              <img
                src={usericon}
                width={"100%"}
                height={"100%"}
                alt="user icon "
              />
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
