import React from 'react';
import Option from './Option';


const Options = (props)=> {
    return (
        <div>
            {/*binda mozesz użyc poniżej np:*/}
            {/*onClick={this.handleRemoveAll.bind(this)}*/}
            {/*ale nie jest to najelpszy sposób, lepiej w constructorze to zrobic*/}

            {/* Odwołujemy się do props, bo tam mamy odwołanie do anszej metody handleDeleteOptions*/}
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option)=> {
                    // return <p key={option}>{option}</p>;
                    return (
                        <Option
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}>
                        </Option>
                    );
                })
            }
        </div>
    )
}

export default Options;