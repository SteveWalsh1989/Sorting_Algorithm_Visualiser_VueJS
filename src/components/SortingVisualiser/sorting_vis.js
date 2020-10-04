

export default {

     data :() => ({
        sorted: false,
        num_list: [],
        delay: 1000,
        list_size: 75,
        list_min:2,
        list_max: 500,
        compare_val_1: 0,
        compare_val_2:0 ,
        compare_val_3:0 ,
        starting_color: 'aqua',
        active_color: 'red',
        final_color: 'purple',
        algorithm_details: '',
        speed_slider_val: 0,
     }),
     props: {
        msg: String
      },
     methods: {
    
        /******************
         SORTING ALGORITHMS
        *******************/
        async quickSort(){
            // reset list 
            this.resetList()

            // set title and details 
            this.algorithm_details = "Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,  according to whether they are less than or greater than the pivot.  \n  The sub-arrays are then sorted recursively."
            console.log("Running Quick Sort")

            this.quickSortHelper( 0, this.num_list.length-1)


       },
        async quickSortHelper(start_index, end_index){
            
            // base case 
            if( start_index >= end_index){
                return
            }

            // set up pivot
            var pivot_index = start_index

            // set up left / right indexes
            var left_index  = start_index + 1
            var right_index = end_index

            // apply quick sort logic 

            while(right_index >= left_index) {

                // set compared values for coloring
                this.compare_val_1 = this.num_list[left_index];
                this.compare_val_2 = this.num_list[right_index];  
                this.compare_val_3 = this.num_list[pivot_index];  

                // swap numbers 
                if(this.num_list[left_index] > this.num_list[right_index] && this.num_list[right_index] < this.num_list[pivot_index]){
                    this.swapNumbersInArray(left_index, right_index);
                }
                // move left index
                if(this.num_list[left_index] <= this.num_list[pivot_index]){
                    left_index += 1
                }
                // move right index 
                if(this.num_list[right_index] >= this.num_list[pivot_index]){
                    right_index -= 1
                }
            }

            this.swapNumbersInArray(pivot_index, right_index)
            await this.sleep(250)
            // start work on the smaller array
            var left_list_is_smaller = right_index - 1 - start_index < end_index - (right_index + 1)

            if(left_list_is_smaller){
                this.quickSortHelper(start_index, right_index - 1)
                this.quickSortHelper(right_index + 1, end_index)
            } else {
                this.quickSortHelper(right_index + 1, end_index)
                this.quickSortHelper(start_index, right_index - 1)
            }

           
        },
        async bubbleSort(){
            this.algorithm_details = "Bubble Sort is a simple sorting algorithm that swaps adjacent elements in the array if the value is lower than its predecessor. \n It will keep iterating until there are no more adjacent values are lower than the value preceding it confirming the array is then sorted. ";
            console.log("Running Bubble Sort")
            var is_sorted = false;
            var counter = 0;
            while(!is_sorted){
                is_sorted = true;
                for( let i = 0; i < (this.num_list.length - 1 - counter); i++){
                    // set compared values for coloring
                    this.compare_val_1 = this.num_list[i];
                    this.compare_val_2 = this.num_list[i +1];     
                    // check if values need to be swapped
                    if(this.num_list[i] > this.num_list[i + 1]){
                        this.swapNumbersInArray(i, i+1)
                        await this.sleep(20) // short delay so user can see the animation
                        is_sorted = false;
                    }
            }
            counter =+ 1  
            }
        this.sorted = true; // changes color to finalColor
        },
        async insertionSort(){

            // reset list 
            this.resetList()

            // set title and details 
            this.algorithm_details = "Insertion Sort is a simple sorting algrithm that virtually splits the array into sorted and unsorted secctions and then one at  a time will move values from the unsorted array into their correct [osition within the sorted array. \n It is not as efficent sorting algorithm when dealing with large datasets as other sorting algorithms. "
            console.log("Running Insertion Sort")

            for(let i = 1; i < this.num_list.length; i++){

                // initialise number trying to insert
                var trying_num = i;

                // highlight value trying to insert 
                this.pivot_index = trying_num;

                // main insertion sort logic
                while( trying_num > 0 && this.num_list[trying_num] < this.num_list[trying_num-1]){
                    this.swapNumbersInArray(trying_num, trying_num-1)
                    await this.sleep(20) // short delay so user can see the animation
                    trying_num -= 1;
                }  
            }
            this.sorted = true; // changes color to finalColor

        },
        async selectionSort(){
            // reset list 
            this.resetList()

            // set algo details 
            this.algorithm_details = "Selection Sorts splits an array into two sub arrays of sorted and unsorted. It then inserts the lowest value from the unsorted array to the sorted until it contains a fully sorted array.";
            console.log("Running Selection Sort")

            // track first num in unsorted sub list
            var current_index = 0;

            // coloring
            this.compare_val_1 = current_index

            while( current_index < (this.num_list.length - 1)){
                // locate index of smallest num
                var smallext_index = current_index;

                // iterate over unsorted list
                for( let i = (current_index + 1); i < this.num_list.length; i++){
                    if( this.num_list[smallext_index] > this.num_list[i]){
                        smallext_index = i;
                    }
                }
                // swap smallest num with current index 
                this.swapNumbersInArray(current_index, smallext_index)
                await this.sleep(100)
                current_index +=1
            }

            this.sorted = true; // changes color to finalColor
        },
         /******************
           OTHER FUNCTIONS
          *******************/
        // clears and resets the array with new numbers 
        resetList(){
            // clear list
            this.sorted = false;
            this.num_list = []
            // populate list with random ints 
            for(let i = 1; i < this.list_size; i++){
                this.num_list.push(this.randomIntFromInterval(this.list_min, this.list_max))
            }
            // remove duplicates 
            this.num_list =  this.num_list.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            })
        },
        // generates random in between min and max params 
        randomIntFromInterval(min, max){
            return Math.floor(Math.random() * ( max - min + 1)) + min
        },

        // swaps two values positions with each other 
        swapNumbersInArray(index_1, index_2){
            var a = this.num_list[index_2]
            this.num_list[index_2] = this.num_list[index_1]
            this.num_list[index_1] = a
        },
        sleep(ms){
            return new Promise((resolve) => {
            setTimeout(resolve, ms);
            });
        },

       
    },
    
    created(){
        // reset list on creation
        this.resetList() 

    },
 


  }