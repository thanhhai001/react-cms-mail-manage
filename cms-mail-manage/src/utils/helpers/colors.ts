import { ColorType } from "../enum/color.enum"

export const getColor = (type: ColorType = ColorType.PRIMARY, isStrong: boolean = false) => {

  switch (type) {
    case ColorType.PRIMARY:
      return `blue-${isStrong ? '400' : '200'}`
    case ColorType.INFO:
      return `sky-${isStrong ? '600' : '400'}`
    case ColorType.SUCCESS:
      return `green-${isStrong ? '600' : '400'}`
    case ColorType.WARNING:
      return `yellow-${isStrong ? '600' : '400'}`
    case ColorType.DANGER:
      return `red-${isStrong ? '600' : '400'}`
    case ColorType.LIGHT:
      return 'white'
    case ColorType.DARK:
      return 'black'

    default:
      return `blue-${isStrong ? '600' : '400'}`
  }
}