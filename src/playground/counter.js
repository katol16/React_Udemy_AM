let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count = count -1;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

// element z HTML'a
const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );


// Teraz wyświetlimy naszego template'a
    ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();