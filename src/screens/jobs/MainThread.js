import { self } from 'react-native-threads';
// import { self } from 'react-native-workers';

let count = 0;

self.onmessage = message => {
    console.log(`THREAD: got message ${message}`);

    count++;

    self.postMessage(`Message #${count} from worker thread!`);
}