import React from 'react';

export default class AddOption extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleAddOptionInsideThisClass = this.handleAddOptionInsideThisClass.bind(this);
    //     this.state = {
    //         error: undefined
    //     };
    // }
    // handleAddOptionInsideThisClass(e) {
    //     e.preventDefault();
    //
    //     // trim() - jest do usunięcia niepotrzebnych spacji
    //     const option = e.target.elements.option.value.trim();
    //     const error = this.props.handleAddOption(option);
    //
    //     this.setState(()=> {
    //         return {error:error}
    //     })
    //
    //     if (!error) {
    //         e.target.elements.option.value = '';
    //     }
    // }

    // Teraz to co powyzej skonwertujemy do  tego nowego syntaxu (Class syntax), który nie potrzebuje constructora

    state = {
        error: undefined
    };

    handleAddOptionInsideThisClass = (e) => {
        e.preventDefault();

        // trim() - jest do usunięcia niepotrzebnych spacji
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=> {
            return {error:error}
        })

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptionInsideThisClass}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}