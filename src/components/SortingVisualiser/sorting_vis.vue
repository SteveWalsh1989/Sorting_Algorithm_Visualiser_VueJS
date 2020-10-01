<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


    <div class="list_container">
      <ul id="example-1">
      
      
      <li v-for="val in num_list" :key="val">

        <div class="list_bar" v-bind:style="{height: val + 'px'}">
        </div>



      </li>
      </ul>
    </div>
  </div>


 
</template>

<script src="./sorting_vis.js"></script>

<style src="./sorting_vis.css" scoped></style>



