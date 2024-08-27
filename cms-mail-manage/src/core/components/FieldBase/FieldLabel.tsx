import { IPropFieldLable } from "@/core/types";

export function FieldLabel(props: IPropFieldLable) {
  // const color = props.error?.message ? 'red-600' : 'dark'
  // const outline = props.error?.message ? `border-red-400 hover:border-red-600 focus:border-red-600` : `border-gray-200 hover:border-blue-400 focus:border-blue-400`
  return (
    <>
      <div className="flex justify-between">
        <label className="basis-auto text-start"> {props.title}</label>
        <label className={`basis-auto text-end ${props.color}`}> {props.errorMessage}</label>
      </div>
    </>
  )
}

export default FieldLabel