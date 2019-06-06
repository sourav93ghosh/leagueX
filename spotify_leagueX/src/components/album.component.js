import React, {
    Component
} from 'react';
import { connect } from 'react-redux';

class AlbumComponent extends Component {

    constructor(props) {
        super(props);
        this.getTracksEvent = this.getTracksEvent.bind(this);
    }

    getTracksEvent() {
        this.props.emitGetTracksEvent(this.props.album.id);
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="card album-card mb-2" onClick={ this.getTracksEvent }>
                    {
                        this.props.album.images && 
                        this.props.album.images.length > 0 ?
                        <img width="100%" 
                            src={ this.props.album.images[1].url } 
                            className="card-img-top" /> :
                        <span className="text-muted">No Data</span>
                    }
                    <div className="card-body">
                        <div class="text-primary">{ this.props.album.artists[0].name }</div>
                        <div class="text-muted">Album: { this.props.album.name }</div>
                        <div class="text-muted">Songs: { this.props.album.total_tracks }</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        emitGetTracksEvent: (albumId) => {
            return dispatch({
                type: 'GET_ALBUM_TRACKS', 
                payload: albumId 
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(AlbumComponent);