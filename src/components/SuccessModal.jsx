import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorMode
  } from '@chakra-ui/react'
  import { StyledButtons } from '../atoms/styled-buttons'
  import { ModalContents, ModalHeaderContents } from '../atoms/styled-pages'
  import successIcon from '../assets/svg/successIcon.svg'



  function SuccessModal(props){
    const {colorMode} = useColorMode()
    return(
        <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <ModalHeaderContents>
                <h1>Notice</h1>
                </ModalHeaderContents>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <ModalContents>
                <img src={successIcon} alt="icon" />
                <h1>
                You have sucessfully Made an 
                    order for a trade
                </h1>
                <p>Our agents will get in touch with you to complete transaction.</p>
             </ModalContents>
            </ModalBody>
  
            <ModalFooter>
              <StyledButtons style={colorMode === 'light' ? {backgroundColor: '#12613F', color: 'white', width: 'fit-content', margin: '0 auto', padding: '.5rem 2rem'} :  {backgroundColor: '#A1272E', color: 'white', width: 'fit-content', margin: '0 auto', padding: '.5rem 2rem'}} mr={3} onClick={props.onClose}>
                Close
              </StyledButtons>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default SuccessModal