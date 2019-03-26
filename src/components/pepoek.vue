<template>
    <div>
        <v-layout align-center justify-center fill-height>            
            <v-flex xs12 sm12 md8 lg6>
                <v-card>
                    <v-layout align-center justify-center fill-height>
                        <v-flex xs12 sm12 md12 lg12>
                            <v-img :src="rata_url" alt="pepo"></v-img>
                            <v-card-title style="padding:0px"  primary-title>
                                <v-layout align-center justify-center fill-height>
                                    <v-flex xs12 sm12 md12 lg12>
                                        <h3 class="accent headline">El que se va a casar</h3>
                                        <div class="card-text" > {{ card_text }} </div>
                                    </v-flex>
                                </v-layout>
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                </v-card>
                
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    data(){
        return{
            card_text:"Pegandose una automamada",
            rata_url:require('../assets/img/rata.jpg')
        }
    }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');

h3{
    font-family: 'Fjalla One', sans-serif;
    font-size: 5vw;    
    text-align: center;
    margin:0px;
    color:snow;
    
}
.card-text{
    font-family: 'Fjalla One', sans-serif;
    font-size: 4vw;
    padding: 1vw;
    text-align:center;

}
   
</style>