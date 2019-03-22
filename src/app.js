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
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        }
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOptions() {
        this.setState(()=> {
            return {
                options: []
            }
        });
    }

    handleAddOption(option) {
        // Walidacja
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exsist';
        }

        this.setState((prevState)=> {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in hands of computer';

        return (
            <div>
                {/*w poniższy sposób przekażemy props title i subtitile*/}
                <Header title={title} subtitle={subtitle} />
                <Action
                    handlePick = {this.handlePick}
                    hasOptions = {this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}

                    // Ponieważ button do odpalenia poniższej metody nie istnieje Options, to dodamy teraz nowy props, do ktorego przypiszemy metodę, którą zdefiniwoaliśmy poniżej
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
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
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should i do
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {/*binda mozesz użyc poniżej np:*/}
                {/*onClick={this.handleRemoveAll.bind(this)}*/}
                {/*ale nie jest to najelpszy sposób, lepiej w constructorze to zrobic*/}

                {/* Odwołujemy się do props, bo tam mamy odwołanie do anszej metody handleDeleteOptions*/}
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
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
    constructor(props) {
        super(props);
        this.handleAddOptionInsideThisClass = this.handleAddOptionInsideThisClass.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOptionInsideThisClass(e) {
        e.preventDefault();

        // trim() - jest do usunięcia niepotrzebnych spacji
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(()=> {
            return {error:error}
        })

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

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));