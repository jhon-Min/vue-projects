import { ref } from '@vue/reactivity'

const getBooks = () => {
    let books = ref([])
    let error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/products')
            
            if (!data.ok) {
                throw Error('No data available')
            }

            books.value = await data.json()
            
        }
        catch (err) {
            error.value = err.message
            console.log(err.value);
        }
    }

    return {books, error, load}
}

export default getBooks