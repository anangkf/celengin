const authorized = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    type: 'anchor'
  },
  {
    name: 'Keinginanku',
    path: '/keinginan',
    type: 'anchor'
  },
  {
    name: 'Beri rating',
    handler: 'review' ,
    type: 'handler'
  },
  {
    name: 'Feedback',
    handler: 'feedback',
    type: 'handler'
  },
]

export default authorized;