import React from 'react';

export default class TodosList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do you want?" ref="createInput" />
                <button>Create a useless task :P</button>
                {this.renderError()}
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Dont try to joke, enter task';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'U wanna do the task again?';
        } else {
            return null;
        }
    }
}
