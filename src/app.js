// Po ogarnieciu instalacji babela i yarna loklanie a nie globalnie, apke uruchamaisz za pomocą:
// yarn run serve
// oraz
// yarn run build

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
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
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
        alert(option);
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
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options: ['ds']
// };

// Dla Reacta jest ważne, żeby klasa była z dużej litery, inaczej się nie wyrenderuje

const Header = (props)=> {
    return (
        <div>
            {/* W Poniższy sposób pobierzemy propsa*/}
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};
Header.defaultProps = {
  title: 'Indecison'
};
// poniżej to samo tylko jako class based component
// class Header extends React.Component {
//     // W React.Component musisz coś wyrenderować
//     render() {
//         return (
//             <div>
//                 {/* W Poniższy sposób pobierzemy propsa*/}
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should i do
            </button>
        </div>
    );
};
// poniżej to samo tylko jako class based component
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should i do
//                 </button>
//             </div>
//         )
//     }
// }

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
// poniżej to samo tylko jako class based component
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 {/*binda mozesz użyc poniżej np:*/}
//                 {/*onClick={this.handleRemoveAll.bind(this)}*/}
//                 {/*ale nie jest to najelpszy sposób, lepiej w constructorze to zrobic*/}
//
//                 {/* Odwołujemy się do props, bo tam mamy odwołanie do anszej metody handleDeleteOptions*/}
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                 {
//                     this.props.options.map((option)=> {
//                         // return <p key={option}>{option}</p>;
//                         return <Option key={option} optionText={option}></Option>;
//                     })
//                 }
//             </div>
//         )
//     }
// }

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
// poniżej to samo tylko jako class based component
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }


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

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

// PROPS
//     - An object
//     - Can be used when rendering
//     - Changes (from above) cause re-renders
//     - Comes from above
//     - Can't be changed by component itself
//
// STATE
//     - An object
//     - Can be used when rendering
//     - Changes cause re-renders
//     - Defined in component itself
//     - Can be changed by component itself
//

// stateless functional components
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };
// ReactDOM.render(<User name="Karol" age={26} />, document.getElementById('app'));

// Działania dostępne na localStorage
// localStorage.setItem("key","value");
// localStorage.getItem("key");
// localStorage.removeItem("key");

// Dodatkowo warto wiedzieć, że jak zrobisz tak:
// localStorage.setItem("age",26); - to ten number 26, zapisze się jako string! Generalnie localstorage działą tylko ze stringami