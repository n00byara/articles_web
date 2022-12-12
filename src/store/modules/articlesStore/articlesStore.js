import { articlesState } from './components/articlesState.js'
import { articlesMutations } from './components/articlesMutations.js'
import { articlesActions } from './components/articlesActions.js'




export const articlesStore = {
    state: articlesState,
    mutations: articlesMutations,
    actions: articlesActions,
}