

export default {

     data :() => ({
        sorted: false,
        num_list: [],
        delay: 1000,
        list_size: 60,
        list_min:2,
        list_max: 500,
        compare_val_1: 0,
        compare_val_2:0 ,
        compare_val_3:0 ,
        starting_color: 'aqua',
        active_color: 'red',
        final_color: 'purple',
     }),
     props: {
        msg: String
      },
     methods: {
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
        /*
         SORTING ALGORITHMS
        */
        quickSort(){
            console.log("Running Merge Sort")

            this.quickSortHelper(this.num_list, 0, this.num_list.length -1)
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
            await this.sleep(5)
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
                        await this.sleep(5) // short delay so user can see the animation
                        is_sorted = false;
                    }
            }
            counter =+ 1  
            }
        this.sorted = true; // changes color to finalColor
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