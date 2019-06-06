import React, { 
    Component
} from 'react';
import SearchComponent from './search.component';
import ArtistListComponent from './artist-list.component';
import AlbumListComponent from './album-list.component';
import TrackListComponent from './track-list.component';

class AppComponent extends Component {

    componentDidMount() {}
    
    render() {
        return (
            <div className="m-2">
                <div className="row">
                    <div className="col-md-4">
                        <SearchComponent type="artist" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 v-scroll">
                        <ArtistListComponent />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-7 v-scroll">
                                <AlbumListComponent />
                            </div>
                            <div className="col-md-5 v-scroll">
                                <TrackListComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AppComponent;