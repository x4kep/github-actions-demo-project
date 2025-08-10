import rimraf from 'rimraf';
import mkdirp from 'mkdirp';

rimraf('./dist', (err) => {
  if (err) {
    console.error('Error deleting dist:', err);
    process.exit(1);
  } else {
    mkdirp('./dist/logs')
      .then(() => {
        console.log('Cleaned ./dist and created ./dist/logs');
      })
      .catch((err) => {
        console.error('Error creating dist/logs:', err);
        process.exit(1);
      });
  }
});