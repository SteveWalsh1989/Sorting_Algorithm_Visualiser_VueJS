<template>
 <!-- ----------------
    HEADER
  ---------------- -->
  <div class="main">
   

<!-- ----------------
   HEADER
  ---------------- --> 
  <div>
    <ul class="header">
      <li class="header-title"> <h1>{{ msg }}</h1></li>
      <li class="header-btns"><button class="buttons" @click="resetList()">Generate New Array</button></li>
      <li class="header-btns"><button class="buttons" @click="bubbleSort()">Bubble Sort</button></li>
      <li class="header-btns"><button class="buttons" @click="quickSort()">Quick Sort</button></li>
      <li class="header-btns"><button class="buttons" @click="insertionSort()">Insertion Sort</button></li>
      <li class="header-btns"><button class="buttons" @click="selectionSort()">Selection Sort</button></li>

    </ul>
  </div>
  


 <!-- ----------------
   ALGO DETAILS
  ---------------- --> 
  <div class="algorithm_container">
    <div class = "algorithm_information">
        <p class="algorithm_details">{{algorithm_details}}</p>     
    </div>

    <!-- ----------------
        MAIN VISUALISER
      ---------------- --> 
        <div class="list_container">
          <!-- List to store all values in the list --> 
          <ul>
            <li v-for="val in num_list" :key="val">
              <!-- set the height of the div based on its numerical value -->
              <div class="list_bar" v-if="(val === compare_val_1 || val === compare_val_2) && !sorted"  v-bind:style="{height: val + 'px', backgroundColor: active_color}"></div>
    
              <div class="list_bar" v-else-if="sorted"  v-bind:style="{height: val + 'px', backgroundColor: final_color}"></div>

              <div class="list_bar" v-else v-bind:style="{height: val + 'px', backgroundColor: starting_color}"></div>

            </li>
          </ul>
        </div>
  </div>



 </div>
</template>

<script src="./sorting_vis.js"></script>

<style src="./sorting_vis.css" scoped></style>



