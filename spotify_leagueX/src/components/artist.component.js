import React, {
    Component
} from 'react';
import { connect } from 'react-redux';

class ArtistComponent extends Component {

    constructor(props) {
        super(props);
        this.getAlbumsEvent = this.getAlbumsEvent.bind(this);
    }

    getAlbumsEvent() {
        this.props.emitGetAlbumsEvent(this.props.artist.id);
    }

    render() {
        return (
            <div className="card mb-2" onClick={ this.getAlbumsEvent }>
                <div className="row">
                    <div className="col-md-4">
                        {
                            this.props.artist.images.length > 0 ?
                            <img className="profile p-1"
                                src={ this.props.artist.images[2].url } /> :
                            <span className="m-2 text-muted">No Data</span>
                        }
                    </div>
                    <div className="col-md-8">
                        <div className="text-primary">{ this.props.artist.name }</div>
                        <div class="text-muted">Genre: { this.props.artist.genres.join(", ") }</div>
                        <div class="text-muted">Popularity: { this.props.artist.popularity }%</div>
                        <div class="text-muted">Followers: { this.props.artist.followers.total }</div>
                    </div>
                </div>
            </div>
        )
    }

}

function mapDispatchToProps (dispatch) {
    return {
        emitGetAlbumsEvent: (artistId) => {
            return dispatch({
                type: 'GET_ARTIST_ALBUMS', 
                payload: artistId 
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(ArtistComponent);