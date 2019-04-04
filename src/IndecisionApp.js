import React from 'react';

import AddOption from './components/AddOption';
import Options from './components/Options';
import Action from './components/Action';
import Header from './components/Header';
import OptionModal from './components/OptionModal'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            selectedOption: undefined,
            options : []
        }
    }

    // Lifecycle methods - dostępne są na class based component a nie na functional components
    componentDidMount() {
        console.log('component did mount');
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                // this.setState(()=> ({ options: options }));
                // poniżej zapis skrócony
                this.setState(()=> ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    // componentDidUpdate - odpali się kiedy komponent zostanie zmieniony, gdy np. zmieni się props lub state
    // W tej metodzie jako argumentu możemy podać np: (prevProps, prevState)
    componentDidUpdate(prevProps, prevState) {
        console.log('component did update');
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // alert(option);
        this.setState(() => ({
           selectedOption: option
        }));
    }

    handleDeleteOptions() {
        // this.setState(()=> {
        //     return {
        //         options: []
        //     }
        // });
        // Skrócony zapis tego powyżej
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleCloseModal() {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    handleAddOption(option) {
        // Walidacja
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exsist';
        }

        // this.setState((prevState)=> {
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });
        // Skrócony zapis tego powyżej
        this.setState((prevState)=> ({options: prevState.options.concat(option)}));
    }

    render() {
        const subtitle = 'Put your life in hands of computer';

        return (
            <div>
                {/*w poniższy sposób przekażemy props title i subtitile*/}
                <Header subtitle={subtitle} />
                <Action
                    handlePick = {this.handlePick}
                    hasOptions = {this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}

                    // Ponieważ button do odpalenia poniższej metody nie istnieje Options, to dodamy teraz nowy props, do ktorego przypiszemy metodę, którą zdefiniwoaliśmy poniżej
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}

