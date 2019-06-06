import React, { 
    Component
} from 'react';
import { connect } from 'react-redux';

class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.doSearch = this.doSearch.bind(this);
    }

    doSearch(event) {
        if (event.which == 13 || event.keyCode == 13) {
            this.props.reset();
            const search_term = event.target.value;
            this.props.emitSearchEvent({
                search_type: this.props.type,
                search_term: search_term
            });
        }
    }

    render() {
        return (
            <input type="text"
                className="mb-3 search form-control"
                placeholder="Search for Artists"
                onKeyPress={ this.doSearch }
            />
        )
    }

}

function mapDispatchToProps (dispatch, props) {
    return {
        emitSearchEvent: (searchObj) => {
            return dispatch({
                type: 'SEARCH', 
                payload: searchObj 
            })
        },
        reset: () => dispatch({ type: 'RESET' })
    }
}

export default connect(null, mapDispatchToProps)(SearchComponent);