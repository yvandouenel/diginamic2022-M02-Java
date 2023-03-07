
import { useState } from 'react'

export default function Calculate() {
    const [counter, setCounter] = useState(0);

    const onClickAdd = () => {
        setCounter(counter + 1)
      }

      const onClickSubtract = () => {
        setCounter(counter - 1)
      }

      return {
        counter,
        onClickAdd,
        onClickSubtract
      }
}