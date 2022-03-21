export const pages = [
  {
    path: 'flow',
    name: 'flow',
    component: () => import('@/views/flow'),
    meta: {
      title: '流量'
    }
  },
  {
    path: 'relation',
    name: 'relation',
    component: () => import('@/views/relation'),
    meta: {
      title: '关系'
    }
  },
  {
    path: 'equipment',
    name: 'equipment',
    component: () => import('@/views/equipment'),
    meta: {
      title: '设备'
    }
  }
];
