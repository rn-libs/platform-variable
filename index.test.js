
afterEach(() => {
  jest.resetModules()
})

test('Test ios & ios is not X', async () => {
  const { platformVariable } = await import('./index')

  jest.mock('react-native', () => ({ Platform: { OS: 'ios' } }))
  jest.mock('react-native-iphone-x-helper', () => ({ isIphoneX: () => false }))
  const result = platformVariable('android', 'ios')

  expect(result).toBe('ios')
})

test('Test ios & ios is X', async () => {
  const { platformVariable } = await import('./index')

  jest.mock('react-native', () => ({ Platform: { OS: 'ios' } }))
  jest.mock('react-native-iphone-x-helper', () => ({ isIphoneX: () => true }))
  const result = platformVariable('android', 'ios', 'iosx')

  expect(result).toBe('iosx')
})

test('Test android', async () => {
  const { platformVariable } = await import('./index')

  jest.mock('react-native', () => ({ Platform: { OS: 'android' } }))
  const result = platformVariable('android', 'ios', 'iosx')

  expect(result).toBe('android')
})
