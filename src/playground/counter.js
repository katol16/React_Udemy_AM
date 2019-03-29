class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne =  this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // default state
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        // console.log('component did mount');
        // this.setState(()=> {
        //     return {
        //         count: parseInt(localStorage.getItem("count" ), 10)
        //     }
        // });
        //
        // Poniżej jak w kursie ziomek to zrobił

        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component did update');
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        // w poniższy sposób zminimy state, ale nie zrobimy re renderingu
        // this.state.count = this.state.count + 1;
        // console.log(this.state);

        // Dlatego powinniśmy użyć metody setState
        // this.setState(()=> {
        //     return {
        //         count: this.state.count + 1
        //     }
        // });

        // możemy tu użyc prevState, czyli porpzedniego stanu
        this.setState((prevState)=> {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState)=> {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset() {
        this.setState(()=> {
            return {
                count: 0
            }
        });

        // Jest jeszcze starsza opcja w nadpsianiu state, w którj nadpisuejsz po prostu obiekt. Raczej będziemy się trzymać powyższej opcji, czyli do argumentu setState, wstawimy funkcję.
        // this.setState({
        //     count: 0
        // });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// Pierwsza wersja
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count = count -1;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
//
// // element z HTML'a
// const appRoot = document.getElementById("app");
//
// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//
//
// // Teraz wyświetlimy naszego template'a
//     ReactDOM.render(templateThree, appRoot);
// };
//
// renderCounterApp();