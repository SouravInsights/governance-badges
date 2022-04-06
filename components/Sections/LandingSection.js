import React  from "react";
import { VStack, Box, Text, Heading, useDisclosure } from "@chakra-ui/react";
import WalletModal from "../WalletModal";

const LandingSection = ({ accountData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log('accountData:', accountData)
  return (
    <VStack align='center' justify='center' py='120px' spacing='60px'>
      <Heading 
        fontSize='90px'
        fontWeight='black'
        color='white'
        w='70%'
        textAlign='center'
        letterSpacing='0.02em'
      >
        Let’s dive into your &nbsp;
        <Heading
          as='span'
          fontSize='90px'
          fontWeight='black'
          bgGradient='linear-gradient(135deg, #EECE13 0%, #B210FF 100%)'
          bgClip='text'
        >
          governance&nbsp;
        </Heading>                              
        activity!
      </Heading>
      <Text 
        fontSize='26px'
        fontWeight='normal'
        color='whiteAlpha.800'
        w='70%'
        textAlign='center'
        letterSpacing='0.01em'
      >
        The core success pillar of any decentralized application lies in active participation in
        governance by it’s users like you. Get your <Text as='span' fontWeight='extrabold'>#governancebadge</Text>
        &nbsp;for being a good crypto citizen so far. 😇
      </Text>
      {!accountData && (
        <Box
          as='button'
          lineHeight='1.2'
          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          px='30px'
          py='28px'
          borderRadius='6px'
          bgGradient='linear-gradient(135deg, #EECE13 0%, #B210FF 100%)'
          color='black'
          letterSpacing='0.02em'
          fontSize='32px'
          fontWeight='bold'
          _active={{
            transform: 'scale(0.98)',
          }}
          onClick={onOpen}
        >
          Connect your Wallet  🎁
        </Box>
      )}
      <WalletModal walletModalIsOpen={isOpen} walletModalOnClose={onClose} />
    </VStack>
  )
}

export default LandingSection;