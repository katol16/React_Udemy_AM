import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            // Poniżej 2 wykrzyniki skonwerują wartośc undefined na false, generalnie te dwa wyrzkiniki zmieniaja różne wartosci na booleam
            isOpen={!!props.selectedOption}
            contentLabel='Selected Option'
            // Poniżej opcja, któ©y wyłaczy modal jak klikniesz w tło lub jak dasz ESC
            onRequestClose={props.handleCloseModal}
        >
            <h3>Selected option</h3>
            <p>{props.selectedOption && props.selectedOption}</p>
            <button onClick={props.handleCloseModal}>close</button>
        </Modal>
    // Użyjemy skróconego zapisu (powyżej):)
    // return (
    //     <div>
    //         Some text
    //     </div>
    // )
// };
);



export default OptionModal;