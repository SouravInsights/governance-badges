import React  from "react";
import { Modal, ModalContent, ModalOverlay, Flex, VStack, Link } from "@chakra-ui/react";
import { useConnect } from 'wagmi'
import { useRouter } from 'next/router'

const WalletModal = ({
  walletModalIsOpen, walletModalOnClose
}) => {
  const [{ data, error }, connect] = useConnect()
  console.log('wallet data:', data);
  return (
    <Modal isOpen={walletModalIsOpen} onClose={walletModalOnClose} isCentered>
      <ModalOverlay style={{ backdropFilter: 'blur(16px)' }} />
      <ModalContent
        style={{
          border: "2px solid transparent",
          borderImage: "linear-gradient(135deg, #EECE13 0%, #B210FF 100%)",
          borderImageSlice: "1",
        }}
      >
        {data.connectors.map((connector) => (
          <Flex
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect(connector)}
            p={8}
            justify='center'
            align='center'
            fontSize='28px'
            fontWeight='normal'
            bg='black'
            color='white'
            w='100%'
            cursor='pointer'
            _hover={{ bg: 'linear-gradient(135deg, #EECE13 0%, #B210FF 100%)' }}
          >
            {connector.name}
            {!connector.ready && ' (unsupported)'}
          </Flex>
        ))}
      </ModalContent>
      {error && <div>{error?.message ?? 'Failed to connect'}</div>}
    </Modal>
  )
}

export default WalletModal;