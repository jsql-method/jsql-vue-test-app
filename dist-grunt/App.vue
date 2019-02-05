<template>
  <div id="app">
    <img alt="Vue logo" id="logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="cases in tab" class="table">
      <div class="table-number">{{ cases.name }}</div>
      <div class="table-cases">{{ cases.token }}</div>
      <div class="table-status">{{ cases.status }}</div>
    </div>
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import JsqlService from 'jsql-axios-plugin';
    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        data(){
            return {
                tab: []
            }
        },
        created() {
            importPluginAxios();
            this._data.tab = [{
                key: 1,
                name: '1',
                status: 'not run',
                token: 'insert',
                exec: () => {
                    vueJSQL.jsql.insert('insert into person (id, name, surname, age) values (nextval(\'hibernate_sequence\'), :name, :surname, :age)')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 2,
                name: '2',
                status: 'not run',
                token: 'insert',
                exec: () => {
                    vueJSQL.jsql.insert('insert into ludzie (ids, imie, surname, age) values (nextval(\'hibernate_sequence\'), :names, :surname, :age)')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 3,
                name: '3',
                status: 'not run',
                token: 'insert',
                exec: () => {
                    vueJSQL.jsql.insert('NysZkuClgfoAf80V9gRA')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 4,
                name: '4',
                status: 'not run',
                token: 'delete',
                exec: () => {
                    vueJSQL.jsql.delete('5dZQa1w1QBckTpfJQjbg2Q')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 5,
                name: '5',
                status: 'not run',
                token: 'delete',
                exec: () => {
                    vueJSQL.jsql.delete('QvK9cVfLCgdTBL7estvj9Q')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 6,
                name: '6',
                status: 'not run',
                token: 'delete',
                exec: () => {
                    vueJSQL.jsql.delete('')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 7,
                name: '7',
                status: 'not run',
                token: 'select',
                exec: () => {
                    vueJSQL.jsql.select('NJiE0YnGZJcXsE1cOnFGKg')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 8,
                name: '8',
                status: 'not run',
                token: 'select',
                exec: () => {
                    vueJSQL.jsql.select('NJiE0YnGZJcXsE1cOnFGKg')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 9,
                name: '9',
                status: 'not run',
                token: 'update',
                exec: () => {
                    vueJSQL.jsql.update('FaMqT8FvQMKzj7TBOlFZA')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 10,
                name: '10',
                status: 'not run',
                token: 'update',
                exec: () => {
                    vueJSQL.jsql.update('iUsQkS6UR2XnpXZaYiSOMg')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }];
            this._data.tab.forEach((tab) => {
                tab.status = "run";
                tab.exec();
            })
        }
    }

    function importPluginAxios() {
        vueJSQL = new JsqlService({host:'http://localhost:18088'});
    }

    var vueJSQL;


</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    text-align: center;
    background-image: linear-gradient(#282c34, gray);
    color: white;
    float: left;
    width: 100%;
  }

  #logo {
    animation: App-logo-spin infinite 0.1s linear;
  }

  .table {
    float: left;
    width: 100%;
    border: 1px solid white;
  }

  .table-number,
  .table-cases,
  .table-status{
    float: left;
    width: 33.3333%;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>