import { ref } from '@vue/reactivity'

const getBook = (id) => {
    let book = ref('')

    const bookLoad = async () => {
        try {

            await new Promise(x => {
                setTimeout(x, 1000)
            })

            let data = await fetch('http://localhost:3000/products/' + id)
            
            if (!data.ok) {
                throw Error('No data available')
            }

            book.value = await data.json()
            
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return {book, bookLoad}
}

export default getBook