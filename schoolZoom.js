links = [
  'zoommtg://zoom.us/join?action=join&confno=3452003893&pwd=NEdNKytHTTBZUTlpV3lyOTdjWWt1dz09',
  'zoommtg://zoom.us/join?action=join&confno=99420045385&pwd=Q2RYUVVNa1RzOVVoNHBQV2hvNzEzdz09',
  '',
  'zoommtg://zoom.us/join?action=join&confno=93595386954&pwd=R090eFFzeDVocXVRMkY2QjNMUzZoZz09',
  'zoommtg://zoom.us/join?action=join&confno=83234954217&pwd=czZ5MjFnYVUzRHlhbHRMekprL0Q4QT09',
  ''
];

teachers = [
  'Lee',
  'Burton',
  'Luna',
  'Lin',
  'Buehler',
  'Chiu'
];

var args = process.argv.slice(2);

var link = links[args[0] - 1];
var teacher = teachers[args[0] - 1];

const cocoaDialog = require('cocoa-dialog');
const execSync = require('child_process').execSync;

(async () => {
	const result = await cocoaDialog('msgbox', {
		title: 'Launch Zoom Meeting',
		text: `Launch ${teacher}?`,
    button1: 'Yes',
    button2: 'No'
	});

  if (result === '1') {
    const output = execSync(`open "${link}"`, { encoding: 'utf-8' });
  }
})();