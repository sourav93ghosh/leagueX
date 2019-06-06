import React, {
    Component,
    Fragment
} from 'react';
import { connect } from 'react-redux';
import ArtistComponent from './artist.component';

class ArtistListComponent extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.listOfArtist.artists ?
                    this.props.listOfArtist.artists.items.map((artist, i) => {
                        return <ArtistComponent key={ i } artist={ artist } />;
                    }) : <span className="text-muted">No Data Found</span>
                }
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        listOfArtist: state.listOfArtist
    }
}

export default connect(mapStateToProps, null)(ArtistListComponent);