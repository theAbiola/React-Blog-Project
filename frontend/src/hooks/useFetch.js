import { useState, useEffect } from "react"


function useFetch(url) {

    const [resourceData, setResourceData] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const [isError, setIsError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error("Error fetching data, use a valid URL or endpoint")
                    }
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    setResourceData(data)
                    setIsLoading(false)
                    setIsError(null)
                })
                .catch(error => {
                    setIsError(error.message)
                    setIsLoading(false)
                })
        }, 1000)

        return console.log("cleaning up ...")
    }, [url])

    return { resourceData, isLoading, isError }
}

export default useFetch