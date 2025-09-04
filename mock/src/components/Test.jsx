import { useMemo } from "react"; 

function Test() {

  const array = [1,2,3,4,5];

  const even = useMemo(() => {
    return array.filter((num) => num % 2 === 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  console.log(even);

  return (
    <></>
  )
}

export default Test
