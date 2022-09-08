
let customFetch = (data) => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(data)
        } ,3000 )
    })
}
export default customFetch