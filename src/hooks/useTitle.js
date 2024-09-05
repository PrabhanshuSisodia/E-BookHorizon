import { useEffect } from "react";

const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - E-BookHorizon`
    }, [title])

  return null;
}

export  {useTitle}
