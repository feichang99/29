jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  // 每次修改配置，该值需要增加，否则不会生效。
  // 默认每隔 5 分钟自动下载配置，若想立即验证，可通过隐私模式访问。
  ver: '117',

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 63
  },

  // 节点配置
  node_map: {
    'demo-hk': {
      label: 'yd029-2点',
      lines: {
        '2.yd029.workers.dev': 1,
        'crimson-snow-3307.029sina.workers.dev': 2,
      }
   },
    'demo-sg': {
      label: 'googlehk-jz126',
      lines: {
        'googlehk.jz126.workers.dev': 1,
      }
    },
    'demok-sg': {
      label: '1.wv1-节点',
      lines: {
        '1.wv1.workers.dev': 1,
      }
   },
    'dshjh': {
      label: '001-kmw',
      lines: {
        '001.001.029.workers.dev': 1,
      }
    },
    'sffs-ij': {
      label: '002-kmw',
      lines: {
        '002.kmw.029.workers.dev': 1,
      }
    },
    'suyb-okm': {
      label: '03-kmw',
      lines: {
        'production.03.029.workers.dev': 1,
      }
    },
    'fafar-dffds': {
      label: '5-kmw',
      lines: {
        'production.5.029.workers.dev': 1,
      }
    },
    'dfgd-gfd': {
      label: '02-kmw',
      lines: {
        'production.02.029.workers.dev': 1,
      }
    },
    'fdgd-fgr': {
      label: '029hh-新浪',
      lines: {
        'production.029hh.029hh.workers.dev': 1,
      }
    },
    'mysite': {
      label: 'b5站点',
      lines: {
        'rapid-salad-f4b5.vvread.workers.dev': 1,
      }
    },
    'hflkjngfdu': {
      label: '029hh.odd新浪',
      lines: {
        '029hh.odd-001.029hh.workers.dev': 1,
      }
    },
    'zjhndbe': {
      label: 'ifeng.jz-126',
      lines: {
        'ifeng.jz126.workers.dev': 1,
      }
    },
    'hubrnjokj': {
      label: '029-1雅虎',
      lines: {
        'patient-resonance-d097.029.workers.dev': 1,
      }
    },
    'kjnokj': {
      label: 'jh5站点',
      lines: {
        '029hh.odd-001.029hh.workers.dev': 1,
      }
    },
    'lkmjij': {
      label: 'jh2.029ff站点',
      lines: {
        'production.a.029hh.workers.dev': 1,
     }
    },
    'lkkjh': {
      label: 'j.xj2站点',
      lines: {
        'j.xj2.workers.dev': 1,
     }
    },
    'lkujhj': {
      label: '64ee.693站点',
      lines: {
        'damp-shape-64ee.693.workers.dev': 1,
     }
    },
    'dewsxokm': {
      label: 'xinlang站点',
      lines: {
        '029.jh2.029hh.workers.dev': 1,
     }
    },
    'dfeifdfj': {
      label: 'feichang99站点',
      lines: {
        'feichang.029.workers.dev': 1,
     }
    },
    'lkmrdvj': {
      label: '1.693站点',
      lines: {
        '1.693.workers.dev': 1,
     }
    },
    'cfworker': {
      label: 'jz',
      lines: {
        'jj.693.workers.dev': 1,
        'j.xj2.workers.dev': 1,
        'damp-shape-64ee.693.workers.dev': 1,
        'dark-bread-0041.693.workers.dev': 1,
        'red-breeze-27a6.693.workers.dev': 1,
        'jh5.029sina.workers.dev': 1,
        '1.yd139.workers.dev': 1,
        '1.wv1.workers.dev': 1,
        '2.yd029.workers.dev': 1,
        'jh.029sina.workers.dev': 1,
        'bold-sky-960f.693.workers.dev': 1,
        'proud-moon-1d61.693.workers.dev': 1,
        'dark-block-0f89.693.workers.dev': 1,
        'hidden-mud-dfe9.693.workers.dev': 1,
        '1.693.workers.dev': 1,
        '1112u.029.workers.dev': 1,
        '1112v.029.workers': 1,
        'sparkling-dust-39b8.029.workers.dev': 1,
        'throbbing-term-1ac3.029.workers.dev': 1,
        'damp-sea-e13b.029.workers.dev': 1,
        'billowing-silence-c555.029.workers.dev': 1,
      }
    }
  },

  /**
   * 默认节点
   */
  node_default: 'mysite',
  // node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<!-- custom html -->',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://php.net/'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
