<template>
 <!-- ----------------
    HEADER
  ---------------- -->
  <div class="main">
    <h1>{{ msg }}</h1>



 <!-- ----------------
    MAIN VISUALISER
  ---------------- --> `
    <div class="list_container">
      <!-- List to store all values in the list --> 
      <ul id="example-1">
        <li v-for="val in num_list" :key="val">
          <!-- set the height of the div based on its numerical value -->
          <div class="list_bar" v-if="val === index_compare_val_1 || val === index_compare_val_2"  v-bind:style="{height: val + 'px', backgroundColor: activeColor}"></div>
 
          <div class="list_bar" v-else v-bind:style="{height: val + 'px', backgroundColor: startingColor}"></div>

        </li>
      </ul>
    </div>


 <!-- ----------------
   BUTTONS
  ---------------- --> 
  <div >
    <button class="buttons" @click="resetList()">Generate New Array</button>
    <button class="buttons" @click="mergeSort()">Merge Sort</button>
    <button class="buttons" @click="bubbleSort()">Bubble Sort</button>
  </div>


  </div>
</template>

<script src="./sorting_vis.js"></script>

<style src="./sorting_vis.css" scoped></style>



