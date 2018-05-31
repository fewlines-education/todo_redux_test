import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: ""};
    this.handleName = this.handleName.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleSave(event) {
    event.preventDefault();

    this.props.onSave(this.state.name);
    this.setState({name: ""});
  }

  render() {
    return (
      <div className="row mb-1">
        <div className="col">
          <div className="border border-radius bg-light p-2">
            <form>
              <div className="input-group">
                <input className="form-control"
                       placeholder="Do what I love"
                       value={this.state.name}
                       onChange={this.handleName} />
                <div className="input-group-append">
                  <button className="btn btn-primary"
                          onClick={this.handleSave}>
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
