export const KEY = "25836176-b4d66cb7105f8e07a6b55e563";

export const fetchApi = (name, key, page) => {
    return fetch(`https://pixabay.com/api/?q=${name}&key=${key}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`)

}