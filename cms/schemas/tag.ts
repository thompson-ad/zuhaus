import { AiFillTags as icon } from 'react-icons/ai'

export default {
  name: 'tag',
  title: 'Tags',
  type: 'document',
  icon,
  fields: [
    {
      name: 'tag',
      title: 'Content Tag',
      type: 'string',
      description: 'Add tags to be attributed to content',
    },
  ],
}
