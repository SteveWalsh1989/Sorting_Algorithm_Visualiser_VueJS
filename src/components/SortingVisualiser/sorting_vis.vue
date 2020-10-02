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
      <transition-group id="example-1" tag="ul">
        <li v-for="item in num_list" :key="item.id">
          <!-- set the height of the div based on its numerical value -->
          <div class="list_bar" v-if="item.val === compare_val_1 || item.val === compare_val_2"  v-bind:style="{height: item.val + 'px', backgroundColor: activeColor}"></div>
 
          <div class="list_bar" v-else v-bind:style="{height: item.val + 'px', backgroundColor: startingColor}"></div>

        </li>
      </transition-group>
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



