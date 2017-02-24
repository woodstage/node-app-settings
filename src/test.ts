import * as path from 'path'
import * as os from 'os'
import * as settings from './index'

const homedir = os.homedir()
const dir = path.join(homedir, 'test')

let s1 = settings.create(path.join(dir, 's1.json'))
s1.config['name'] = 's1'
s1.flush()

let s2 = settings.create(path.join(dir, 's2.json'), 'ini')
s2.config['name']  = 's2'
s2.flush()

let s3 = settings.create(path.join(dir, 's3.ini'), 'json')
s3.config['name']  = 's3'
s3.flush()

let s4 = settings.create(path.join(dir, 's4.ini'))
s4.config['name'] = 's4'
s4.flush()
