class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility =  this.toggleVisibility.bind(this);

        // default state
        this.state = {
            visibility: false
        };
    };

    toggleVisibility() {
        this.setState(()=> {
            return {
                visibility: !this.state.visibility
            }
        });

        // lub
        // this.setState((prevState)=> {
        //     return {
        //         visibility: !prevState.visibility
        //     }
        // });
    };

    render() {
        return (
            <div>
                Visible
                <button onClick={this.toggleVisibility}>Pokaż</button>
                {this.state.visibility &&
                    <div>
                        kurwa, teraz widać
                    </div>
                }
            </div>
        )
    };
}

ReactDOM.render(<Visible />, document.getElementById('app'));
