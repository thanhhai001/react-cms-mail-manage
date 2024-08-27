import { IPropFieldInput } from "@/core/types";

export function FieldInput(props: IPropFieldInput) {
  return (
    <>
      <input
        className={`w-full py-4 px-4 rounded-md border-2 outline-none ${props.outline ?? ''}`}
        placeholder={props.placeholder ?? ''}
        {...props.register} />
    </>
  )
}

export default FieldInput