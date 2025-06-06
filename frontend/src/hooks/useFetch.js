import { useState, useEffect } from "react"


function useFetch(url) {

    const [resourceData, setResourceData] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const [isError, setIsError] = useState(null)

    useEffect(() => {

        const abortControl = new AbortController() //AbortControl helps us with the clean-up function

        setTimeout(() => {
            fetch(url, { signal: abortControl.signal }) //We pass abortControl.signal as the second parameter
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
                    if (error.name === "AbortError") {
                        console.log("Fetch Aborted...")
                    } else {
                        setIsError(error.message)
                        setIsLoading(false)
                    }
                })
        }, 200)

        return () => abortControl.abort() //useEffect clean-up function
    }, [url])

    return { resourceData, isLoading, isError }
}

export default useFetch