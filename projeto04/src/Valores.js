import React from 'react'
import {Text, View, Button, StyleSheet, Alert}  from 'react-native'


const gerarNumeroAleatorio=()=>{
    var num_1= Math.random();
    var num_2= Math.random();
    var num_3= Math.random();
    var num_4= Math.random();
    var num_5= Math.random();

    num_1  = Math.floor(num_1*10)
    num_2 = Math.floor(num_2*10)
    num_3 = Math.floor(num_3*10)
    num_4 = Math.floor(num_4*10)
    num_5 = Math.floor(num_5*10)

    var resultado = num_1 + num_2 + num_3 + num_4 + num_5 / 5;
    
    alert("São escolhidos 5 numeros aleatoriamente dentro de um range de 0 a 49 ao clicar no botão")
    alert(num_1)
    alert(num_2)
    alert(num_3)
    alert(num_4)
    alert(num_5)

     alert(" E uma conta é feita com os numero Aleatorios sorteados como foi pedido!\n"+numero_aleatorio+"+"+numero_aleatorio1+"+"+numero_aleatorio2+"+"+numero_aleatorio3+"+"+numero_aleatorio4+"="+operacao);

}
export default (param)=>{
    console.warn(param)
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Random Numbers</Text>
 
            <Text style={styles.texto}>Gerando 5 números aleatórios e fazendo uma operação</Text>
        

            <Button style={styles.botao}
                title="Iniciar"
                onPress={gerarNumeroAleatorio}
                color= "#06cf60"
            > 
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'beige',
      borderWidth: 5,
    },
    titulo:{
        paddingBottom:40,
    },
    texto:{
        paddingBottom:30,
    },
    botao:{
        flex:1,
        paddingBottom:20,
    }
  });
