import express from 'express';

// create express server
const app = express();

// server configuration
app.set('port', process.env.BUBBLETALK_LOCATOR_PORT || 8000);

//  listen and display server status
const host = 'localhost';
const port = app.get('port');
const env = app.get('env');
const server = app.listen(port, () => {
    console.log(`App is running at http://${host}:${port} in ${env} mode`);
    console.log('Press CTRL-C to stop\n');
});

export default server;