import React, { useEffect, useState } from "react"

type inViewProps = {
  children: React.FunctionComponent<boolean>
}

function InView({children}: inViewProps) {
    const [inView, setInView] = useState(false)
    const element = children(inView)
    let options = {
      rootMargin: '-30%'
    }
    useEffect(() => {
      const intersectionObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !inView) {
          setInView(true)
        }
      }, options)
      intersectionObserver.observe(document.querySelector(`#${element!.props.id}`) as HTMLDivElement)
      return () => intersectionObserver.disconnect()
    })

  return (
    <>
        {children(inView)}
    </> 
    );
}

export default InView;