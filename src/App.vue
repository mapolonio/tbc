<template>
  <div id="app">
    <h1>Hello World! "{{ message }}"</h1>
    <h1>Welcome to TBC Finder</h1>
    <form method="GET">
      <input type="text" placeholder="Shirt" name="search">
      <button type="submit">Search</button>
    </form>
    <form method="POST">
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
  }
};
</script>
