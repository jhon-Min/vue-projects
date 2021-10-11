import { ref } from '@vue/reactivity'

const getCategory = () => {
    let categories = ref([]);
    let error = (null)

    const categoryLoad = async () => {

        try {
            let data = await fetch('http://localhost:3000/book-types')
            if (!data.ok) {
                throw Error('No data available')
            } else {
                categories.value = await data.json();
            }
        } catch (err) {
            error.value = err.message
            console.log(error);
        }
    }

    return {categories, categoryLoad}
}

export default getCategory