// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import comment from './comment'

export const schemaTypes = [
  // The following are document types which will appear
  // in the studio.
  post,
  author,
  category,
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
  comment,
]
