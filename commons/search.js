const API = require('./mock-api');
// To count the matches, call API.countMatches(term) where term is the search term

const EventEmitter = require('events');

class Search extends EventEmitter {

    searchCount(term) {
        if (!term) {
            this.emit('SEARCH_ERROR', { message: 'INVALID_TERM' });
        } else {
            this.emit('SEARCH_STARTED', term);
            API.countMatches(term, (err, count) => {
                if (err) {
                    this.emit('SEARCH_ERROR', { message: 'CONNECTION_ERROR', term });
                } else {
                    this.emit('SEARCH_SUCCESS', { term, count });
                }
            });
        }
    }

    removeAllListeners() {
        this.listeners = {};
    }
}

module.exports = Search;