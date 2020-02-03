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
              "@_instanceName": "emeraldOne",
              "@_port": "9990"
            },
            {
              "name": "connectionPools",
              "children": [
                {
                  "name": "connectionPool",
                  "children": [
                    {
                      "@_name": "emerald-pool",
                      "@_username": "smsserv",
                      "@_password": "smsserv",
                      "@_url": "jdbc:oracle:thin:@(DESCRIPTION = (ADDRESS=(PROTOCOL=TCP)(HOST=10.0.153.137)(PORT=1521)) (ADDRESS=(PROTOCOL=TCP)(HOST=10.0.153.138)(PORT=1521))  (ADDRESS=(PROTOCOL=TCP)(HOST=10.0.153.139)(PORT=1521)) (ADDRESS=(PROTOCOL=TCP)(HOST=10.0.153.140)(PORT=1521)) (FAILOVER=ON)(LOAD_BALANCE=YES)\t(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=APPGROUP1.AZSRVC)\t(FAILOVER_MODE=(TYPE=SELECT)(METHOD=PRECONNECT)(RETRIES=180)(DELAY=5))) )",
                      "@_driverClassName": "oracle.jdbc.driver.OracleDriver",
                      "@_initialSize": "20",
                      "@_maxActive": "60"
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
                      "@_name": "onsubs-pool",
                      "@_username": "emerald",
                      "@_password": "emerald",
                      "@_url": "jdbc:oracle:thin:@(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = onsubs-scan.azercell.com)(PORT = 1521)) (FAILOVER = ON) (LOAD_BALANCE = YES)(CONNECT_DATA =(SERVER = DEDICATED) (SERVICE_NAME = SRV_ONSUBS.AZERCELL.COM)))",
                      "@_driverClassName": "oracle.jdbc.driver.OracleDriver",
                      "@_initialSize": "3",
                      "@_maxActive": "30"
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
                      "@_name": "bscs-pool",
                      "@_username": "emerald",
                      "@_password": "emerald",
                      "@_url": "jdbc:oracle:thin:@10.0.153.20:1521:BSCS",
                      "@_driverClassName": "oracle.jdbc.driver.OracleDriver",
                      "@_initialSize": "3",
                      "@_maxActive": "10"
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
                      "@_name": "bscs-billing-pool",
                      "@_username": "emerald_billing",
                      "@_password": "emerbil",
                      "@_url": "jdbc:oracle:thin:@10.0.153.20:1521:BSCS",
                      "@_driverClassName": "oracle.jdbc.driver.OracleDriver",
                      "@_initialSize": "3",
                      "@_maxActive": "10"
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
                      "@_name": "default",
                      "@_connectionPool": "onsubs-pool"
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
                      "@_name": "fromshortnumber",
                      "@_connectionPool": "onsubs-pool"
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
                      "@_name": "sms_http_alphanumeric",
                      "@_connectionPool": "onsubs-pool",
                      "@_connectionType": "http"
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
                      "@_name": "sms_http_short_number",
                      "@_connectionPool": "onsubs-pool",
                      "@_connectionType": "http"
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
                      "@_name": "openmind",
                      "@_connectionPool": "onsubs-pool",
                      "@_connectionType": "openmind"
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
                      "@_name": "default",
                      "@_size": "40",
                      "@_queueSize": "1000"
                    }
                  ]
                },
                {
                  "name": "threadPool",
                  "children": [
                    {
                      "@_name": "smsSender",
                      "@_size": "1",
                      "@_queueSize": "100"
                    }
                  ]
                },
                {
                  "name": "threadPool",
                  "children": [
                    {
                      "@_name": "balancePluginThreadPool",
                      "@_size": "30",
                      "@_queueSize": "5000"
                    }
                  ]
                },
                {
                  "name": "threadPool",
                  "children": [
                    {
                      "@_name": "vsmeSubscriptionPluginThreadPool",
                      "@_size": "30",
                      "@_queueSize": "3000"
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
                      "@_id": "6569",
                      "@_class": "com.azercell.emerald.request.handler.RequestHandlerPlugin",
                      "@_threadPoolName": "default",
                      "@_configFile": "../conf/pptc.xml"
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "@_id": "6569",
                      "@_class": "com.azercell.emerald.request.handler.RequestHandlerPlugin",
                      "@_threadPoolName": "default",
                      "@_configFile": "../conf/pptc.xml"
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "@_id": "6569",
                      "@_class": "com.azercell.emerald.request.handler.RequestHandlerPlugin",
                      "@_threadPoolName": "default",
                      "@_configFile": "../conf/pptc.xml"
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "@_id": "606978",
                      "@_class": "com.azercell.emerald.request.handler.RequestHandlerPlugin",
                      "@_threadPoolName": "default",
                      "@_configFile": "../conf/mnp/mnpkombo_25_45_old.xml"
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "@_id": "606978",
                      "@_class": "com.azercell.emerald.request.handler.RequestHandlerPlugin",
                      "@_threadPoolName": "default",
                      "@_configFile": "../conf/mnp/mnpkombo_25_45_old.xml"
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "@_id": "606978",
                      "@_class": "com.azercell.emerald.request.handler.RequestHandlerPlugin",
                      "@_threadPoolName": "default",
                      "@_configFile": "../conf/mnp/mnpkombo_25_45_old.xml"
                    }
                  ]
                },
                {
                  "name": "plugin",
                  "children": [
                    {
                      "@_id": "-300",
                      "@_class": "com.azercell.emerald.test.SmsSenderPlugin",
                      "@_threadPoolName": "smsSender",
                      "@_configFile": "../conf/sms-sender.properties"
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
