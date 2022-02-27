import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from "../../components/Texto";
//import Texto from "../../components/Texto";
import Detalhes from "./Componentes/Detalhes";
import Topo from "./Componentes/Topo";


export default function Cesta() {
    return <>
        <Topo/>
        <View style={estilos.cesta}>
           <Detalhes/>
           <TouchableOpacity style={estilos.buttonStyle}>
                <Texto style={{color: "white",}}>Confirmar</Texto>
            </TouchableOpacity>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonStyle: {
        margin: 36,
        marginTop: 90,
        paddingVertical: 15,
        backgroundColor: "#754e9c",
        alignItems: "center",
        borderRadius: 12,
    }
})