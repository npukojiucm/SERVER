const app = require('./app');
const socket = require('./socket');
const socketInstance = require('./websocket/InstanceManager');

const server = app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});
socket(server);
socketInstance(server);
