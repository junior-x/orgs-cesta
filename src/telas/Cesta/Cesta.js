import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";
import Texto from "../../components/Texto";
import Detalhes from "./Componentes/Detalhes";
import Topo from "./Componentes/Topo";

export default function Cesta () {
    return <>
        <Topo/>
        <View style={estilos.cesta}>
           <Detalhes/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
})