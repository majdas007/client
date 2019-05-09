import React, {Component} from "react";
import {getHistory} from "../store/actions/HistoryActions";
import connect from "react-redux/es/connect/connect";


class History extends Component {

    componentWillMount() {
        const hasSubmit = false;

        this.setState({
            hasSubmit: hasSubmit
        });
        const {dispatch } = this.props;
        dispatch(getHistory())

    }
    render() {
        return (
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header card-header-primary card-header-icon">
                        <div className="card-icon">
                            <i className="material-icons">assignment</i>
                        </div>
                        <h4 className="card-title">History</h4>
                    </div>
                    <div className="card-body">
                        <div className="toolbar">
                        </div>
                        <div className="material-datatables">

                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="datatables"
                                               className="table table-striped table-no-bordered table-hover dataTable dtr-inline"
                                               cellSpacing={0} width="100%" style={{width: '100%'}} role="grid"
                                               aria-describedby="datatables_info">
                                            <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex={0} aria-controls="datatables"
                                                    rowSpan={1} colSpan={1} style={{width: '115px'}}
                                                    aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending">Msg Client
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="datatables"
                                                    rowSpan={1} colSpan={1} style={{width: '114px'}}
                                                    aria-label="Office: activate to sort column ascending">Date
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="datatables"
                                                    rowSpan={1} colSpan={1} style={{width: '102px'}}
                                                    aria-label="Age: activate to sort column ascending">Satisfaction Client
                                                </th>
                                            </tr>
                                            </thead>

                                            <tbody>


                                            {this.props.History.map(history => (
                                                <React.Fragment>
                                            <tr role="row" className="odd">
                                                <td tabIndex={0} className="sorting_1">{history.ClientMsg[0]}({history.ClientMsg.length})</td>
                                                <td>{history.Date}</td>
                                                <td>

                                                    {history.Score <0 ?<img src={require('../assets/img/red.png')}/>: null }
                                                    {history.Score > 0 ?<img src={require('../assets/img/green.png')}/>: null }
                                                    {history.Score == 0 ?<img width="23px" height="23px" src={require('../assets/img/yellow.png')}/>: null }

                                                </td>
                                            </tr>

                                                </React.Fragment>
                                            ))}


                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    const { History } = state.historyreducer;
    return {
        History
    };
}
export default connect(
    mapStateToProps,
    null
)(History);
