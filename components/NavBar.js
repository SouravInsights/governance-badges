import React  from "react";
import { Flex, Box, Text, Link, useDisclosure } from "@chakra-ui/react";
import { useAccount } from 'wagmi';
import WalletModal from "./WalletModal";

const NavLink = ({ children, ...props }) => (
  <Link mt={{ base: 4, md: 0 }} mr={6} display="block" fontSize="xl" fontWeight="medium" lineHeight="xl" color="gray.50" {...props}>
    {children}
  </Link>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })
  console.log('accountData:', accountData);
  return (
    <Flex 
      as="nav"
      bg='black'
      w="90%"
      mx="auto"
      mt="60px"
      top='20px'
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      position="sticky"
      color="gray.50"
      borderRadius="6px"
      style={{
        border: "1px solid transparent",
        borderImage: "linear-gradient(135deg, #EECE13 0%, #B210FF 100%)",
        borderImageSlice: "1",
      }}
    >
      <Text fontSize="xl" fontWeight="black" lineHeight="xl" color="gray.50">Governance Badges</Text>
      <Flex align='center'>
        <NavLink href="about">About</NavLink>
        {!accountData && (
          <Box
            as='button'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            px='4px'
            py='2px'
            borderRadius='6px'
            letterSpacing='0.02em'
            fontSize="xl" 
            fontWeight="medium" 
            lineHeight="xl" 
            color="gray.50"
            _active={{
              transform: 'scale(0.98)',
            }}
            onClick={onOpen}
          >
            Connect Wallet
          </Box>
        )}
        <Text fontSize="xl" fontWeight="medium" lineHeight="xl" color="gray.50">
          {accountData?.ens?.name ? accountData?.ens?.name : accountData?.address}
        </Text>
        <WalletModal walletModalIsOpen={isOpen} walletModalOnClose={onClose} />
      </Flex>
    </Flex>
  )
}

export default NavBar;