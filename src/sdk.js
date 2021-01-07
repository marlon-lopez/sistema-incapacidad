import * as contentful from 'contentful'

const SPACE_ID = '60jzxa7eansf'
const ENVIRONMNET = 'master'
const TOKEN = 'MRRniyP9JvN763qDARW7zHScp8RWALTIW4s1lnTFN7E'
const CONTENT_TYPE = 'users'

const client = contentful.createClient({
  space: SPACE_ID,
  environment: ENVIRONMNET,
  accessToken: TOKEN,
})

export const getEntries = async () => {
  try {
    const { items } = await client.getEntries({
      content_type: CONTENT_TYPE,
    })
    console.log(dataTransformer(items))
  } catch (error) {
    return []
  }
}

const dataTransformer = (items) => {
  return items.map((item) => itemTranformer(item))
}

const itemTranformer = ({ fields, sys }) => {
  return {
    ...fields,
    id: sys.id,
    createdAt: sys.createdAt,
    updatedAt: sys.updatedAt,
  }
}
