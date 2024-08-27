import { IPropFieldBase } from "@/core/types";
import FieldLabel from "./FieldLabel";
import { ColorType } from "@/utils/enum/color.enum";
import { getColor } from "@/utils/helpers/colors";
import FieldInput from "./FieldInput";

export function FieldBase(props: IPropFieldBase) {
  const color = getColor(props.errorMessage ? ColorType.DANGER : ColorType.PRIMARY)
  const colorStrong = getColor(props.errorMessage ? ColorType.DANGER : ColorType.PRIMARY, true)
  const outline = `border-${color} hover:border-${colorStrong} focus:border-${colorStrong}`
  return (
    <>
      <div className="field">
        <FieldLabel title={props.label} color={`text-${colorStrong}`} errorMessage={props.errorMessage} />
        <FieldInput outline={outline} placeholder={props.placeholder} register={props.register} />
      </div>
    </>
  )
}
export default FieldBase