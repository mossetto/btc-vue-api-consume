window.addEventListener('load', () =>{
    const vm = new Vue({
        el: '#app',
        data: {
            clicked: true,
            titulo: 'BITCOIN PRICE VIEWER',
            cantidad: 1,
            resultado: 'usd',
            bitcoinData: {
                time: null,
                priceusd: null,
                priceeur: null,
                pricegbp: null
            }
            
        },
        methods: {
            
            usd: function () {
                this.element.style.color = "red"
              },
            eur: function (event) {

              },
            gbp: function (event) {

              }
        },
        created: function(seleccionado){

            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((val)=>{

                this.bitcoinData = val.data
                this.bitcoinData.time = val.data.time.updated
                this.bitcoinData.priceusd = val.data.bpi.USD.rate_float
                this.bitcoinData.priceeur = val.data.bpi.EUR.rate_float
                this.bitcoinData.pricegbp = val.data.bpi.GBP.rate_float

                console.log(this.bitcoinData)
                // console.log(this.bitcoinData.time)
                // console.log(this.bitcoinData.price)

            })
            .catch((err)=> {
                console.log(error)

            })
        }

    })


    var entrar = document.getElementById('btn-entrar')
    var layer = document.getElementById('layer')
    var contenido = document.getElementById('contenido')


    entrar.addEventListener("click", toggleBtn)
    
    function toggleBtn(){
        layer.classList.toggle("layer-off")
        layer.classList.toggle("layer-on")
        contenido.style.display = contenido.style.display === 'display' ? '' : 'display';
    }
})
