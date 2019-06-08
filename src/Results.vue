<template>
  <div v-if="(results || ['caca']).length">
    <h2>Results</h2>
    <table>
      <tr>
        <th>License</th>
        <th>Expiration Date</th>
      </tr>
      <tr>
        <td>Warner</td>
        <td>31/12/2019</td>
      </tr>
    </table>
    <!-- <div>{{ results[0] }}</div> -->
  </div>
</template>
