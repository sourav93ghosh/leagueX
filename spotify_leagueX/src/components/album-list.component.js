import React, {
    Component,
    Fragment
} from 'react';
import { connect } from 'react-redux';
import AlbumComponent from './album.component';

class AlbumListComponent extends Component {
    render() {
        return (
            this.props.listOfAlbums.items ?
            <Fragment>
                <h5 className="ml-3">Albums</h5>
                <div className="row">
                    {
                        this.props.listOfAlbums.items.map((album, i) => {
                            return <AlbumComponent key={ i } album={ album } />;
                        })
                    }
                </div>
            </Fragment> : ''
        )
    }
}

function mapStateToProps(state) {
    return {
        listOfAlbums: state.listOfAlbums
    }
}

export default connect(mapStateToProps, null)(AlbumListComponent);