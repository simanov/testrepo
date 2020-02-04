import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-tree',
  templateUrl: './ag-tree.component.html',
  styleUrls: ['./ag-tree.component.scss']
})
export class AgTreeComponent implements OnInit {

  nodes = [
    {
      "name": "#document",
      "children": [
        {},
        {
          "name": "config",
          "children": [
            {
              "name": "attr",
              "children": [
                {
                  "name": "instanceName = emeraldOne"
                },
                {
                  "name": "port = 9990"
                }
              ]
            },
            {
              "name": "connectionPools",
              "children": [
                {
                  "name": "connectionPool",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = emerald-pool"
                        },
                        {
                          "name": "username = smsserv"
                        },
                        {
                          "name": "password = smsserv"
                        },
                        {
                          "name": "url = jdbc:oracle:thin:@(DESCRIPTION = (ADDRESS=(PROTOCOL=TCP)(HOST=10.0.153.137)(PORT=1521)) (ADDRESS=(PROTOCOL=TCP)(HOST=10.0.153.138)(PORT=1521))  (ADDRESS=(PROTOCOL=TCP)(HOST=10.0.153.139)(PORT=1521)) (ADDRESS=(PROTOCOL=TCP)(HOST=10.0.153.140)(PORT=1521)) (FAILOVER=ON)(LOAD_BALANCE=YES)\t(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=APPGROUP1.AZSRVC)\t(FAILOVER_MODE=(TYPE=SELECT)(METHOD=PRECONNECT)(RETRIES=180)(DELAY=5))) )"
                        },
                        {
                          "name": "driverClassName = oracle.jdbc.driver.OracleDriver"
                        },
                        {
                          "name": "initialSize = 20"
                        },
                        {
                          "name": "maxActive = 60"
                        }
                      ]
                    },
                    {},
                    {
                      "name": "maxAge",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "jmxEnabled",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testWhileIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testOnBorrow",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "validationQuery",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testOnReturn",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "validationInterval",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "timeBetweenEvictionRunsMillis",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "maxWait",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "removeAbandonedTimeout",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "minEvictableIdleTimeMillis",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "minIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "maxIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "logAbandoned",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "removeAbandoned",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "initSQL",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "initSQL",
                      "children": [
                        {}
                      ]
                    }
                  ]
                },
                {
                  "name": "connectionPool",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = onsubs-pool"
                        },
                        {
                          "name": "username = emerald"
                        },
                        {
                          "name": "password = emerald"
                        },
                        {
                          "name": "url = jdbc:oracle:thin:@(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = onsubs-scan.azercell.com)(PORT = 1521)) (FAILOVER = ON) (LOAD_BALANCE = YES)(CONNECT_DATA =(SERVER = DEDICATED) (SERVICE_NAME = SRV_ONSUBS.AZERCELL.COM)))"
                        },
                        {
                          "name": "driverClassName = oracle.jdbc.driver.OracleDriver"
                        },
                        {
                          "name": "initialSize = 3"
                        },
                        {
                          "name": "maxActive = 30"
                        }
                      ]
                    },
                    {
                      "name": "maxAge",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "jmxEnabled",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testWhileIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testOnBorrow",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "validationQuery",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testOnReturn",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "validationInterval",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "timeBetweenEvictionRunsMillis",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "maxWait",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "removeAbandonedTimeout",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "minEvictableIdleTimeMillis",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "minIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "maxIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "logAbandoned",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "removeAbandoned",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "initSQL",
                      "children": [
                        {}
                      ]
                    }
                  ]
                },
                {
                  "name": "connectionPool",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = bscs-pool"
                        },
                        {
                          "name": "username = emerald"
                        },
                        {
                          "name": "password = emerald"
                        },
                        {
                          "name": "url = jdbc:oracle:thin:@10.0.153.20:1521:BSCS"
                        },
                        {
                          "name": "driverClassName = oracle.jdbc.driver.OracleDriver"
                        },
                        {
                          "name": "initialSize = 3"
                        },
                        {
                          "name": "maxActive = 10"
                        }
                      ]
                    },
                    {
                      "name": "maxAge",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "jmxEnabled",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testWhileIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testOnBorrow",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "validationQuery",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testOnReturn",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "validationInterval",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "timeBetweenEvictionRunsMillis",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "maxWait",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "removeAbandonedTimeout",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "minEvictableIdleTimeMillis",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "minIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "maxIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "logAbandoned",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "removeAbandoned",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "initSQL",
                      "children": [
                        {}
                      ]
                    }
                  ]
                },
                {
                  "name": "connectionPool",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = bscs-billing-pool"
                        },
                        {
                          "name": "username = emerald_billing"
                        },
                        {
                          "name": "password = emerbil"
                        },
                        {
                          "name": "url = jdbc:oracle:thin:@10.0.153.20:1521:BSCS"
                        },
                        {
                          "name": "driverClassName = oracle.jdbc.driver.OracleDriver"
                        },
                        {
                          "name": "initialSize = 3"
                        },
                        {
                          "name": "maxActive = 10"
                        }
                      ]
                    },
                    {
                      "name": "maxAge",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "jmxEnabled",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testWhileIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testOnBorrow",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "validationQuery",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "testOnReturn",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "validationInterval",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "timeBetweenEvictionRunsMillis",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "maxWait",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "removeAbandonedTimeout",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "minEvictableIdleTimeMillis",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "minIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "maxIdle",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "logAbandoned",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "removeAbandoned",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "initSQL",
                      "children": [
                        {}
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "smsSenders",
              "children": [
                {
                  "name": "smsSender",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = default"
                        },
                        {
                          "name": "connectionPool = onsubs-pool"
                        }
                      ]
                    },
                    {
                      "name": "sourceTon",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "sourceNpi",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "priority",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "smsValidity",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "intervalStart",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "intervalEnd",
                      "children": [
                        {}
                      ]
                    }
                  ]
                },
                {
                  "name": "smsSender",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = fromshortnumber"
                        },
                        {
                          "name": "connectionPool = onsubs-pool"
                        }
                      ]
                    },
                    {
                      "name": "sourceTon",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "sourceNpi",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "priority",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "smsValidity",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "intervalStart",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "intervalEnd",
                      "children": [
                        {}
                      ]
                    }
                  ]
                },
                {
                  "name": "smsSender",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = sms_http_alphanumeric"
                        },
                        {
                          "name": "connectionPool = onsubs-pool"
                        },
                        {
                          "name": "connectionType = http"
                        }
                      ]
                    },
                    {
                      "name": "sourceTon",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "sourceNpi",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "priority",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "smsValidity",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "intervalStart",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "intervalEnd",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "webUrl",
                      "children": [
                        {}
                      ]
                    }
                  ]
                },
                {
                  "name": "smsSender",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = sms_http_short_number"
                        },
                        {
                          "name": "connectionPool = onsubs-pool"
                        },
                        {
                          "name": "connectionType = http"
                        }
                      ]
                    },
                    {
                      "name": "sourceTon",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "sourceNpi",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "priority",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "smsValidity",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "intervalStart",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "intervalEnd",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "webUrl",
                      "children": [
                        {}
                      ]
                    }
                  ]
                },
                {
                  "name": "smsSender",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = openmind"
                        },
                        {
                          "name": "connectionPool = onsubs-pool"
                        },
                        {
                          "name": "connectionType = openmind"
                        }
                      ]
                    },
                    {
                      "name": "webUrl",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "username",
                      "children": [
                        {}
                      ]
                    },
                    {
                      "name": "password",
                      "children": [
                        {}
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "threadPools",
              "children": [
                {
                  "name": "threadPool",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = default"
                        },
                        {
                          "name": "size = 40"
                        },
                        {
                          "name": "queueSize = 1000"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "threadPool",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = smsSender"
                        },
                        {
                          "name": "size = 1"
                        },
                        {
                          "name": "queueSize = 100"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "threadPool",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = balancePluginThreadPool"
                        },
                        {
                          "name": "size = 30"
                        },
                        {
                          "name": "queueSize = 5000"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "threadPool",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "name = vsmeSubscriptionPluginThreadPool"
                        },
                        {
                          "name": "size = 30"
                        },
                        {
                          "name": "queueSize = 3000"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "plugins",
              "children": [
                {
                  "name": "plugin",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "id = 6569"
                        },
                        {
                          "name": "class = com.azercell.emerald.request.handler.RequestHandlerPlugin"
                        },
                        {
                          "name": "threadPoolName = default"
                        },
                        {
                          "name": "configFile = ../conf/pptc.xml"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "id = 6569"
                        },
                        {
                          "name": "class = com.azercell.emerald.request.handler.RequestHandlerPlugin"
                        },
                        {
                          "name": "threadPoolName = default"
                        },
                        {
                          "name": "configFile = ../conf/pptc.xml"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "id = 6569"
                        },
                        {
                          "name": "class = com.azercell.emerald.request.handler.RequestHandlerPlugin"
                        },
                        {
                          "name": "threadPoolName = default"
                        },
                        {
                          "name": "configFile = ../conf/pptc.xml"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "id = 606978"
                        },
                        {
                          "name": "class = com.azercell.emerald.request.handler.RequestHandlerPlugin"
                        },
                        {
                          "name": "threadPoolName = default"
                        },
                        {
                          "name": "configFile = ../conf/mnp/mnpkombo_25_45_old.xml"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "id = 606978"
                        },
                        {
                          "name": "class = com.azercell.emerald.request.handler.RequestHandlerPlugin"
                        },
                        {
                          "name": "threadPoolName = default"
                        },
                        {
                          "name": "configFile = ../conf/mnp/mnpkombo_25_45_old.xml"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "id = 606978"
                        },
                        {
                          "name": "class = com.azercell.emerald.request.handler.RequestHandlerPlugin"
                        },
                        {
                          "name": "threadPoolName = default"
                        },
                        {
                          "name": "configFile = ../conf/mnp/mnpkombo_25_45_old.xml"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "name": "attr",
                      "children": [
                        {
                          "name": "id = -300"
                        },
                        {
                          "name": "class = com.azercell.emerald.test.SmsSenderPlugin"
                        },
                        {
                          "name": "threadPoolName = smsSender"
                        },
                        {
                          "name": "configFile = ../conf/sms-sender.properties"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  options = {};




  constructor() { }

  ngOnInit() {
  }

}
