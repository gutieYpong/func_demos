import { Input } from "@chakra-ui/react"
import { forwardRef } from "react"

/**
 * ...the code below includes the usage of:
 * - forwardRef() : the best way
 * - forwarding ref by props : not a good way
 * - manually forwarding ref : better way
 */

<Input
    ref={ref}  //* should using `forwardRef()` to explicitly forward the ref
    ref={initialRef}  //* this works
    ref={(inputRef) => {  //* manually forwarding the ref
    if (initialRef) {
      initialRef.current = inputRef;
    }
  }}
  // ...
/>


/**
 * The code is creating a new component called `InputWithRef` using the `forwardRef` function.
 * This allows the component to receive a `ref` prop and
 * forward it to the underlying `Input` component.
 */
const InputWithRef = forwardRef(function InputWithRef(props, ref) {
  return (
    <Input
      ref={ref}
      {...props}
    />
  )
})

export default InputWithRef