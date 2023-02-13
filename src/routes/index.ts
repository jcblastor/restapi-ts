import { Router } from 'express';
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`

const router = Router();

const cleanFile = (fileName: string) => {
  return fileName.split('.').shift();
}

readdirSync(PATH_ROUTER).filter(file => {
  const fileName = cleanFile(file);

  if(fileName !== 'index') {
    import(`./${fileName}`).then( m => {
      router.use(`/${fileName}s`, m.router)
    });
  }
})

export { router };