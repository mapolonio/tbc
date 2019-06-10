<template>
  <div id="app">
    <h1>Hello World! "{{ message }}"</h1>
    <h1>Welcome to TBC Finder</h1>
    <form v-on:submit="doSearch">
      <input v-model="query" placeholder="Shirt">
      <button type="submit">Search</button>
    </form>
    <form v-on:submit="updateIndex">
      <p>Upload your file to create the search index:</p>
      <p>
        <input type="file">
      </p>
      <p>
        <button type="submit">Upload file</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return { message: "congratulations" };
  },
  methods: {
    doSearch: function(event) {
      event.preventDefault();

      fetch("/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({})
      })
        .then(response => response.json())
        .then(console.log)
        .catch(function(err) {
          console.log(err);
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
        .then(() => console.log("Index updated"))
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>
