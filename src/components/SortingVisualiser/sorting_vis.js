

export default {

     data :() => ({
        sorted: false,
        temp_list : [],
        num_list: [{
            id :0, 
            val: 0,
        }],
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
            this.temp_list = []
            this.num_list = []
            // populate list with random ints
            for(let i = 1; i < this.list_size; i++){
                this.temp_list.push(this.randomIntFromInterval(this.list_min, this.list_max))
            }
            this.temp_list =  this.temp_list.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            })
            

            for(let i = 0; i < this.temp_list.length; i++){
                this.num_list[i] = {id:1, val:1}
                this.num_list[i].id = this.temp_list[i] * 500 // adding id to try and force refresh dom by changing when swapping values
                this.num_list[i].val = this.temp_list[i]

                // console.log("this.num_list[i].val",   this.num_list[i].val
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
       async bubbleSort(){
            console.log("Running Bubble Sort")
            var is_sorted = false;
            var counter = 0;
          
            while(!is_sorted){

                is_sorted = true;

                for( let i = 0; i < (this.num_list.length - 1 - counter); i++){
                    // set compared values for coloring
                    this.compare_val_1 = this.num_list[i].val;
                    this.compare_val_2 = this.num_list[i +1].val;
                    
                    // check if values need to be swapped
                    if(this.num_list[i].val > this.num_list[i + 1].val){
                            
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
        var a = this.num_list[index_2].val 
        // this.num_list.val.splice(index_2, 1, this.num_list[index_1].val );
        // this.num_list.val.splice(index_1, 1, a );
        // changing id here too to force dom refresh as it should change the list key
        this.num_list[index_2].val = this.num_list[index_1].val
        this.num_list[index_2].id =  this.num_list[index_2].id + 1
        this.num_list[index_1].val = a
        this.num_list[index_1].id =  this.num_list[index_2].id + 1
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