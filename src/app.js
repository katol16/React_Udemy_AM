// Poniżej przykłąd demonstrujący działanie bind, keidy tego używamy itd.
// const obj = {
//     name: 'Vikram',
//     getName() {
//         return this.name;
//     }
// };

// Poniżej zadziałą - ponieważ, ze kontekst w jakim jest szukana nasza zmeinna jest dobry. this wskazuje na obiekt
// console.log('z obiektu ' + obj.getName());

// const getName = obj.getName;
// To poniżej nie zadziała. Bo tworząc funkcję w zmiennej, ustalamy jej inny kontekst. this, w tym moemncie bedzie wskazywało na obiekt globlany, a nie na obiekt
// Dlatego taki problem naprawiamy za pomocą bind() , w nawisach podajemy obiekt, na któ©y kieruje słowo kluczowe this
// const getName = obj.getName.bind(obj);
// console.log('ze zmiennej ' + getName());

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options : ['pierwsza1', 'druga', 'trzecia']
        }
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in hands of computer';

        return (
            <div>
                {/*w poniższy sposób przekażemy props title i subtitile*/}
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} />
                <Options options={this.state.options} />
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
                <button
                    onClick={this.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should i do
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        alert('handle remove all');
        console.log(this.props.options)
    }
    render() {
        return (
            <div>
                {/*binda mozesz użyc poniżej np:*/}
                {/*onClick={this.handleRemoveAll.bind(this)}*/}
                {/*ale nie jest to najelpszy sposób, lepiej w constructorze to zrobic*/}
                <button onClick={this.handleRemoveAll}>Remove all</button>
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