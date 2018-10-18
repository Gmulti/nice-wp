class WordPressApiClient {
    constructor(params) {
        const { baseUri, version, baseRoute } = params

        this.baseUri = baseUri
        this.version = version
        this.baseRoute = baseRoute
    }

    getBaseFetchUrl = () => {
        return `${this.baseUri}/${this.baseRoute}/${this.version}`
    }
}

export default WordPressApiClient
