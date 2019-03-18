class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in hands of computer';
        const options = ['pierwsza1', 'druga', 'trzecia'];

        return (
            <div>
                {/*w poniższy sposób przekażemy props title i subtitile*/}
                <Header title={title} subtitle={subtitle} />
                <Action/>
                <Options options={options} />
                <AddOption/>
            </div>
        )
    }
}

// Dla Reacta jest ważne, żeby klasa była z dużej litery, inaczej się nie wyrenderuje
class Header extends React.Component {
    // W React.Component musisz coś wyrenderować
    render() {
        return (
            <div>
                {/* W Poniższy sposób pobierzemy propsa*/}
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    // Teraz tutaj utworzymy metodę
    handlePick() {
        alert('Halnde pick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should i do</button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('handle remove all');
    }
    render() {
        return (
            <div>
                <button onCLick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option)=> {
                        // return <p key={option}>{option}</p>;
                        return <Option key={option} optionText={option}></Option>;
                    })
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}


class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        // trim() - jest do usunięcia niepotrzebnych spacji
        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));