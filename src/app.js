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
    render() {
        return (
            <div>
                <button>What should i do</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
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
    render() {
        return (
            <div>
                Add Option
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));