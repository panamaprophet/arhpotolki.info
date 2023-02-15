<template>
	<div class="block main">

        <div class="label__text">
            Основные настройки
        </div>

        <parameter v-for="setting in settings" 
            :key="setting.key" 
            :value="setting.value" 
            :type="setting.type">
        </parameter>


        <label class="parameter" v-for="setting in settings" v-if="setting.type !== 'table'">
            <span class="parameter__title">
                {{setting.title}}
            </span>

            <input 
                v-if="setting.key && typeof(setting.value) !== undefined" 
                type="text" 
                :placeholder="setting.title" 
                v-model="setting.value" 
                @change="saveChanges(setting)" 
                class="input-field" 
            />
        </label>

        <label class="parameter" v-if="price">
            <div class="parameter__title">
                Цена за квадратный метр
            </div>
            <table class="parameter-price">
                <thead>
                    <tr>
                        <th>Количество</th>
                        <th>КНР</th>
                        <th>Германия</th>
                        <th colspan="2"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in price.value" track-by="$index">
                        <td><input class="input-field" type="text" :value="index" @change="savePrice"/></td>
                        <td><input class="input-field" type="text" :value="item[0]" @change="savePrice"/></td>
                        <td><input class="input-field" type="text" :value="item[1]" @change="savePrice"/></td>
                        <td><button class="button button--submit" @click="addRow($event)">Добавить</button></td>
                        <td><button class="button button--submit" @click="removeRow($event)">Удалить</button></td>
                    </tr>
                </tbody>
            </table>
        </label>

        <label class="parameter" v-if="discountFlexible">
            <div class="parameter__title">
                Скидка от площади
            </div>
            <table class="parameter-discount">
                <thead>
                    <tr>
                        <th>Метраж</th>
                        <th>КНР</th>
                        <th>Германия</th>
                        <th colspan="2"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in discountFlexible.value" track-by="$index">
                        <td><input class="input-field" type="text" :value="index" @change="saveDiscount"/></td>
                        <td><input class="input-field" type="text" :value="item[0]" @change="saveDiscount"/></td>
                        <td><input class="input-field" type="text" :value="item[1]" @change="saveDiscount"/></td>
                        <td><button class="button button--submit" @click="addRow($event, 'discount')">Добавить</button></td>
                        <td><button class="button button--submit" @click="removeRow($event, 'discount')">Удалить</button></td>
                    </tr>
                </tbody>
            </table>
        </label>

        <button class="button button--submit" @click="saveChanges">Сохранить изменения</button>

    </div>
</template>

<script>
    import {find} from 'lodash/fp'

	export default {

		computed : {
            settings() { 

                return this.$store.state.settings 
            },
            
            price(){ 
                const raw = find(['key', 'price'], this.settings) 

                return {
                    key: 'price',
                    value: raw.value ? JSON.parse(raw.value) : {}
                }
            },
            
            discountFlexible(){
                const raw = find(['key', 'discountFlexible'], this.settings) 

                return {
                    key: 'discountFlexible',
                    value: raw.value ? JSON.parse(raw.value) : {}
                }
            }
        },

		methods: {
			saveChanges(action) {
				console.log('saving changes', action)
				this.$store.dispatch('saveSettings', action)
                this.savePrice()
			},

            savePrice(){
                var table = document.querySelectorAll('.parameter-price tbody tr')
                var serializedPrice = {}

                table.forEach(row => {
                    const index = row.children[0].children[0].value
                    const values = [
                        row.children[1].children[0].value,
                        row.children[2].children[0].value
                    ]

                    serializedPrice[index] = values
                })

                this.$store.dispatch('saveSettings', {
                    key: 'price',
                    value: JSON.stringify(serializedPrice)
                });

                console.log('savedPrice')
            },

//{"0":["10","10"],"10":["15","15"],"15":["20","20"]}
            saveDiscount(){
                var table = document.querySelectorAll('.parameter-discount tbody tr')
                var result = {}

                table.forEach(row => {
                    const index = row.children[0].children[0].value
                    const values = [
                        row.children[1].children[0].value,
                        row.children[2].children[0].value
                    ]

                    result[index] = values
                })

                this.$store.dispatch('saveSettings', {
                    key: 'discountFlexible',
                    value: JSON.stringify(result)
                });
            },

            addRow(event, type) {
                const button = event.currentTarget
                const currentRow = button.parentNode.parentNode
                const table = currentRow.parentNode
                const newRow = currentRow.cloneNode(true)

                newRow.querySelectorAll('input').forEach(input => { 
                    input.value = ''; 
                    input.addEventListener('change', this[ type === 'discount' ? 'saveDiscount' : 'savePrice' ].bind(this))
                })

                const buttons = newRow.querySelectorAll('button')

                buttons[0].addEventListener('click', this.addRow.bind(this))
                buttons[1].addEventListener('click', this.removeRow.bind(this))

                table.insertBefore(newRow, currentRow.nextSibling)
            },

            removeRow(event, type){
                const button = event.currentTarget
                const currentRow = button.parentNode.parentNode

                currentRow.remove()

                if (type === 'discount') {
                    this.saveDiscount()
                } else {
                    this.savePrice()
                }
            }
		}
	}
</script>