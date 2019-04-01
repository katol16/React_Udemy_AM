import React from 'react';

// To poniżej zadziałą, ale powduję pewne komplikacje
// Np: React zapsizę tœój komponent jako <Unknown>
// export default (props) => {
//     return (
//         <div>
//             {props.optionText}
//             <button
//                 onClick={(e) => {
//                     props.handleDeleteOption(props.optionText);
//                 }}
//             >
//                 remove
//             </button>
//         </div>
//     );
// };

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

export default Option;