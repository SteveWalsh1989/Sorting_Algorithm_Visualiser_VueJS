<template>
 <!-- ----------------
    HEADER
  ---------------- -->
  <div class="main">
   

<!-- ----------------
   BUTTONS
  ---------------- --> 
  <div >
    <ul class="header">
      <li class="header-title"> <h1>{{ msg }}</h1></li>
      <li class="header-btns"><button class="buttons" @click="resetList()">Generate New Array</button></li>
      <li class="header-btns"><button class="buttons" @click="bubbleSort()">Bubble Sort</button></li>
      <li class="header-btns"><button class="buttons" @click="quickSort()">Quick Sort</button></li>
      <li class="header-btns"><button class="buttons" @click="insertionSort()">Insertion Sort</button></li>

    </ul>
  </div>


  </div>

 <!-- ----------------
    MAIN VISUALISER
  ---------------- --> `
    <div class="list_container">
      <!-- List to store all values in the list --> 
      <ul>
        <li v-for="val in num_list" :key="val">
          <!-- set the height of the div based on its numerical value -->
          <div class="list_bar" v-if="val === compare_val_1 || val === compare_val_2 && !sorted"  v-bind:style="{height: val + 'px', backgroundColor: active_color}"></div>
 
          <div class="list_bar" v-else-if="sorted"  v-bind:style="{height: val + 'px', backgroundColor: final_color}"></div>

          <div class="list_bar" v-else v-bind:style="{height: val + 'px', backgroundColor: starting_color}"></div>

        </li>
      </ul>
    </div>


 
</template>

<script src="./sorting_vis.js"></script>

<style src="./sorting_vis.css" scoped></style>



