import * as React from "react";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="animation-prop">
                <header className="align-vertical">
                    <h1>{this.props.title}</h1>
                </header>
                <ul>
                    {
                        this.props.headers.map(element => {
                            return (
                                <li className="align-vertical align-horizontal animation-prop" key={element.name}>
                                    <p>{element.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        );
    }
}