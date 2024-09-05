
const Rating = ({rating}) => {
    let ratinhgArray = Array(5).fill(false);
    for(let i=0; i<rating; i++){
        ratinhgArray[i] = true;
    }

  return (
    <>
        {ratinhgArray.map((value, index) => (
            value ? (
            <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            ) : (
            <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>
            )
        ))}
    </>
  )
}

export  {Rating}
