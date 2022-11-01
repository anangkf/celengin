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
    handler: 'function' ,
    type: 'handler'
  },
  {
    name: 'Feedback',
    handler: 'function',
    type: 'handler'
  },
]

export default authorized;