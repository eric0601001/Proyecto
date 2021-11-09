Vue.component("alerta", {
    props: ['tipo', 'posicion','frase','listado'],
    template: "#mensajeAlerta",
    methods: {
        ocultarMensaje(){
            this.$emit('ocultar');
        }
    },
    data() {
        return {
            alerta: this.frase
        };
    }
});
const app = new Vue({
    el: "#cont",
    data: {
        tipos:['Aumento de sentimientos de depresión y ansiedad','Obesidad','Colesterol alto'],
        mostrarBienvenida: false,
        mostrarInicio: false,
        mostrarAlerta: false,
        mostrarError: false,
        nuevoProductoNombre:'',
        nuevoProductoCantidad:0,
        nuevoProductoPrecio:0,
        productos:[
            {productoNombre:'Proteina Isolate',productoCantidad:2,precioUnico:149,precioTotal:this.productoCantidad*this.precioUnico},
            {productoNombre:'BCAAS',productoCantidad:2,precioUnico:99,precioTotal:0},],
        numProducts:2,
    },
    methods:{
        agregar:function (){
            if (this.nuevoProductoNombre && this.nuevoProductoCantidad && this.nuevoProductoPrecio){
                this.productos.push({productoNombre: this. nuevoProductoNombre,
                productoCantidad: this. nuevoProductoCantidad, precioUnico: this.nuevoProductoPrecio, precioTotal: this.precioTotal}); 
                this.nuevoProductoNombre='';
                this.nuevoProductoCantidad= 0;
                this.nuevoProductoPrecio= 0;
                this.numProducts++;}}, 
        suma:function (){
                for (producto of this.productos){
                producto.precioTotal=producto.productoCantidad*producto.precioUnico;}},},
        beforeMount(){
            for (producto of this.productos){
                producto.precioTotal=producto.productoCantidad*producto.precioUnico;}},
    computed:{precioTotal: function(){
                return this.nuevoProductoCantidad*this.nuevoProductoPrecio;},
            subtotal: function (){
                var subtotal=0;for (producto of this.productos){ 
                subtotal+=producto.precioTotal;}subtotal=subtotal.toFixed(); 
                return parseFloat(subtotal);},
            iva: function (){
                var iva=0;for (producto of this.productos){
                iva+=(producto.precioTotal * 0.16);}
                iva=iva.toFixed(2);return parseFloat(iva);},
            total: function (){
                var total=this.subtotal+this.iva; 
                total=parseFloat(total).toFixed(2); 
                return total;}, 
            numProducts: function (){}}
});
