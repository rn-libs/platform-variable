# Platform Variable
### install
```npm install platform-variable```
### how to use
```js
import { platformVariable } from 'platform-variable'

const styles = StyleSheet.create({
  container: {
    background: platformVariable('red', 'green', 'blue'),
  },
})
```