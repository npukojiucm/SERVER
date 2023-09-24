const app = require('./app');
const socketChat = require('./websocket/Chat');
const port = process.env.PORT || 8080;
// const socketInstance = require('./websocket/InstanceManager');

const server = app.listen(port, () => {
  console.log('App is running on http://localhost:3000');
});
socketChat(server);
// socketInstance(server);
