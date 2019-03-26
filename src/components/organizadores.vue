<template>
    <div>
    <div v-for="item in organizadores" :key="item.nombre">
        <v-layout align-center justify-center fill-height>
            <v-flex xs12 sm12 md8 lg6>
                <v-card>
                    <v-layout align-center justify-center fill-height>
                        <v-flex xs12 sm12 md12 lg12>
                            <v-img :src="item.foto" alt="pepo"></v-img>
                            <v-card-title style="padding:0px"  primary-title>
                                <v-layout align-center justify-center fill-height>
                                    <v-flex xs12 sm12 md12 lg12>
                                        <h3 class="accent">{{item.nombre}}</h3>
                                        <div class="card-text" > {{ item.card_text }} </div>
                                    </v-flex>
                                </v-layout>
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                </v-card>            
            </v-flex>
        </v-layout>
    </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            organizadores:[
                {
                    nombre:"El Bambi",
                    foto:require('../assets/img/bambi.jpg'),
                    card_text:'El venado de mariposon como siempre'
                },
                {
                    nombre:"El conde",
                    foto:require('../assets/img/sireno.png'),
                    card_text:'Puta de antro'
                }
            ]            
        }
    }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Fjalla+One');

h3{
    font-family: 'Fjalla One', sans-serif;
    font-size: 4vw;    
    text-align: center;
    margin:0px;
    color:snow;
    
}
.card-text{
    font-family: 'Fjalla One', sans-serif;
    font-size: 3vw;
    padding: 1vw;
    text-align:center;

}
   
</style>