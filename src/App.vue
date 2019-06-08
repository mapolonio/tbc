<template>
  <div id="app">
    <h1>Hello World! "{{ message }}"</h1>
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
