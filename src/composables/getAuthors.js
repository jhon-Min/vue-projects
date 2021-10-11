import { ref } from '@vue/reactivity'

const getAuthors = () => {
    let authors = ref([]);
    let error = (null)

    const load = async () => {

        try {
            let data = await fetch(' http://localhost:3000/authors')
            if (!data.ok) {
                throw Error('No data available')
            } else {
                authors.value = await data.json();
            }
        } catch (err) {
            error.value = err.message
            console.log(error);
        }
    }

    return {authors, load}
}

export default getAuthors