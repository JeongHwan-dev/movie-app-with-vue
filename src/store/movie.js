import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

const _defaultMessage = 'Search for the movie title!';

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    movieData: {},
    message: _defaultMessage,
    loading: false
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetMovies(state) {
      state.movies = [];
      state.message = _defaultMessage;
      state.loading = false;
    }
  },
  actions: {
    async searchMovies({ state, commit }, payload) {
      if (state.loading) {
        return;
      }

      commit('updateState', {
        message: '',
        loading: true
      });
      
      try {
        const response = await _fetchMovies({
          ...payload,
          page: 1
        });
        const { Search, totalResults } = response.data;
  
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID')
        });
  
        const total = parseInt(totalResults, 10);
        const pageLength = Math.ceil(total / 10);
  
        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page++) {
            if (page > (payload.number / 10)) {
              break;
            }
  
            const response = await _fetchMovies({
              ...payload,
              page
            });
            const { Search } = response.data;
  
            commit('updateState', {
              movies: [
                ...state.movies, 
                ..._uniqBy(Search, 'imdbID')
              ]
            });
          }
        }
      } catch ({ message }) {
        commit('updateState', {
          movies: [],
          message
        });
      } finally {
        commit('updateState', {
          loading: false
        });
      }
    },
    async searchMovieWithId({ state, commit }, payload) {
      if (state.loading) {
        return;
      }

      commit('updateState', {
        movieData: {},
        loading: true
      });

      try {
        const response = await _fetchMovies(payload);
        
        commit('updateState', {
          movieData: response.data
        });
      } catch (error) {
        commit('updateState', {
          movieData: {}
        });
      } finally {
        commit('updateState', {
          loading: false
        });
      }
    }
  }
};

async function _fetchMovies(payload) {
  return await axios.post('/.netlify/functions/movie', payload);
}