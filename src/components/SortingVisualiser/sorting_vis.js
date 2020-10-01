export default {

     data :() => ({
        num_list: [],
        list_size: 150,
        list_min:2,
        list_max: 500,


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
        console.log("Running Bubble Sort")

       }

    },

    created(){
        // reset list on creation
        this.resetList() 
    },


  }