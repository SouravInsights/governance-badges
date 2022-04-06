import React  from "react";
import { VStack, Box, Image, Text, Heading } from "@chakra-ui/react";
import { useEnsAvatar } from 'wagmi'
import { useAccount } from 'wagmi';

const Dashboard = () => {
  const [{ data, error, loading }, getEnsAvatar] = useEnsAvatar({
    addressOrName: 'souravinsights.eth',
  })
  const [{ data: accountData }] = useAccount();
  console.log('accountData:', accountData);
  return (
    <Box py={14}>
      <VStack>
      <Box
        w='190px'
        h='190px'
        borderRadius='50%'
      >
        <Image
          src={data}
          alt=''
          w='190px'
          h='190px'
          borderRadius='50%'
          zIndex={4}
        />
      </Box>
      <Heading 
        fontSize='90px'
        fontWeight='black'
        color='white'
        w='70%'
        textAlign='center'
        letterSpacing='0.02em'
      >
        {`Hey, ${accountData}`}
      </Heading>
      </VStack>
    </Box>
  )
}

export default Dashboard;