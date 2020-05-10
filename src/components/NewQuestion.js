import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSavingQuestion } from '../actions/shared'
import { withRouter } from 'react-router-dom';


class NewQuestion extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleSavingQuestion({
      optionOneText: document.getElementById('option1').value,
      optionTwoText: document.getElementById('option2').value
    }))
      .then(() => {
        this.props.history.push('/');
      })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3> Create New Question </h3>
            </div>
            <div className="modal-body">
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="col-sm-12">
                    <h2>Would you rather...</h2>

                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input className="form-control" id="option1" placeholder="Enter option 1 text here" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-5">
                    <hr />
                  </div>
                  <div className="col-sm-2">

                    <h4 style={{ textAlign: "center" }}>OR</h4>
                  </div>
                  <div className="col-sm-5">
                    <hr />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input className="form-control" id="option2" placeholder="Enter option 2 text here" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Submit</button>

                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {

  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));