import "./Container.scss"

import classnames from "classnames"

const Container = ({ className, ...props }) => {
  const classNames = classnames("container", {
    [className]: className,
  })

  return <div className={classNames} {...props} />
}

export default Container
