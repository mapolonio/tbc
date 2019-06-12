<template>
  <div id="app">
    <h1>Welcome to TBC Finder</h1>
    <div>
      <p>What are you searching for?</p>
      <input v-model="query" placeholder="E.g. Shirt">
    </div>
    <form v-on:submit="updateIndex">
      <p>Upload your file to create the search index:</p>
      <p>
        <input type="file">
      </p>
      <p>
        <button type="submit">Upload file</button>
      </p>
    </form>
    <div v-if="state === states.INITIAL"></div>
    <div v-else-if="state === states.DONE">
      <table v-if="results.length">
        <tr>
          <th>License</th>
          <th>Expiration Date</th>
        </tr>
        <tr>
          <td>{{results[0].license}}</td>
          <td>{{results[0].expirationDate}}</td>
        </tr>
      </table>
      <div v-else>
        <p>No results for "{{query}}"</p>
      </div>
    </div>
    <div v-else-if="state === states.ERROR">
      <p>There has been an error :(</p>
    </div>
    <div v-else>
      <p>...</p>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

const states = Object.freeze({
  INITIAL: "initial",
  LOADING: "loading",
  DONE: "doneSearching",
  ERROR: "error"
});

export default {
  name: "app",
  data() {
    return { states, state: states.INITIAL, query: "", results: [] };
  },
  watch: {
    query: function(newQuery, oldQuery) {
      if (newQuery === oldQuery) return;

      if (newQuery === "") {
        this.state = states.INITIAL;
        return;
      }

      this.state = states.LOADING;
      this.debouncedSearch();
    }
  },
  created() {
    this.debouncedSearch = _.debounce(this.doSearch, 500);
  },
  methods: {
    doSearch: function() {
      fetch("/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: this.query })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return response.json();
        })
        .then(({ results }) => {
          this.state = states.DONE;
          this.results = results;
        })
        .catch(err => {
          this.state = states.ERROR;
          console.log(err, this.state);
        });
    },
    updateIndex: function(event) {
      event.preventDefault();

      fetch("/create-index", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({})
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          console.log("Index updated");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
