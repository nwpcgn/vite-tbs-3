// @index(['./*.svelte', './list/*.svelte'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
import Hsp from './Hsp.svelte';
import NotFound from './NotFound.svelte';
import Settings from './Settings.svelte';
import Start from './Start.svelte';
// @endindex

  const routes = {
    '/': Start,
    '/hsp/*': Hsp,
    '/settings/*': Settings,
    '*': NotFound
  }
  
  export default routes;