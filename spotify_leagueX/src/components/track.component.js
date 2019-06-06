import React, {
    Component
} from 'react';
import { connect } from 'react-redux';

class TrackComponent extends Component {

    constructor(props) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
    }

    playAudio() {
        // play audio based on the preview URL
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="card mb-2" onClick={ this.playAudio }>
                    <div className="row p-2">
                        <div className="col-md-9 text-muted">{ this.props.track.name }</div>
                        <div className="col-md-3 text-muted">
                            { Number(this.props.track.duration_ms / 60000).toFixed(2) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackComponent;