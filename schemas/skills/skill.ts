const skill = {
  name: 'skill',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the skill. ex : NodeJs',
    },
    {
      name: 'svg_path',
      type: 'array',
      title: 'Paths',
      description: 'svg icon paths',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
export default skill
