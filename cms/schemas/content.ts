import { MdRemoveRedEye as icon } from 'react-icons/md'

export default {
  name: 'content',
  title: 'Site content',
  type: 'document',
  icon,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'type',
      title: 'Content Type',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Article', value: 'article' },
          { title: 'Video', value: 'video' },
          { title: 'Audio', value: 'audio' },
        ],
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Fitness', value: 'fitness' },
          { title: 'Nutrition', value: 'nutrition' },
          { title: 'Mindfulness', value: 'mindfulness' },
        ],
      },
    },
    {
      name: 'specialist',
      title: 'Specialist',
      type: 'reference',
      to: [{ type: 'specialist' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
    {
      name: 'date',
      title: 'Publication date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Duration (min)',
      name: 'duration',
      type: 'number',
    },
    {
      name: 'mainContent',
      title: 'Main content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
  ],
}
