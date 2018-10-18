import WordPressApiClient from './client'
import Posts from './resources/posts'
import Pages from './resources/Pages'

const client = new WordPressApiClient({
    baseUri: 'http://nice-wp.local',
    version: 'v2',
    baseRoute: 'wp-json/wp'
})

export default {
    posts: new Posts(client),
    pages: new Pages(client)
}
