#  React native platform environment (rn-plat-envs)
### install
```npm install platform-variable```
### how to use
```js
import { platformVariable } from 'rn-plat-envs'

const styles = StyleSheet.create({
  container: {
    background: platformVariable('red', 'green', 'blue'),
  },
})
```