'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    // Lifecycle methods - dostępne są na class based component a nie na functional components


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('component did mount');
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    // this.setState(()=> ({ options: options }));
                    // poniżej zapis skrócony
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // Do nothing at all
            }
        }

        // componentDidUpdate - odpali się kiedy komponent zostanie zmieniony, gdy np. zmieni się props lub state
        // W tej metodzie jako argumentu możemy podać np: (prevProps, prevState)

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log('component did update');
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('component will unmount');
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // this.setState(()=> {
            //     return {
            //         options: []
            //     }
            // });
            // Skrócony zapis tego powyżej
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
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
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in hands of computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    handlePick: this.handlePick,
                    hasOptions: this.state.options.length > 0
                }),
                React.createElement(Options, {
                    options: this.state.options

                    // Ponieważ button do odpalenia poniższej metody nie istnieje Options, to dodamy teraz nowy props, do ktorego przypiszemy metodę, którą zdefiniwoaliśmy poniżej
                    , handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// IndecisionApp.defaultProps = {
//     options: ['ds']
// };

// Dla Reacta jest ważne, żeby klasa była z dużej litery, inaczej się nie wyrenderuje

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
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

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should i do'
        )
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

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove all'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        props.options.map(function (option) {
            // return <p key={option}>{option}</p>;
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption });
        })
    );
};
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

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'remove'
        )
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


var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOptionInsideThisClass = _this2.handleAddOptionInsideThisClass.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOptionInsideThisClass',
        value: function handleAddOptionInsideThisClass(e) {
            e.preventDefault();

            // trim() - jest do usunięcia niepotrzebnych spacji
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOptionInsideThisClass },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

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
