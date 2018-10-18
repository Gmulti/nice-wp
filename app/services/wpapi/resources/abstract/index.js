class AbstractResource {
    resourceName = ''

    constructor(client) {
        this.client = client
    }

    all = async (params = {}) => {
        const response = await fetch(
            `${this.client.getBaseFetchUrl()}/${this.resourceName}`
        )
        return await response.json()
    }

    getById = async id => {
        const response = await fetch(
            `${this.client.getBaseFetchUrl()}/${this.resourceName}/${id}`
        )
        return await response.json()
    }
}

export default AbstractResource
