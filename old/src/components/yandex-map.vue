<template>

    <section class="block yandex-map">
        <div class="map" id="map"></div>
    </section>

</template>

<script>

    export default {

        data(){
            return {
                apiUrl : '//api-maps.yandex.ru/2.1/?lang=ru_RU',
                centerCoordinates : [ 
                    64.57561055727548, 
                    40.50217949999998 
                ],
                zoomLevel : 17,
                mapElement : 'map',
                map : null
            }
        },

        methods : {

            loadApi(){
                
                return new Promise((resolve, reject) => {

                    let script = document.createElement('script')

                    script.src = this.apiUrl
                    script.onload = resolve
                    script.onabort = script.onerror = reject

                    this.$el.appendChild(script)
                })
            },

            onApiReady(){
                ymaps.ready(() => {

                    let map = new ymaps.Map(this.mapElement, {
                        center: this.centerCoordinates,
                        zoom: this.zoomLevel
                    })

                    let placemark = new ymaps.Placemark(this.centerCoordinates, {
                        balloonContent: 'АрхПотолки'
                    }, {
                        preset: 'islands#circleIcon',
                        iconColor: '#a6c719'
                    })

                    this.$set(this, 'map', map)
                    this.map.geoObjects.add(placemark)
                })
            }

        },

        mounted(){

            this.loadApi().then(this.onApiReady.bind(this))
        }

    }

</script>