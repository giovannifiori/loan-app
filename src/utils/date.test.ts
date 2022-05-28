import { todayWithoutTime } from './date'

test('todayWithoutTime gets todays date without time', () => {
  jest.useFakeTimers('modern').setSystemTime(new Date(2022, 4, 28))

  let today = todayWithoutTime()
  expect(today.getTime()).toEqual(1653710400000)

  jest.useFakeTimers('modern').setSystemTime(new Date(2022, 4, 30))
  today = todayWithoutTime()
  expect(today.getTime()).toEqual(1653883200000)
})
