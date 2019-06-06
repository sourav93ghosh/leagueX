import React, {
    Component,
    Fragment
} from 'react';
import { connect } from 'react-redux';
import TrackComponent from './track.component';

class TrackListComponent extends Component {
    render() {
        return (
            this.props.listOfTracks.items ?
            <Fragment>
                <h5 className="ml-3">Tracks</h5>
                <div className="row">
                    {
                        this.props.listOfTracks.items.map((track, i) => {
                            return <TrackComponent key={ i } track={ track } />;
                        })
                    }
                </div>
            </Fragment> : ''
        )
    }
}

function mapStateToProps(state) {
    return {
        listOfTracks: state.listOfTracks
    }
}

export default connect(mapStateToProps, null)(TrackListComponent);