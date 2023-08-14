const project = {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'valid name for project',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Project Description',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
      description: 'link of live project',
    },
    {
      name: 'repo',
      type: 'string',
      title: 'Repo',
      description: 'repo link of project',
    },

    {
      name: 'stack',
      type: 'array',
      title: 'Tech Stack',
      description: 'used tech,frameworks,libs',
      of: [
        {
          type: 'string',
        },
      ],
    },

    {
      name: 'thumbnail_desktop',
      type: 'image',
      title: 'Thumbnail Large',
      description: 'image should be 500x270 in size',
    },
    {
      name: 'thumbnail_mobile',
      type: 'image',
      title: 'Thumbnail Small',
      description: 'image should be 305x155 in size',
    },
  ],
}
export default project
