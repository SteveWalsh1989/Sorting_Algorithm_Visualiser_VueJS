

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
        startingColor: 'aqua',
        activeColor: 'red',
        finalColor: 'purple',


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
       mergeSort(){
        console.log("Running Merge Sort")
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
                            
                        // setTimeout(()=> this.swapNumbersInArray(i, i+1) , 200);
                        //this.nextTick(this.swapNumbersInArray(i, i+1) )
                        this.swapNumbersInArray(i, i+1)
                        // this.swapNumbersInArray(i, i+1);
                        await this.sleep(5)
                        is_sorted = false;
                    }
            }
            counter =+ 1  
            
           
        }

        this.sorted = true;

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