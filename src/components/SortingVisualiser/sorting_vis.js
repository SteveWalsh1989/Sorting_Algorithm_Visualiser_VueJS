
export default {

     data :() => ({
        num_list: [],
        list_size: 150,
        list_min:2,
        list_max: 500,
        index_compare_val_1: 0,
        index_compare_val_2:0 ,
        startingColor: 'aque',
        activeColor: 'red',


     }),
     props: {
        msg: String
      },

     methods: {
         // clears and resets the array with new numbers 
        resetList(){

            // clear list
            this.num_list = []

            // populate list with random ints
            for(let i = 1; i < this.list_size; i++){
                this.num_list.push(this.randomIntFromInterval(this.list_min, this.list_max))
            }
            this.num_list =  this.num_list.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            })

            console.log("Before", this.num_list)

        },
        // generates random in between min and max params 
        randomIntFromInterval(min, max){
            return Math.floor(Math.random() * ( max - min + 1)) + min
    
        },
        /*
         SORTING ALGORITHMS
        */
       mergeSort(){
            console.log("Running Merge Sort")
       },
       bubbleSort(){
        
        var is_sorted = false;
        var counter = 0;

        while(!is_sorted){

            is_sorted = true;

            for( let i = 0; i < (this.num_list.length - 1 - counter); i++){

                // set compared values for coloring
                this.index_compare_val_1 = this.num_list[i]
                this.index_compare_val_2 = this.num_list[i +1]


                // check if values need to be swapped
                if(this.num_list[i] > this.num_list[i + 1]){
                
                    this.swapNumbersInArray(i, i+1)

                    is_sorted = false;
                }
            }
            counter =+ 1

        }

        console.log("After", this.num_list)

       },
       // swaps two values positions with each other 
       swapNumbersInArray(index_1, index_2){
        var a = this.num_list[index_2] 
        this.num_list.splice(index_2, 1, this.num_list[index_1] );
        this.num_list.splice(index_1, 1, a );

     
       },
       
    },

    created(){
        // reset list on creation
        this.resetList() 

    },


  }