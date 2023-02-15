import Vue from 'vue'


const adapter = promise => { 
    return promise
            .then(response => response.body.result)
            .catch(error => console.log('API Error', error))
}


let root = '/api/'

export default {

    categories : {
        all(){ 
            return adapter(Vue.http.get(root + 'categories.json'))
        },                    
        byId(id){ 
            return adapter(Vue.http.get(root + 'categories/' + id + '.json'))
        },      
        add(category){
            return adapter(Vue.http.post(root + 'categories.json', category))
        },
        save(category){ 
            return adapter(Vue.http.post(root + 'categories/' + category.id + '.json', category))
        },
        delete(category){ 
            return adapter(Vue.http.delete(root + 'categories/' + category.id + '.json'))
        }
    },

    images : {
        all(){
            return adapter(Vue.http.get(root + 'images.json'))
        },
        byId(id){
            return adapter(Vue.http.get(root + 'images/' + id + '.json'))
        },
        add(image){
            return adapter(Vue.http.post(root + 'images.json', {
                data : image.data,
                categoryId : image.categoryId
            }))
            
        },
        save(image){

            const url = root + 'images/' + image.id + '.json'

            return adapter(Vue.http.post(url, image))
        },
        delete(image){
            return adapter(Vue.http.delete(root + 'images/' + image.id + '.json'))
        }
    },

    feedback : {
        all(forceAll){

            const url = root + 'feedback.json' + (forceAll ? '?all=1' : '')

            return adapter(Vue.http.get(url))
        },
        save(response){
            
            const url = root + 'feedback/' + response.id + '.json'

            return adapter(Vue.http.post(url, response))
        },
        delete(response){
            return adapter(Vue.http.delete(root + 'feedback/' + response.id + '.json'))
        }
    },

    settings : {
        all(){
            return adapter(Vue.http.get(root + '/settings/general.json'))
        },
        save(response) {
            const url = root + 'settings/general.json'

            return adapter(Vue.http.post(url, response))
        }
    }

}