import { MdPerson as icon } from 'react-icons/md'

export default {
  name: 'specialist',
  title: 'Specialists',
  type: 'document',
  icon,
  fields: [
    { name: 'firstName', title: 'First Name', type: 'string' },
    { name: 'secondName', title: 'Second Name', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'quote', title: 'Quote', type: 'text' },
    { name: 'url', title: 'Site URL', type: 'url' },
    { name: 'facebookURL', title: 'Facebook URL', type: 'url' },
    { name: 'twitterURL', title: 'Twitter URL', type: 'url' },
  ],
  preview: {
    select: {
      title: 'firstName',
      media: 'image',
    },
  },
}
