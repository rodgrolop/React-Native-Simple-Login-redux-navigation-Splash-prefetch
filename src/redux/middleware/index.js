import coreMiddleware from './core'
import userMiddleware from './user'

export default [
    ...coreMiddleware,
    ...userMiddleware,
]
