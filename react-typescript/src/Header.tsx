import React from 'react';

interface IState {
    name: string;
    surname: string;
    age: number;
}

interface IProps {
    name: string;
    surname: string;
    age: number;
    isActive: boolean;
}

class Header extends React.Component<IProps, IState> {
    state = {
        name: '',
        surname: '',
        age: 0,
    };

    changeNameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ ...this.state, name: e.currentTarget.value });
    };

    changeSurnameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ ...this.state, surname: e.currentTarget.value });
    };

    changeAgeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ ...this.state, age: e.currentTarget.valueAsNumber });
    };

    render() {
        return (
            <div>
                <h1>Hello From Header</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis modi possimus voluptatem
                    facilis, aperiam at explicabo doloremque delectus? Sed porro a quis quo.
                </p>
                <label>Name: {this.props.name}</label>
                <br />
                <label>Surname: {this.props.surname}</label>
                <br />
                <label>Age: {this.props.age}</label>
                <br />
                <label>Active: {this.props.isActive ? 'Active' : 'No active'}</label>

                <div>
                    <form action="">
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={(e) => this.changeNameHandler(e)}
                        />
                        <br />

                        <input
                            type="text"
                            name="surname"
                            value={this.state.surname}
                            onChange={(e) => this.changeSurnameHandler(e)}
                        />
                        <br />

                        <input
                            type="number"
                            name="age"
                            value={this.state.age}
                            onChange={(e) => this.changeAgeHandler(e)}
                        />
                    </form>
                </div>

                <label>State Name: {this.state.name}</label>
                <br />
                <label>State Surname: {this.state.surname}</label>
                <br />
                <label>State Age: {this.state.age}</label>
            </div>
        );
    }
}

export default Header;
